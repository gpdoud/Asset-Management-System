using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using AssetManagementSystem.Models;
using Utility;

namespace AssetManagementSystem.Controllers
{
    public class VehiclesController : Controller
    {
        private AssetManagementSystemContext db = new AssetManagementSystemContext();

        /// <summary>
        /// HTTP POST Add vehicle to the database
        /// </summary>
        /// <param name="asset">JSON Vehicle object from HTTP Body</param>
        /// <returns>JSON Msg</returns>
        public ActionResult Add([System.Web.Http.FromBody] Vehicle vehicle)
        {
            // if the ModelState is valid (no existing errors)
            if (ModelState.IsValid)
            {
                db.Vehicles.Add(vehicle); // add our vehicle
                int numChanges = 0;
                try
                {
                    numChanges = db.SaveChanges();  // try to save changes
                }
                catch (Exception e)
                {
                    // we blew up, return the exception to the front end
                    return new JsonNetResult { Data = e };
                }

                // if we got here, return success
                return Json(new Msg { Result = "Success", Message = $"Vehicle.Add(): {numChanges} record(s) added." }, JsonRequestBehavior.AllowGet);
            }

            // ModelState is invalid
            return Json(new Msg { Result = "Error", Message = "Vehicle.Add(): ModelState invalid." }, JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// HTTP POST Change an existing vehicle in the database
        /// </summary>
        /// <param name="asset">JSON Vehicle Object from HTTP Body</param>
        /// <returns>JSON Msg</returns>
        public ActionResult Change([System.Web.Http.FromBody] Vehicle vehicle)
        {
            // do we have a valid vehicle?
            if (vehicle == null)
            {
                // nope; tell the user
                return Json(new Msg { Result = "Error", Message = "Vehicle.Change(): vehicle cannot be null." }, JsonRequestBehavior.AllowGet);
            }

            // try to find the vehicle to update
            Vehicle dbVehicle = db.Vehicles.Find(vehicle.Asset.Id);

            // did we find a vehicle?
            if (dbVehicle == null)
            {
                // no; tell the user
                return Json(new Msg { Result = "Error", Message = $"Vehicle.Change(): invalid asset id {vehicle.Asset.Id}." }, JsonRequestBehavior.AllowGet);
            }

            // yes; update it
            dbVehicle.Copy(vehicle);

            int numChanges = 0; // number of records changed on db.SaveChanges()
            if (ModelState.IsValid)
            {
                try
                {
                    numChanges = db.SaveChanges();  // try to save
                }
                catch (Exception e)
                {
                    // something blew up; pass it forward
                    return new JsonNetResult { Data = e };
                }

                // everything seems to have gone well
                return Json(new Msg { Result = "Success", Message = $"Vehicle.Change(): {numChanges} record(s) updated." }, JsonRequestBehavior.AllowGet);
            }

            // the ModelState is invalid
            return Json(new Msg { Result = "Error", Message = "Vehicle.Change(): ModelState invalid." }, JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// HTTP GET Gets vehicle from the database
        /// </summary>
        /// <param name="id">Vehicle.Id from URL</param>
        /// <returns>JSON Vehicle Object or error message</returns>
        public ActionResult Get(int? id)
        {
            // do we have an id and is it valid?
            if (id == null || id <= 0)
            {
                // no; tell the user
                return Json(new Msg { Result = "Error", Message = "Vehicle.Get(): Vehicle.Id null or zero." }, JsonRequestBehavior.AllowGet);
            }

            // try and find an vehicle
            Vehicle vehicle = db.Vehicles.Find(id);

            // did we find a vehicle?
            if (vehicle == null)
            {
                // no; tell the user
                return Json(new Msg { Result = "Error", Message = "Vehicle.Get(): Invalid Vehicle.Id." }, JsonRequestBehavior.AllowGet);
            }

            // delete the circular reference
            if (vehicle.Asset != null)
                vehicle.Asset.Vehicle = null;

            // we have an vehicle; return it
            return new JsonNetResult { Data = vehicle };
        }

        /// <summary>
        /// HTTP GET List all vehicles in the database
        /// </summary>
        /// <returns>JSON List of Vehicle objects</returns>
        public ActionResult List()
        {
            // get all vehicles from the database and ship them out
            List<Vehicle> vehicles = db.Vehicles.ToList();

            // delete any circular references
            foreach(Vehicle vehicle in vehicles)
            {
                // if this vehicle has an asset component (and it damned well better)
                if (vehicle.Asset != null)
                    vehicle.Asset.Vehicle = null;   // delete the reference back to itself
            }
            return new JsonNetResult { Data = vehicles };
        }

        /// <summary>
        /// HTTP GET Remove vehicle from the database
        /// </summary>
        /// <param name="id">Vehicle.Id from URL</param>
        /// <returns>JSON Msg</returns>
        public ActionResult Remove(int? id)
        {
            // did we get a valid id?
            if (id == null || id <= 0)
            {
                // no; tell the user
                return Json(new Msg { Result = "Error", Message = "Vehicle.Remove(): Vehicle.Id null or invalid." }, JsonRequestBehavior.AllowGet);
            }

            // try and find a vehicle with the provided Id
            Vehicle vehicle = db.Vehicles.Find(id);

            // did we find one?
            if (vehicle == null)
            {
                // no vehicle found
                return Json(new Msg { Result = "Error", Message = "Vehicle.Remove(): invalid Vehicle.Id." }, JsonRequestBehavior.AllowGet);
            }

            // Delete the vehicle
            db.Vehicles.Remove(vehicle);

            int numChanges = 0; // number of records changed
            try
            {
                // try to save changes
                numChanges = db.SaveChanges();
            }
            catch (Exception e)
            {
                // something blew up; ship the exception off
                return new JsonNetResult { Data = e };
            }

            // vehicle deleted
            return Json(new Msg { Result = "Success", Message = $"Vehicle.Remove(): {numChanges} record(s) deleted." }, JsonRequestBehavior.AllowGet);
        }

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
