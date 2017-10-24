import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { VendorService } from '../../../shared/services/vendor.service';
import { Vendor } from '../../../shared/models/Vendor';

@Component({
  selector: 'vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  

	vendors: Vendor[];

	getVendors(): void {
		this.VendorSvc.list()
			.then(resp => this.vendors = resp);
	}

 constructor(private VendorSvc: VendorService, 
            private router: Router) { }

 ngOnInit() {
  	

  	this.getVendors();
  }

}
