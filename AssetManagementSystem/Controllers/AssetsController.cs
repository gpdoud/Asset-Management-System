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
    public class AssetsController : Controller
    {
        private AssetManagementSystemContext db = new AssetManagementSystemContext();

        /// <summary>
        /// HTTP POST Add asset to the database
        /// </summary>
        /// <param name="asset">JSON Asset object from HTTP Body</param>
        /// <returns>JSON Msg</returns>
        public ActionResult Add([System.Web.Http.FromBody] Asset asset)
        {
            // if the ModelState is valid (no existing errors)
            if (ModelState.IsValid)
            {
                db.Assets.Add(asset); // add our asset
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
                return Json(new Msg { Result = "Success", Message = $"Asset.Add(): {numChanges} record(s)." }, JsonRequestBehavior.AllowGet);
            }

            // ModelState is invalid
            return Json(new Msg { Result = "Error", Message = "Asset.Add(): ModelState invalid." });
        }

        /// <summary>
        /// HTTP POST Change an existing asset in the database
        /// </summary>
        /// <param name="asset">JSON Asset Object from HTTP Body</param>
        /// <returns>JSON Msg</returns>
        public ActionResult Change([System.Web.Http.FromBody] Asset asset)
        {
            // do we have a valid asset?
            if (asset == null)
            {
                // nope; tell the user
                return Json(new Msg { Result = "Error", Message = "Asset.Change(): asset cannot be null." });
            }

            // try to find the asset to update
            Asset dbAsset = db.Assets.Find(asset.Id);

            // did we find an asset?
            if (dbAsset == null)
            {
                // no; tell the user
                return Json(new Msg { Result = "Error", Message = $"Asset.Change(): invalid asset id {asset.Id}." }, JsonRequestBehavior.AllowGet);
            }

            // yes; update it
            dbAsset.Copy(asset);

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
                return Json(new Msg { Result = "Success", Message = $"Asset.Change(): {numChanges} record(s) updated." }, JsonRequestBehavior.AllowGet);
            }

            // the ModelState is invalid
            return Json(new Msg { Result = "Error", Message = "Asset.Change(): ModelState invalid." });
        }

        /// <summary>
        /// HTTP GET Gets asset from the database
        /// </summary>
        /// <param name="id">Asset.Id from URL</param>
        /// <returns>JSON Asset Object or error message</returns>
        public ActionResult Get(int? id)
        {
            // do we have an id and is it valid?
            if (id == null || id <= 0)
            {
                // no; tell the user
                return Json(new Msg { Result = "Error", Message = "Asset.Get(): Asset.Id null or zero." });
            }

            // try and find an asset
            Asset asset = db.Assets.Find(id);

            // did we find an asset?
            if (asset == null)
            {
                // no; tell the user
                return Json(new Msg { Result = "Error", Message = "Asset.Get(): Invalid Asset.Id." });
            }

            // we have an asset; return it
            return new JsonNetResult { Data = asset };
        }

        /// <summary>
        /// HTTP GET List all assets in the database
        /// </summary>
        /// <returns>JSON List of Asset objects</returns>
        public ActionResult List()
        {
            // get all assets from the database and ship them out
            return new JsonNetResult { Data = db.Assets.ToList() };
        }

        /// <summary>
        /// HTTP GET Remove asset from the database
        /// </summary>
        /// <param name="id">Asset.Id from URL</param>
        /// <returns>JSON Msg</returns>
        public ActionResult Remove(int? id)
        {
            // did we get a valid id?
            if (id == null || id <= 0)
            {
                // no; tell the user
                return Json(new Msg { Result = "Error", Message = "Asset.Remove(): Asset.Id null or invalid." });
            }

            // try and find an asset with the provided Id
            Asset asset = db.Assets.Find(id);

            // did we find one?
            if (asset == null)
            {
                // no asset found
                return Json(new Msg { Result = "Error", Message = "Asset.Remove(): invalid Asset.Id." });
            }

            // Delete the asset
            db.Assets.Remove(asset);

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

            // asset deleted
            return Json(new Msg { Result = "Success", Message = $"Asset.Remove(): {numChanges} record(s) deleted." }, JsonRequestBehavior.AllowGet);
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
