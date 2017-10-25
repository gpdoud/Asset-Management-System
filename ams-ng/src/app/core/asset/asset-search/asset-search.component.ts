import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Asset } from '../../../shared/models/asset';
import { AssetService } from '../../../shared/services/asset.service';
import { LocationService } from '../../../shared/services/location.service';


@Component({
  selector: 'app-asset-search',
  templateUrl: './asset-search.component.html',
  styleUrls: ['./asset-search.component.css']
})
export class AssetSearchComponent implements OnInit {

	licenseplate: string;
	location: string;
	
	getLocation(): void {
		this.LocationSvc.list()
			.then(resp => this.location = resp);  
	}
  constructor(private AssetSvc: AssetService) { }

  ngOnInit() {
  	this.getLocation();
  }

}