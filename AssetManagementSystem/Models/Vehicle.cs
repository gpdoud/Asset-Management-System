using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AssetManagementSystem.Models
{
    public class Vehicle
    {
        [Key]
        [Required]
        public int AssetId { get; set; }
        [Required]
        public virtual Asset Asset { get; set; }

        [Required]
        public string Make { get; set; }

        [Required]
        public string Model { get; set; }

        //[Key]
        [Required]
        public string VIN { get; set; }

        public void Copy(Vehicle vehicle)
        {
            //Id = vehicle.Id;
            AssetId = vehicle.AssetId;
            Asset.Copy(vehicle.Asset);
            Make = vehicle.Make;
            Model = vehicle.Model;
            VIN = vehicle.VIN;
        }
    }
}