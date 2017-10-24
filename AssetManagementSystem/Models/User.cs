using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AssetManagementSystem.Models
{
    public class User
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        [Required]
        public int AdminLevel { get; set; }

        [Required]
        public bool IsActive { get; set; }

        public void Copy(User user)
        {
            Id = user.Id;
            Username = user.Username;
            Password = user.Password;
            FirstName = user.FirstName;
            LastName = user.LastName;
            Email = user.Email;
            AdminLevel = user.AdminLevel;
            IsActive = user.IsActive;
        }
    }
}