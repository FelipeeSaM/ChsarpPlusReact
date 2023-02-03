using CsharpPlusReact.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CsharpPlusReact.Configuration {
    public class ContextUser : DbContext {

        public ContextUser(DbContextOptions<ContextUser> options) : base(options) {
            Database.EnsureCreated();
        }

        public DbSet<User> User { get; set; }
    }
}