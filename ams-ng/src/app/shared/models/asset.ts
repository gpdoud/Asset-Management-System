import {Vehicle} from './vehicle'

export class Asset {
	
	Id: number;
	Vendor: string;
	Name: string;
	Price: number;
	Unit: string;
	PhotoPath: string;
	Type: string;
	Vehicle: Vehicle;
	//We'll want to know which person and department an asset belongs to
		
	constructor(
		Id: number,
		Vendor: string,
		Name: string,
		Price: number,
		Unit: string,
		PhotoPath: string,
		Type: string,
		Vehicle: Vehicle
		)

	 {
	 	this.Id = Id;
	 	this.Vendor = Vendor;
	 	this.Name = Name;
	 	this.Price = Price;
	 	this.Unit = Unit;
	 	this.PhotoPath = PhotoPath;
	 	this.Type = Type;
	 	this.Vehicle = Vehicle;
	 	}


}