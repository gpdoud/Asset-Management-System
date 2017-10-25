using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using AssetManagementSystem.Models;

namespace AssetManagementSystem.Controllers
{
    public class ServiceRecordsController : Controller
    {
        private AssetManagementSystemContext db = new AssetManagementSystemContext();

        // Add
        // Change
        // Get
        // List
        // Remove

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
