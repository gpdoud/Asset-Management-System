import {Asset} from './asset'

export class Computer {
	
	AssetId: number;
	ModelNumber: string;
	SerialNumber: string;
	OperatingSystem: string;
	CPU: string;
	RAM: string;
	HDD: string;
	asset: Asset;
		
	constructor(
		
		AssetId: number,
		ModelNumber: string,
		SerialNumber: string,
		OperatingSystem:string,
		CPU: string,
		RAM: string,
		HDD: string,
		asset: Asset,
			)

	 {
	 
	 	this.AssetId = AssetId;
	 	this.ModelNumber = ModelNumber;
	 	this.SerialNumber = SerialNumber;
	 	this.OperatingSystem = OperatingSystem;
	 	this.CPU = CPU;
	 	this.RAM = RAM;
	 	this.HDD = HDD;
	 	this.asset = asset;
	 	
	 	}


}
