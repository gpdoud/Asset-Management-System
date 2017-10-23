import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asset } from '../../../shared/models/asset';
import { AssetService } from '../../../shared/services/asset.service';

@Component({
  selector: 'app-asset-add',
  templateUrl: './asset-add.component.html',
  styleUrls: ['./asset-add.component.css']
})
export class AssetAddComponent implements OnInit {

	asset: Asset = new Asset (0, '', '', 0, '', ''); 
	
	add() {
		this.AssetSvc.add(this.asset).then(
			resp => {
				console.log(resp);
				this.router.navigate(["/assets"]);
			});
	}
	
  constructor(private AssetSvc: AssetService, 
	private router: Router) { }

  ngOnInit() {
  }

}
