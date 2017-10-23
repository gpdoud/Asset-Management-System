import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { VendorService } from '../../../shared/services/vendor.service';

import 'rxjs/add/operator/switchMap';

import { Vendor } from '../../models/Vendor';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

	loggedInUser: User;

	vendor: Vendor; 

	update() {
		this.VendorSvc.change(this.vendor).then(
			resp => { 
				console.log(resp); 
				this.router.navigate(['/vendors']) 
			}
		)
	}	


 constructor(private VendorSvc: VendorService, 
  			private route: ActivatedRoute, 
  			private router: Router) { }

 ngOnInit() {
  	
	this.route.paramMap
		.switchMap((params: ParamMap) =>
			this.VendorSvc.get(params.get('id')))
		.subscribe((vendor: Vendor) => this.vendor = vendor);  }

}
