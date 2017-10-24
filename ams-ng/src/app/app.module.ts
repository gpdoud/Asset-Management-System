import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';

import { AppComponent } from '@app/app.component';
import {VehicleAddComponent} from './core/vehicle/vehicle-add/vehicle-add.component';
import {VehicleDetailComponent} from './core/vehicle/vehicle-detail/vehicle-detail.component';
import {VehicleEditComponent} from './core/vehicle/vehicle-edit/vehicle-edit.component';
import {VehicleListComponent} from './core/vehicle/vehicle-list/vehicle-list.component';

import {AssetListComponent} from './core/asset/asset-list/asset-list.component';
import {AssetDetailComponent} from './core/asset/asset-detail/asset-detail.component';
import {AssetAddComponent} from './core/asset/asset-add/asset-add.component';

import {VehicleService} from './shared/services/vehicle.service'

@NgModule({
  declarations: [AppComponent, 
  VehicleAddComponent, VehicleDetailComponent, VehicleEditComponent, VehicleListComponent,

  AssetListComponent, AssetDetailComponent, AssetAddComponent
  ],
  imports: [
    BrowserModule, RouterModule, AppRoutingModule, SharedModule, CoreModule

  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
