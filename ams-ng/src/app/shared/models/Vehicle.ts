import {Asset} from './asset'

export class Vehicle {

	// Id: number;
	VIN: string;
	Make: string;
	Model: string;
	//we'll want to be able to keep track of how much money has been
	//spent to maintain a vehicle, it's service record, the license number,
	//whether the vehicle has emergency lights, where it is, who it is assigned to
	// Asset: Asset;	
	
	constructor(
		// Id: number,
		VIN: string,
		Make: string,
		Model: string,
		// Asset: Asset
		
	) {
		// this.Id = Id;
		this.VIN = VIN;
		this.Make = Make;
		this.Model = Model;
		// this.Asset = Asset;
		
	}
}