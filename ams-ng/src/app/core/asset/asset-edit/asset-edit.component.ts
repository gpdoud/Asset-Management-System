import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Asset } from '../../../shared/models/asset';
import { AssetService } from '../../../shared/services/asset.service';
import { Vehicle } from '../../../shared/models/vehicle';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-asset-edit',
  templateUrl: './asset-edit.component.html',
  styleUrls: ['./asset-edit.component.css']
})
export class AssetEditComponent implements OnInit {
vehicle: Vehicle;
asset: Asset;

update() {
    this.AssetSvc.change(this.asset).then(
      resp => {
        console.log(resp);
        this.router.navigate(['/assets']);
      }
      )
  }
  constructor(private AssetSvc: AssetService, 
    private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    this.route.paramMap  
        .switchMap((params: ParamMap) =>
          this.AssetSvc.get(params.get('id')))
        .subscribe((asset:Asset) => this.asset = asset);


  }

}