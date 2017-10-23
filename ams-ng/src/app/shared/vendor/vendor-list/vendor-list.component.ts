import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { Vendor } from '../../models/Vendor';
import { VendorService } from '../../services/vendor.service';
import { SystemService } from '../../services/system.service';
import { User } from '../../models/User';

@Component({
  selector: 'vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  loggedInUser: User;

	vendors: Vendor[];

	getVendors(): void {
		this.VendorSvc.list()
			.then(resp => this.vendors = resp);
	}

 constructor(private SystemSvc: SystemService, private VendorSvc: VendorService, 
            private router: Router) { }

 ngOnInit() {
  	if(!this.SystemSvc.IsLoggedIn()) {
  		this.router.navigateByUrl("\login");
  	} else {
  		this.loggedInUser = this.SystemSvc.getLoggedIn();
  	}

  	this.getVendors();
  }

}
