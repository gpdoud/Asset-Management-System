// Angular Core
import { Component, Input, OnInit } from '@angular/core';

// Models
import { Asset } from '../../../shared/models/Asset';
import { Location } from '../../../shared/models/Location';

// Services
import { LocationService } from '../../../shared/services/location.service';

@Component({
  selector: 'app-asset-child-detail',
  templateUrl: './asset-child-detail.component.html',
  styleUrls: ['./asset-child-detail.component.css']
})
export class AssetChildDetailComponent implements OnInit {

  // asset received as input from parent
  @Input() asset: Asset;

  // list of locations to populate drop-down
  locations: Location[];

  // get a list of locations from the server
  getLocations(): void
  {
    this.locSvc.list().then(resp => this.locations = resp);
  }

  // constructor and injections
  constructor(private locSvc: LocationService) { }

  ngOnInit() {
    // populate the drop-down
    this.getLocations();
  }

}
