using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CsharpPlusReact.Model {
    [Table("User")]
    public class User {
        [Column("Id")]
        public int Id { get; set; }

        [Column("Name")]
        public string User_name { get; set; }

        [Column("CPF")]
        public string User_CPF { get; set; }

    }
}
