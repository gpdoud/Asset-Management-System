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
    public class UsersController : Controller
    {
        private AssetManagementSystemContext db = new AssetManagementSystemContext();

        /// <summary>
        /// HTTP POST Add user to the database
        /// </summary>
        /// <param name="user">JSON User object from HTTP Body</param>
        /// <returns>JSON Msg</returns>
        public ActionResult Add([System.Web.Http.FromBody] User user)
        {
            // if the ModelState is valid (no existing errors)
            if (ModelState.IsValid)
            {
                db.Users.Add(user); // add our user
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
                return Json(new Msg { Result = "Success", Message = $"User.Add(): {numChanges} record(s)." }, JsonRequestBehavior.AllowGet);
            }

            // ModelState is invalid
            return Json(new Msg { Result = "Error", Message = "User.Add(): ModelState invalid." });
        }

        /// <summary>
        /// HTTP POST Change an existing user in the database
        /// </summary>
        /// <param name="user">JSON User Object from HTTP Body</param>
        /// <returns>JSON Msg</returns>
        public ActionResult Change([System.Web.Http.FromBody] User user)
        {
            // do we have a valid user?
            if (user == null)
            {
                // nope; tell the user
                return Json(new Msg { Result = "Error", Message = "User.Change(): user cannot be null." });
            }

            // try to find the user to update
            User dbUser = db.Users.Find(user.Id);

            // did we find a user?
            if (dbUser == null)
            {
                // no; tell the user
                return Json(new Msg { Result = "Error", Message = $"User.Change(): invalid user id {user.Id}." }, JsonRequestBehavior.AllowGet);
            }

            // yes; update it
            dbUser.Copy(user);

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
                return Json(new Msg { Result = "Success", Message = $"User.Change(): {numChanges} record(s) updated." });
            }

            // the ModelState is invalid
            return Json(new Msg { Result = "Error", Message = "User.Change(): ModelState invalid." });
        }

        /// <summary>
        /// HTTP GET Gets user from the database
        /// </summary>
        /// <param name="id">User.Id from URL</param>
        /// <returns>JSON User Object or error message</returns>
        public ActionResult Get(int? id)
        {
            // do we have an id and is it valid?
            if (id == null || id <= 0)
            {
                // no; tell the user
                return Json(new Msg { Result = "Error", Message = "User.Get(): User.Id null or zero." });
            }

            // try and find a user
            User user = db.Users.Find(id);
            
            // did we find a user?
            if (user == null)
            {
                // no; tell the user
                return Json(new Msg { Result = "Error", Message = "User.Get(): Invalid User.Id." });
            }

            // we have a user; return it
            return new JsonNetResult { Data = user };
        }

        /// <summary>
        /// HTTP GET List all users in the database
        /// </summary>
        /// <returns>JSON List of User objects</returns>
        public ActionResult List()
        {
            // get all users from the database and ship them out
            return new JsonNetResult { Data = db.Users.ToList() };
        }
        
        /// <summary>
        /// HTTP GET Remove user from the database
        /// </summary>
        /// <param name="id">User.Id from URL</param>
        /// <returns>JSON Msg</returns>
        public ActionResult Remove(int? id)
        {
            // did we get a valid id?
            if (id == null || id <= 0)
            {
                // no; tell the user
                return Json(new Msg { Result = "Error", Message = "User.Remove(): User.Id null or invalid." });
            }

            // try and find a user with the provided Id
            User user = db.Users.Find(id);

            // did we find one?
            if (user == null)
            {
                // no user found
                return Json(new Msg { Result = "Error", Message = "User.Remove(): invalid User.Id." });
            }

            // Delete the user
            db.Users.Remove(user);

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

            // user deleted
            return Json(new Msg { Result = "Success", Message = $"User.Remove(): {numChanges} record(s) deleted." });
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
