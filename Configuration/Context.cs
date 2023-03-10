using CsharpPlusReact.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CsharpPlusReact.Configuration {
    public class Context : DbContext {

        public Context(DbContextOptions<Context> options) : base(options) {
            Database.EnsureCreated();
        }

        public DbSet<Product> Product { get; set; }
        public DbSet<User> User { get; set; }
    }
}