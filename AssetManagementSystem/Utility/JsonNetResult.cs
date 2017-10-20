using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Utility {

	public class JsonNetResult : JsonResult {

		public override void ExecuteResult(ControllerContext context) {
			HttpResponseBase response = context.HttpContext.Response;
			response.ContentType = "application/json";
			if (ContentEncoding != null)
				response.ContentEncoding = ContentEncoding;
			if (Data != null) {
				JsonTextWriter writer = new JsonTextWriter(response.Output) { Formatting = Formatting.Indented };
				JsonSerializerSettings serialzerSettings = new JsonSerializerSettings();
				serialzerSettings.DateFormatHandling = DateFormatHandling.IsoDateFormat;
				JsonSerializer serializer = JsonSerializer.Create(serialzerSettings);
				serializer.Serialize(writer, Data);
				writer.Flush();
			}
		}
	}
}