using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AssetManagementSystem.Models
{
    public class Asset
    {
        public int Id { get; set; }

        public int VendorIdNumber { get; set; }

        public string Name { get; set; }

        public decimal Price { get; set; }

        public string Unit { get; set; }

        public string Photopath { get; set; }

        public void Copy(Asset asset)
        {
            Id = asset.Id;
            VendorIdNumber = asset.VendorIdNumber;
            Name = asset.Name;
            Price = asset.Price;
            Unit = asset.Unit;
            Photopath = asset.Photopath;
        }
    }
}