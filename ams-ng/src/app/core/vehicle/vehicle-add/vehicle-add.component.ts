import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { Vehicle } from '../../../shared/models/Vehicle';
import { VehicleService } from '../../../shared/services/vehicle.service';
import { VehicleAsset } from '../../../shared/models/VehicleAsset';
import { Asset } from '../../../shared/models/asset';


@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit {
	// asset: Asset = new Asset(0, '', '', 0, '', '', 'Vehicle'); 
	// vehicleAsset: VehicleAsset;
	// vehicle: Vehicle = new Vehicle('', '', '', this.asset);
	
	// add() {
	// 	this.VehicleSvc.add(this.vehicle).then(
	// 		resp => { 
	// 			console.log(resp); 
	// 			this.router.navigate(["/vehicles"]); 
	// 		}
	// 	);
	// }

 constructor(private VehicleSvc: VehicleService, 
  				private router: Router) { }

  ngOnInit() {
  }

}
