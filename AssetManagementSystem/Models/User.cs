using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AssetManagementSystem.Models
{
    public class User
    {
        public int Id { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public int AdminLevel { get; set; }

        public bool IsActive { get; set; }

        public void Copy(User user)
        {
            Id = user.Id;
            Username = user.Username;
            Password = user.Password;
            FirstName = user.FirstName;
            LastName = user.LastName;
        }
    }
}