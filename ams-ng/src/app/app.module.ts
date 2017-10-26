import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';


import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';

import { AppComponent } from '@app/app.component';

import {MenuComponent} from './core/menu/menu.component';
import { LoginComponent } from './core/login/login.component';

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

import { UserListComponent } from './core/user/user-list/user-list.component';
import { UserDetailComponent } from './core/user/user-detail/user-detail.component';
import { UserEditComponent } from './core/user/user-edit/user-edit.component';
import { UserAddComponent } from './core/user/user-add/user-add.component';

import { LocationListComponent } from './core/location/location-list/location-list.component';
import { LocationEditComponent } from './core/location/location-edit/location-edit.component';
import { LocationDetailComponent } from './core/location/location-detail/location-detail.component';
import { LocationAddComponent } from './core/location/location-add/location-add.component';

import {AssetService} from './shared/services/asset.service'
import {VehicleService} from './shared/services/vehicle.service'
import {VendorService} from './shared/services/vendor.service'

import { SystemService } from './shared/services/system.service';
import { UserService } from './shared/services/user.service';
import { LocationService } from './shared/services/location.service';


@NgModule({
  declarations: [AppComponent, MenuComponent, LoginComponent,
  // VehicleAddComponent, VehicleDetailComponent, VehicleEditComponent, VehicleListComponent,

  VendorAddComponent, VendorDetailComponent, VendorEditComponent, VendorListComponent,

  AssetListComponent, AssetDetailComponent, AssetAddComponent, AssetSearchComponent, AssetSearchListComponent,

  UserListComponent, UserDetailComponent, UserEditComponent, UserAddComponent
  ],
  imports: [
    BrowserModule, RouterModule, AppRoutingModule, HttpModule, FormsModule, SharedModule, CoreModule

  ],
  providers: [AssetService, VehicleService, VendorService, SystemService, UserService, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
