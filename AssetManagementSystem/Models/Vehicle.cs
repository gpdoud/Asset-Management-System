using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AssetManagementSystem.Models
{
    public class Vehicle
    {
        public int Id { get; set; }

        public string Make { get; set; }

        public string Model { get; set; }

        public string VIN { get; set; }

        public void Copy(Vehicle vehicle)
        {
            Id = vehicle.Id;
            Make = vehicle.Make;
            Model = vehicle.Model;
            VIN = vehicle.VIN;
        }
    }
}