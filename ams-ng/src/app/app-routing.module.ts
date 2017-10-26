import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { HelpComponent } from './core/help/help.component';
import { LoginComponent } from './core/login/login.component';

import { UserListComponent } from './core/user/user-list/user-list.component';
import { UserDetailComponent } from './core/user/user-detail/user-detail.component';
import { UserEditComponent } from './core/user/user-edit/user-edit.component';
import { UserAddComponent } from './core/user/user-add/user-add.component';

import { LocationListComponent } from './core/location/location-list/location-list.component';
import { LocationDetailComponent } from './core/location/location-detail/location-detail.component';
import { LocationEditComponent } from './core/location/location-edit/location-edit.component';
import { LocationAddComponent } from './core/location/location-add/location-add.component';

const approutes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: "full" },
	{ path: 'about', component: AboutComponent },
	{ path: 'help', component: HelpComponent },
	{ path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  
  { path: "users", component: UserListComponent },
  { path: "users/detail/:id", component: UserDetailComponent },
  { path: "users/edit/:id", component: UserEditComponent },
  { path: "users/add", component: UserAddComponent },

  { path: "locations", component: LocationListComponent },
  { path: "locations/detail/:id", component: LocationDetailComponent },
  { path: "locations/edit/:id", component: LocationEditComponent },
  { path: "locations/add", component: LocationAddComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [
    CommonModule,
  	RouterModule.forRoot(approutes, { enableTracing: false })
  ]
})
export class AppRoutingModule { }
