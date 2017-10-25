namespace AssetManagementSystem.Migrations
{
    using AssetManagementSystem.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<AssetManagementSystem.Models.AssetManagementSystemContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "AssetManagementSystem.Models.AssetManagementSystemContext";
        }

        protected override void Seed(AssetManagementSystem.Models.AssetManagementSystemContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            context.Users.AddOrUpdate(
                u => u.Username,
                new User { Username = "user1", Password = "pw1", FirstName = "fn1", LastName = "ln1", Email = "email1", AdminLevel = 2, IsActive = true },
                new User { Username = "user2", Password = "pw2", FirstName = "fn2", LastName = "ln2", Email = "email2", AdminLevel = 1, IsActive = true },
                new User { Username = "user3", Password = "pw3", FirstName = "fn3", LastName = "ln3", Email = "email3", AdminLevel = 0, IsActive = true }
            );

            context.Assets.AddOrUpdate(
                a => a.Name,
                new Asset { Name = "asset1", Photopath = "", Price = 9.99M, Unit = "Ea.", Vendor = "bob" },
                new Asset { Name = "asset2", Photopath = "", Price = 8.99M, Unit = "Ea.", Vendor = "bob" },
                new Asset { Name = "asset3", Photopath = "", Price = 7.99M, Unit = "Ea.", Vendor = "bob" },
                new Asset { Name = "asset4", Photopath = "", Price = 6.00M, Unit = "Ea.", Vendor = "bob" }
            );
            context.SaveChanges();

            context.Vehicles.AddOrUpdate(
                v => v.VIN,
                new Vehicle { AssetId = context.Assets.SingleOrDefault(a => a.Name == "asset1").Id, Asset = context.Assets.SingleOrDefault(a => a.Name == "asset1"), VIN = "VIN1", Make = "Make1", Model = "Model1" },
                new Vehicle { AssetId = context.Assets.SingleOrDefault(a => a.Name == "asset1").Id, Asset = context.Assets.SingleOrDefault(a => a.Name == "asset2"), VIN = "VIN2", Make = "Make2", Model = "Model2" },
                new Vehicle { AssetId = context.Assets.SingleOrDefault(a => a.Name == "asset1").Id, Asset = context.Assets.SingleOrDefault(a => a.Name == "asset4"), VIN = "VIN4", Make = "Make4", Model = "Model4" }
            );
        }
    }
}
