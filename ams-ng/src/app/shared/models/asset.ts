export class Asset {
	
	Id: number;
	VendorIdNumber: string;
	Name: string;
	Price: number;
	Unit: string;
	PhotoPath: string;
	
		
	constructor(
		Id: number,
		VendorIdNumber: string,
		Name: string,
		Price: number,
		Unit: string,
		PhotoPath: string,
		
			)

	 {
	 	this.Id = Id;
	 	this.VendorIdNumber = VendorIdNumber;
	 	this.Name = Name;
	 	this.Price = Price;
	 	this.Unit = Unit;
	 	this.PhotoPath = PhotoPath;
	 	
	 		 	
	 	}


}