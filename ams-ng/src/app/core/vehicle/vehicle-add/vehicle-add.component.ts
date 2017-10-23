import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { Vehicle } from '../../models/Vehicle';
import { VehicleService } from '../../../shared/services/vehicle.service';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit {
	vehicle: Vehicle = new Vehicle(0, '', '', '');
	
	add() {
		this.VehicleSvc.add(this.vehicle).then(
			resp => { 
				console.log(resp); 
				this.router.navigate(["/vehicles"]); 
			}
		);
	}

 constructor(private VehicleSvc: VehicleService, 
  				private router: Router) { }

  ngOnInit() {
  }

}
