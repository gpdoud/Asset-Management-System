export class Asset {
	
	Id: number;
	Vendor: string;
	Name: string;
	Price: number;
	Unit: string;
	PhotoPath: string;
	
		
	constructor(
		Id: number,
		Vendor: string,
		Name: string,
		Price: number,
		Unit: string,
		PhotoPath: string,
		
			)

	 {
	 	this.Id = Id;
	 	this.Vendor = Vendor;
	 	this.Name = Name;
	 	this.Price = Price;
	 	this.Unit = Unit;
	 	this.PhotoPath = PhotoPath;
	 	
	 		 	
	 	}


}