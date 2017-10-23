import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { Vehicle } from '../../models/Vehicle';
import { VehicleService } from '../../../shared/services/vehicle.service';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {

 	vehicle: Vehicle;
	verifyDelete: boolean = false;

	remove() {
		this.toggleVerifyDelete();
		console.log("remove()");
		this.VehicleSvc.remove(this.vehicle)
			.then(resp => { 
				console.log(resp); 
				this.router.navigate(["/vehicles"]); 
			});
	}

	toggleVerifyDelete() {
		this.verifyDelete = !this.verifyDelete;
	}

	edit() {
		this.router.navigate(['/vehicles/edit/'+this.vehicle.Id]);
	}

 constructor(private VehicleSvc: VehicleService, 
            private router: Router, 
  			private route: ActivatedRoute) { }

 ngOnInit() {
  	
	this.route.paramMap
		.switchMap((params: ParamMap) =>
			this.VehicleSvc.get(params.get('id')))
		.subscribe((vehicle: Vehicle) => this.vehicle = vehicle);  

	}

}
