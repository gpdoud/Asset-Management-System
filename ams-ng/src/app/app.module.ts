import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';


import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';

import { AppComponent } from '@app/app.component';
import {VehicleAddComponent} from './core/vehicle/vehicle-add/vehicle-add.component';
import {VehicleDetailComponent} from './core/vehicle/vehicle-detail/vehicle-detail.component';
import {VehicleEditComponent} from './core/vehicle/vehicle-edit/vehicle-edit.component';
import {VehicleListComponent} from './core/vehicle/vehicle-list/vehicle-list.component';

import {VendorAddComponent} from './core/vendor/vendor-add/vendor-add.component';
import {VendorDetailComponent} from './core/vendor/vendor-detail/vendor-detail.component';
import {VendorEditComponent} from './core/vendor/vendor-edit/vendor-edit.component';
import {VendorListComponent} from './core/vendor/vendor-list/vendor-list.component';

import {AssetListComponent} from './core/asset/asset-list/asset-list.component';
import {AssetDetailComponent} from './core/asset/asset-detail/asset-detail.component';
import {AssetAddComponent} from './core/asset/asset-add/asset-add.component';

import {AssetService} from './shared/services/asset.service'
import {VehicleService} from './shared/services/vehicle.service'
import {VendorService} from './shared/services/vendor.service'


@NgModule({
  declarations: [AppComponent, 
  VehicleAddComponent, VehicleDetailComponent, VehicleEditComponent, VehicleListComponent,

  VendorAddComponent, VendorDetailComponent, VendorEditComponent, VendorListComponent,

  AssetListComponent, AssetDetailComponent, AssetAddComponent
  ],
  imports: [
    BrowserModule, RouterModule, AppRoutingModule, HttpModule, FormsModule, SharedModule, CoreModule

  ],
  providers: [AssetService, VehicleService, VendorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
