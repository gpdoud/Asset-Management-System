import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Vendor } from '../../models/Vendor';
import { VendorService } from '../../../shared/services/vendor.service';

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

 constructor(private VendorSvc: VendorService, 
            private router: Router, 
  			private route: ActivatedRoute) { }

 ngOnInit() {


	this.route.paramMap
		.switchMap((params: ParamMap) =>
			this.VendorSvc.get(params.get('id')))
		.subscribe((vendor: Vendor) => this.vendor = vendor);  

	}

}
