import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { HelpComponent } from './core/help/help.component';

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

import { LoginComponent } from './core/login/login.component';

import { UserListComponent } from './core/user/user-list/user-list.component';
import { UserDetailComponent } from './core/user/user-detail/user-detail.component';
import { UserEditComponent } from './core/user/user-edit/user-edit.component';
import { UserAddComponent } from './core/user/user-add/user-add.component';

import { LocationListComponent } from './core/location/location-list/location-list.component';
import { LocationEditComponent } from './core/location/location-edit/location-edit.component';
import { LocationDetailComponent } from './core/location/location-detail/location-detail.component';
import { LocationAddComponent } from './core/location/location-add/location-add.component';

const approutes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: "full" },
	{ path: 'about', component: AboutComponent },
	{ path: 'help', component: HelpComponent },
	{ path: 'home', component: HomeComponent },
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

  { path: "users", component: UserListComponent },
  { path: "users/detail/:id", component: UserDetailComponent },
  { path: "users/edit/:id", component: UserEditComponent },
  { path: "users/add", component: UserAddComponent },

  { path: "locations", component: LocationListComponent },
  { path: "locations/detail/:id", component: LocationDetailComponent },
  { path: "locations/edit/:id", component: LocationEditComponent },
  { path: "locations/add", component: LocationAddComponent },
  // If the path does not match any of the paths we set above, this will
  // take the user to the HomeComponent's page
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
  	RouterModule.forRoot(approutes, { enableTracing: false })
  ],
  declarations: [
  	AboutComponent,
  	HelpComponent,
  	HomeComponent
  ]
})
export class AppRoutingModule { }
