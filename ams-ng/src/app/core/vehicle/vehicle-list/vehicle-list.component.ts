import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Vehicle } from '../../../shared/models/Vehicle';
import { VehicleService } from '../../../shared/services/vehicle.service';
import { VehicleAsset } from '../../../shared/models/VehicleAsset';
import { Asset } from '../../../shared/models/asset';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  constructor(private VehicleSvc: VehicleService) { }

  vehicles: Vehicle[];

  getVehicles(): void {
		this.VehicleSvc.list()
			.then(resp => this.vehicles = resp);
	}

  ngOnInit() {

  	this.getVehicles();
  }

}
