using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AssetManagementSystem.Models
{
    public class ServiceRecord
    {
        public int Id { get; set; }

        public int AssetId { get; set; }

        public int DocumentId { get; set; }

        public DateTime Date { get; set; }

        public decimal Total { get; set; }

        public string Notes { get; set; }

        public void Copy(ServiceRecord serviceRecord)
        {
            Id = serviceRecord.Id;
            AssetId = serviceRecord.AssetId;
            DocumentId = serviceRecord.DocumentId;
            Date = serviceRecord.Date;
            Total = serviceRecord.Total;
            Notes = serviceRecord.Notes;
        }
    }
}