import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { Vehicle } from '../../../shared/models/Vehicle';
import { VehicleService } from '../../../shared/services/vehicle.service';
import { VehicleAsset } from '../../../shared/models/VehicleAsset';
import { Asset } from '../../../shared/models/asset';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.css']
})
export class VehicleEditComponent implements OnInit {

  vehicle: Vehicle; 

	update() {
		this.VehicleSvc.change(this.vehicle).then(
			resp => { 
				console.log(resp); 
				this.router.navigate(['/vehicles']) 
			}
		)
	}	


 constructor(private VehicleSvc: VehicleService, 
  			private route: ActivatedRoute, 
  			private router: Router) { }

 ngOnInit() {
  	
	this.route.paramMap
		.switchMap((params: ParamMap) =>
			this.VehicleSvc.get(params.get('id')))
		.subscribe((vehicle: Vehicle) => this.vehicle = vehicle);  }

}
