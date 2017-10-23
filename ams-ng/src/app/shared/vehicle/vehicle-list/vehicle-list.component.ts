import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Vehicle } from '../../models/Vehicle';
import { VehicleService } from '../../services/vehicle.service';

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
