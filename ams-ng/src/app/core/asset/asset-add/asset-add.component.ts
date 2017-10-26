import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asset } from '../../../shared/models/asset';
import { Vehicle } from '../../../shared/models/vehicle';
import { AssetService } from '../../../shared/services/asset.service';

@Component({
  selector: 'app-asset-add',
  templateUrl: './asset-add.component.html',
  styleUrls: ['./asset-add.component.css']
})
export class AssetAddComponent implements OnInit {
	//Currently, this creates the three blank fields for a Vehicle,
	//and then the Asset is created, with the six fields inherent to
	//an Asset, plus the fields a Vehicle brings in
		//Once we have additional types of assets to work with,
		//those will also be added here, and attached to the Asset
	vehicle: Vehicle = new Vehicle("", "", "");
	//Id, Vendor, Name, PurchaseDate, PurchaseOrderNumber, AssetCost, OutForRepairDate, BackFromRepairDate
	//RetiredDate, SurplusDate, SalesProceeds, PhotoPath, Type, Vehicle, Location
	asset: Asset = new Asset (0, '', '', new Date(), '', 0, new Date(), new Date(), 
		new Date(), new Date(), 0, '', '', this.vehicle, this.location); 
	
	add() {
		console.log("asset-add add()");
		console.log(this.asset);
		this.AssetSvc.add(this.asset).then(			
			resp => {
				console.log(resp);
				this.router.navigate(["/assets"]);
			});
	}
	
  constructor(private AssetSvc: AssetService, 
	private router: Router) { }

  ngOnInit() {
  }

}