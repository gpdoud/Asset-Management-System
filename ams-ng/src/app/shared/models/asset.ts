import {Vehicle} from './vehicle'
import {Location} from './location'

export class Asset {
	
	Id: number;
	Vendor: string;//show in the asset-list
	Name: string;//show in the asset-list
	PurchaseDate: Date;
	PurchaseOrderNumber: string;//show in the asset-list
	AssetCost: number;
	OutForRepairDate: Date;
	BackFromRepairDate: Date;
	RetiredDate: Date;
	SurplusDate: Date;
	SaleProceeds: number;
	PhotoPath: string;
	Type: string;
	Vehicle: Vehicle;
	Location: Location;//show in the asset-list
	//ServiceRecord:ServiceRecord;
	//We'll want to know which person and department an asset belongs to
		
	constructor(
		Id: number,
		Vendor: string,
		Name: string,
		PurchaseDate: Date,
		PurchaseOrderNumber: string,
		AssetCost: number,
		OutForRepairDate: Date,
		BackFromRepairDate: Date,
		RetiredDate: Date,
		SurplusDate: Date,
		SaleProceeds: number,
		PhotoPath: string,
		Type: string,
		Vehicle: Vehicle,
		Location: Location
		//ServiceRecord: ServiceRecord
		)

	 {
	 	this.Id = Id;
	 	this.Vendor = Vendor;
	 	this.Name = Name;
	 	this.PurchaseDate = PurchaseDate;
	 	this.PurchaseOrderNumber = PurchaseOrderNumber;
	 	this.AssetCost = AssetCost;
	 	this.OutForRepairDate = OutForRepairDate;
	 	this.BackFromRepairDate = BackFromRepairDate;
	 	this.RetiredDate = RetiredDate;
	 	this.SurplusDate = SurplusDate;
	 	this.SaleProceeds = SaleProceeds;
	 	this.PhotoPath = PhotoPath;
	 	this.Type = Type;
	 	this.Vehicle = Vehicle;
	 	this.Location = Location;
	 	//this.ServiceRecord: ServiceRecord;
	 	}


}