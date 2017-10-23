using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AssetManagementSystem.Models
{
    public class Vendor
    {
        public int Id { get; set; }

        public string Code { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public string Zip { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        public bool IsPreapproved { get; set; }

        public void Copy(Vendor vendor)
        {
            Id = vendor.Id;
            Code = vendor.Code;
            Name = vendor.Name;
            Address = vendor.Address;
            City = vendor.City;
            State = vendor.State;
            Zip = vendor.Zip;
            Phone = vendor.Phone;
            Email = vendor.Email;
            IsPreapproved = vendor.IsPreapproved;
        }
    }
}