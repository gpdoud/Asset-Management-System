import {Asset} from './asset'

export class Computer {
	

	AssetId: number;

	//What is the Model Number that identifies the type of computer?

	ModelNumber: string;
	//What is the Serial Number that identifies the specific computer?
	SerialNumber: string;
	//What is the Operating System? Windows, Linux, MacOS?
	OperatingSystem: string;
	//What are the statistics for the Central Processing Unit?
	CPU: string;
	//How much Random Access Memory does the computer have?
	RAM: string;
	//How much storage does the hard drive have?
	HDD: string;


	//The general Asset information relayed from the Asset model.

	Asset: Asset;
		
	constructor(
		
		AssetId: number,
		ModelNumber: string,
		SerialNumber: string,
		OperatingSystem:string,
		CPU: string,
		RAM: string,
		HDD: string,

		Asset: Asset,
			)



	 {
	 
	 	this.AssetId = AssetId;
	 	this.ModelNumber = ModelNumber;
	 	this.SerialNumber = SerialNumber;
	 	this.OperatingSystem = OperatingSystem;
	 	this.CPU = CPU;
	 	this.RAM = RAM;
	 	this.HDD = HDD;
	 	this.Asset = Asset;
	 	
	 	}


}
