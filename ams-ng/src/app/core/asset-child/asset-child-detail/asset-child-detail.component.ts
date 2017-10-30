import { Component, Input, OnInit } from '@angular/core';

import { Asset } from '../../../shared/models/Asset';

@Component({
  selector: 'app-asset-child-detail',
  templateUrl: './asset-child-detail.component.html',
  styleUrls: ['./asset-child-detail.component.css']
})
export class AssetChildDetailComponent implements OnInit {

  @Input() asset: Asset;

  constructor() { }

  ngOnInit() {
  }

}
