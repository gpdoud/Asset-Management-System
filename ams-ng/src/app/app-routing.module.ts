import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Let's import the components that we need to route

import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { HelpComponent } from './core/help/help.component';
import { LoginComponent } from './core/login/login.component';

import { UserListComponent } from './core/user/user-list/user-list.component';
import { UserDetailComponent } from './core/user/user-detail/user-detail.component';
import { UserEditComponent } from './core/user/user-edit/user-edit.component';
import { UserAddComponent } from './core/user/user-add/user-add.component';

import {AssetAddComponent} from './core/asset/asset-add/asset-add.component';
import {AssetListComponent} from './core/asset/asset-list/asset-list.component';
import {AssetDetailComponent} from './core/asset/asset-detail/asset-detail.component';
import { AssetSearchComponent } from './core/asset/asset-search/asset-search.component';
import { AssetSearchListComponent } from './core/asset/asset-search-list/asset-search-list.component';

import { LocationListComponent } from './core/location/location-list/location-list.component';
import { LocationDetailComponent } from './core/location/location-detail/location-detail.component';
import { LocationEditComponent } from './core/location/location-edit/location-edit.component';
import { LocationAddComponent } from './core/location/location-add/location-add.component';

import { AssetChildDetailComponent } from './core/asset-child/asset-child-detail/asset-child-detail.component';

import { ComputerDetailComponent } from './core/computer/computer-detail/computer-detail.component';


const approutes: Routes = [
	//Here is our routing

  { path: '', redirectTo: '/', pathMatch: "full" },
  //When the user adds the item in the path to http://localhost:4200
  //the user is taken to the page created by that component
	{ path: 'about', component: AboutComponent },
	{ path: 'help', component: HelpComponent },
	{ path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  
  { path: 'assets/add', component: AssetAddComponent},
  { path: 'assets', component: AssetListComponent},
  { path: 'assets/detail/:id', component: AssetDetailComponent},
   { path: 'assets/search', component: AssetSearchComponent},
  { path: 'assets/search-list', component: AssetSearchListComponent},

  { path: 'asset-childs/detail/:id', component: AssetChildDetailComponent},
  
  { path: "users", component: UserListComponent },
  { path: "users/detail/:id", component: UserDetailComponent },
  { path: "users/edit/:id", component: UserEditComponent },
  { path: "users/add", component: UserAddComponent },

  { path: "locations", component: LocationListComponent },
  { path: "locations/detail/:id", component: LocationDetailComponent },
  { path: "locations/edit/:id", component: LocationEditComponent },
  { path: "locations/add", component: LocationAddComponent },


  { path: "computers/detail/:id", component: ComputerDetailComponent },
  { path: "computers/add", component: ComputerAddComponent },
  //If the user used the http://localhost:4200 address, but nothing
  //after that matched our routes, we send them to the page created
  //by the AssetListComponent
  { path: '**', component: AssetListComponent },
];

@NgModule({
  imports: [
    CommonModule,
  	RouterModule.forRoot(approutes, { enableTracing: false })
  ]
})
export class AppRoutingModule { }
