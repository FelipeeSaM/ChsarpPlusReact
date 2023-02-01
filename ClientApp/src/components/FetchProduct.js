import React, { Component } from "react";
import { Link } from "react-router-dom";

export class FetchProducts extends Component {
    static displayName = "Products";

    constructor() {
        super();
        this.state = {
            products: [],
            loading: true
        }
    }

    componentDidMount() {
        this.PopulateProductData();
    }

    static handleEdit(id) {
        window.location.href = "/product/edit/" + id;
    }

    static handleDelete(id) {
        !window.confirm(`Deseja deletar o produto ${id}?`) ? "" :
            fetch(`api/product/${id}`, { method: 'delete' }).then(
                json => {
                    window.location.href = "fetch-product";
                    alert("Produto deletado!");
                }
            )
    }

    static renderProductsTable(productsTable) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel" >
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {productsTable.map(prod =>
                        <tr key={prod.id}>
                            <td>{prod.id}</td>
                            <td>{prod.description}</td>

                            <td>
                                <button className="btn btn-success" onClick={(id) => this.handleEdit(prod.id)}>Edit</button> &nbsp;
                                <button className="btn btn-danger" onClick={(id) => this.handleDelete(prod.id)}>Delete</button>
                            </td>

                        </tr>

                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading ?
            <p><em>Carregando...</em></p> :
            FetchProducts.renderProductsTable(this.state.products);

        return (
            <div>
                <h1 id="tabelLabel">Produtos</h1>
                <p>Tela de listagem de produtos</p>
                <p>
                    <Link to="/add-product">Register product</Link>
                </p>
                {contents}
            </div>
        )
    }

    async PopulateProductData() {
        const response = await fetch('api/Products');
        const data = await response.json();

        this.setState({
            products: data,
            loading: false
        })
    }


}