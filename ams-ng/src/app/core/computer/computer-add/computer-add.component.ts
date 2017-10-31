import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asset } from '../../../shared/models/asset';
import { Vehicle } from '../../../shared/models/vehicle';
import { Computer } from '../../../shared/models/computer';
import { Location } from '../../../shared/models/location';
import { ComputerService } from '../../../shared/services/computer.service';

@Component({
  selector: 'app-computer-add',
  templateUrl: './computer-add.component.html',
  styleUrls: ['./computer-add.component.css']
})
export class ComputerAddComponent implements OnInit {
	//Currently, this creates the three blank fields for a Vehicle,
	//and then the Computer is created, with the six fields inherent to
	//an Computer, plus the fields a Vehicle brings in
		//Once we have additional types of computers to work with,
		//those will also be added here, and attached to the Computer
	
	//Id, Vendor, Name, PurchaseDate, PurchaseOrderNumber, AssetCost, OutForRepairDate, BackFromRepairDate
	//RetiredDate, SurplusDate, SalesProceeds, PhotoPath, Type, Vehicle, LocationId, Location
	asset: Asset = new Asset (0, '', '', new Date(), '', 0, new Date(), new Date(), 
		new Date(), new Date(), 0, '', '', null, 0, null);
	//ModelNumber, SerialNumber, OperatingSystem, CPU, RAM, HDD
	computer: Computer = new Computer ('', '', 'Windows 10', '', '', '', this.asset); 
	
	add() {
		console.log("computer-add add()");
		console.log(this.computer);
		this.ComputerSvc.add(this.computer).then(			
			resp => {
				console.log(resp);
				this.router.navigate(["/assets"]);
			});
	}
	
  constructor(private ComputerSvc: ComputerService, 
	private router: Router) { }

  ngOnInit() {
  }

}
