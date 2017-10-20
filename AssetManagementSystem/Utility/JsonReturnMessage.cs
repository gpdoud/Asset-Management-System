using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Utility {

	public class JsonReturnMessage {
		public string Result { get; set; }
		public string Message { get; set; }

		public static JsonReturnMessage ReturnJsonMessage(string Result, string Message) {
			return new JsonReturnMessage {
				Result = Result,
				Message = Message
			};
		}
	}
}