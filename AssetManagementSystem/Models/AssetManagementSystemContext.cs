using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AssetManagementSystem.Models
{
    public class AssetManagementSystemContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public AssetManagementSystemContext() : base("name=AssetManagementSystemContext")
        {
        }

        public System.Data.Entity.DbSet<AssetManagementSystem.Models.User> Users { get; set; }

        public System.Data.Entity.DbSet<AssetManagementSystem.Models.Asset> Assets { get; set; }

        public System.Data.Entity.DbSet<AssetManagementSystem.Models.Vehicle> Vehicles { get; set; }

        public System.Data.Entity.DbSet<AssetManagementSystem.Models.Location> Locations { get; set; }

        public System.Data.Entity.DbSet<AssetManagementSystem.Models.ServiceRecord> ServiceRecords { get; set; }
    }
}
