import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VendorService } from '../../../shared/services/vendor.service';
import { Vendor } from '../../models/Vendor';

@Component({

  selector: 'app-vendor-add',
  templateUrl: './vendor-add.component.html',
  styleUrls: ['./vendor-add.component.css']
})
export class VendorAddComponent implements OnInit {

	loggedInUser: User;

	vendor: Vendor = new Vendor(0, '', '', '', 'Loveland', 'OH', '45140', '', '', false);
	
	add() {
		this.VendorSvc.add(this.vendor).then(
			resp => { 
				console.log(resp); 
				this.router.navigate(["/vendors"]); 
			}
		);
	}

 constructor(private VendorSvc: VendorService, 
  				private router: Router) { }

 ngOnInit() {


  }

}
