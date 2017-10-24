import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import * as core from '@app/core';

const approutes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: "full" },
	{ path: 'about', component: core.AboutComponent },
	{ path: 'help', component: core.HelpComponent },
	{ path: 'home', component: core.HomeComponent },
  { path: 'vehicles', component: core.VehicleListComponent },
  { path: 'vehicles/add', component: core.VehicleAddComponent },
  { path: 'vehicles/detail', component: core.VehicleDetailComponent },
  { path: 'vehicles/edit', component: core.VehicleEditComponent },
  { path: 'vendors', component: core.VendorListComponent },
  { path: 'vendors/add', component: core.VendorAddComponent },
  { path: 'vendors/detail', component: core.VendorDetailComponent },
  { path: 'vendors/edit', component: core.VendorEditComponent },
	
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
