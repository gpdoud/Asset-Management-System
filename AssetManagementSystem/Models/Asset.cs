using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AssetManagementSystem.Models
{
    public class Asset
    {
        [Required]
        public int Id { get; set; }

        public string Vendor { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public decimal Price { get; set; }

        public string Unit { get; set; }

        public string Photopath { get; set; }

        public void Copy(Asset asset)
        {
            Id = asset.Id;
            Vendor = asset.Vendor;
            Name = asset.Name;
            Price = asset.Price;
            Unit = asset.Unit;
            Photopath = asset.Photopath;
        }
    }
}