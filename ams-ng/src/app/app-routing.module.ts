import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import * as core from '@app/core';

//All of the work with a Vehicle is going to be handled by Asset, so we no longer need
//these items, except for reference material
// import {VehicleAddComponent} from './core/vehicle/vehicle-add/vehicle-add.component';
// import {VehicleDetailComponent} from './core/vehicle/vehicle-detail/vehicle-detail.component';
// import {VehicleEditComponent} from './core/vehicle/vehicle-edit/vehicle-edit.component';
// import {VehicleListComponent} from './core/vehicle/vehicle-list/vehicle-list.component';

import {VendorAddComponent} from './core/vendor/vendor-add/vendor-add.component';
import {VendorDetailComponent} from './core/vendor/vendor-detail/vendor-detail.component';
import {VendorEditComponent} from './core/vendor/vendor-edit/vendor-edit.component';
import {VendorListComponent} from './core/vendor/vendor-list/vendor-list.component';

import {AssetListComponent} from './core/asset/asset-list/asset-list.component';
import {AssetDetailComponent} from './core/asset/asset-detail/asset-detail.component';
import {AssetAddComponent} from './core/asset/asset-add/asset-add.component';
import { AssetSearchComponent } from './core/asset/asset-search/asset-search.component';
import { AssetSearchListComponent } from './core/asset/asset-search-list/asset-search-list.component';

import {AssetService} from './shared/services/asset.service'
import {VendorService} from './shared/services/vendor.service'
import {VehicleService} from './shared/services/vehicle.service'

import { SystemService } from './shared/services/system.service';
import { UserService } from './shared/services/user.service';
import { LocationService } from './shared/services/location.service';

const approutes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: "full" },
	{ path: 'about', component: core.AboutComponent },
	{ path: 'help', component: core.HelpComponent },
	{ path: 'home', component: core.HomeComponent },
  //Unlike the PRS app, in this app, the assets are going to be display
  //the information for the different types of assets using *ngIf on the
  //relevant pages to display the fields for those types.
  // { path: 'vehicles', component: VehicleListComponent },
  // { path: 'vehicles/add', component: VehicleAddComponent },
  // { path: 'vehicles/detail', component: VehicleDetailComponent },
  // { path: 'vehicles/edit', component: VehicleEditComponent },
	{ path: 'assets', component: AssetListComponent},
  { path: 'assets/detail/:id', component: AssetDetailComponent},
  { path: 'assets/add', component: AssetAddComponent},
  // If the path does not match any of the paths we set above, this will
  // take the user to the HomeComponent's page
  { path: '**', component: core.HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
  	RouterModule.forRoot(approutes, { enableTracing: false })
  ],
  declarations: [
  	core.AboutComponent,
  	core.HelpComponent,
  	core.HomeComponent
  ]
})
export class AppRoutingModule { }
