import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { VendorService } from '../../services/vendor.service';
import { SystemService } from '../../services/system.service';
import { User } from '../../models/User';

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


 constructor(private SystemSvc: SystemService, private VendorSvc: VendorService, 
  			private route: ActivatedRoute, 
  			private router: Router) { }

 ngOnInit() {
  	if(!this.SystemSvc.IsLoggedIn()) {
  		this.router.navigateByUrl("\login");
  	} else {
  		this.loggedInUser = this.SystemSvc.getLoggedIn();
  	}

  	
	this.route.paramMap
		.switchMap((params: ParamMap) =>
			this.VendorSvc.get(params.get('id')))
		.subscribe((vendor: Vendor) => this.vendor = vendor);  }

}
