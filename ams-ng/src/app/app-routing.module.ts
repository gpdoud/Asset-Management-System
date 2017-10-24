import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import * as core from '@app/core';

import {VehicleAddComponent} from './core/vehicle/vehicle-add/vehicle-add.component';
import {VehicleDetailComponent} from './core/vehicle/vehicle-detail/vehicle-detail.component';
import {VehicleEditComponent} from './core/vehicle/vehicle-edit/vehicle-edit.component';
import {VehicleListComponent} from './core/vehicle/vehicle-list/vehicle-list.component';

import {AssetListComponent} from './core/asset/asset-list/asset-list.component';
import {AssetDetailComponent} from './core/asset/asset-detail/asset-detail.component';
import {AssetAddComponent} from './core/asset/asset-add/asset-add.component';

import {VehicleService} from './shared/services/vehicle.service'

const approutes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: "full" },
	{ path: 'about', component: core.AboutComponent },
	{ path: 'help', component: core.HelpComponent },
	{ path: 'home', component: core.HomeComponent },
  { path: 'vehicles', component: VehicleListComponent },
  { path: 'vehicles/add', component: VehicleAddComponent },
  { path: 'vehicles/detail', component: VehicleDetailComponent },
  { path: 'vehicles/edit', component: VehicleEditComponent },
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
