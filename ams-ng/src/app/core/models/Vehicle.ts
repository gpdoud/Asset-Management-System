export class Vehicle {

	Id: number;
	Make: string;
	Model: string;
	VIN: string;	
	
	constructor(
		Id: number,
		Make: string,
		Model: string,
		VIN: string
		
	) {
		this.Id = Id;
		this.Make = Make;
		this.Model = Model;
		this.VIN = VIN;
		
	}
}