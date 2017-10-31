import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Asset } from '../../../shared/models/asset';
import { AssetService } from '../../../shared/services/asset.service';
//import { Location } from '../../../shared/models/location';
//import { LocationService } from '../../../shared/services/location.service';
import { Computer } from '../../../shared/models/computer';
import { ComputerService } from '../../../shared/services/computer.service';


@Component({
  selector: 'app-computer-detail',
  templateUrl: './computer-detail.component.html',
  styleUrls: ['./computer-detail.component.css']
})
export class ComputerDetailComponent implements OnInit {

	computer: Computer;
  assets: Asset[];

	/*remove() {
    console.log("remove()");
    this.ComputerSvc.remove(this.computer)
        .then(resp => {
          console.log(resp);
          this.router.navigate(["/assets"]);
        });
  } */

 	update() {
		this.ComputerSvc.change(this.computer).then(
			resp => {
				console.log(resp);
				this.router.navigate(['/assets']);
			})
	}

  
  constructor(private AssetSvc: AssetService, private router: Router, 
  	private route: ActivatedRoute, private ComputerSvc: ComputerService) { }

  ngOnInit() {
  		this.route.paramMap
  			.switchMap((params: ParamMap) =>
  				this.ComputerSvc.get(params.get('id')))
  			.subscribe((computer: Computer) => this.computer = computer);

       }

}
