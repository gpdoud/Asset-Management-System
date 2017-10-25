using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AssetManagementSystem.Models
{
    public class Location
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string Phone { get; set; }

        public void Copy(Location location)
        {
            Id = location.Id;
            Name = location.Name;
            Address = location.Address;
            Phone = location.Phone;
        }
    }
}