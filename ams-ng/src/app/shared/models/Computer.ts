import {Asset} from './asset'

export class Computer {
	
	
	ModelNumber: string;
	SerialNumber: string;
	OperatingSystem: string;
	CPU: string;
	RAM: string;
	HDD: string;
		
	constructor(
		
		ModelNumber: string,
		SerialNumber: string,
		OperatingSystem:string,
		CPU: string,
		RAM: string,
		HDD: string,
			)

	 {
	 
	 	this.ModelNumber = ModelNumber;
	 	this.SerialNumber = SerialNumber;
	 	this.OperatingSystem = OperatingSystem;
	 	this.CPU = CPU;
	 	this.RAM = RAM;
	 	this.HDD = HDD;
	 	
	 	}


}
