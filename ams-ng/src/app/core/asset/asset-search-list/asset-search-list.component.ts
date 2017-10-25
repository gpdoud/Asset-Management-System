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

asset: Asset[]

getSearch(): void {
	this.AssetSvc.search()
	.then(resp => this.asset = resp)

}

  constructor(private AssetSvc: AssetService) { }

  ngOnInit() {
  	this.getSearch();
  }

}
