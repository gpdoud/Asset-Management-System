import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Asset } from '../../../shared/models/asset';
import { AssetService } from '../../../shared/services/asset.service';

@Component({
  selector: 'app-asset-search-list',
  templateUrl: './asset-search-list.component.html',
  styleUrls: ['./asset-search-list.component.css']
})
export class AssetSearchListComponent implements OnInit {

assets: Asset[] = [
	new Asset (1,"Kings", "Truck", 47000, "truck", "X"),
	new Asset (2,"John Ford", "Fire Truck", 43000, "truck", "X"),
	new Asset (3,"Kings Nissan", "SUV", 34000, "suv", "X")
];


//getting the list of assets that were searched for
getSearch(): void {
	this.AssetSvc.search()
	.then(resp => this.assets = resp)

}

  constructor(private AssetSvc: AssetService) { }

  ngOnInit() {
  //	this.getSearch();
  }

}
