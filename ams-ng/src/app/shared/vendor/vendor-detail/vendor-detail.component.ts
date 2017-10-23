import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Vendor } from '../../models/Vendor';
import { VendorService } from '../../services/vendor.service';
import { SystemService } from '../../services/system.service';
import { User } from '../../models/User';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

	loggedInUser: User;

	vendor: Vendor;
	verifyDelete: boolean = false;

	remove() {
		this.toggleVerifyDelete();
		console.log("remove()");
		this.VendorSvc.remove(this.vendor)
			.then(resp => { 
				console.log(resp); 
				this.router.navigate(["/vendors"]); 
			});
	}

	toggleVerifyDelete() {
		this.verifyDelete = !this.verifyDelete;
	}

	edit() {
		this.router.navigate(['/vendors/edit/'+this.vendor.Id]);
	}

 constructor(private SystemSvc: SystemService, private VendorSvc: VendorService, 
            private router: Router, 
  			private route: ActivatedRoute) { }

 ngOnInit() {
  	if(!this.SystemSvc.IsLoggedIn()) {
  		this.router.navigateByUrl("\login");
  	} else {
  		this.loggedInUser = this.SystemSvc.getLoggedIn();
  	}

	this.route.paramMap
		.switchMap((params: ParamMap) =>
			this.VendorSvc.get(params.get('id')))
		.subscribe((vendor: Vendor) => this.vendor = vendor);  

	}

}
