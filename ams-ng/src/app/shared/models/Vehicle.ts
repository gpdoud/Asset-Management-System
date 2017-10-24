export class Vehicle {

	// Id: number;
	VIN: string;
	Make: string;
	Model: string;
	Asset: Asset;	
	
	constructor(
		// Id: number,
		VIN: string,
		Make: string,
		Model: string,
		Asset: Asset
		
	) {
		// this.Id = Id;
		this.VIN = VIN;
		this.Make = Make;
		this.Model = Model;
		this.Asset = Asset;
		
	}
}