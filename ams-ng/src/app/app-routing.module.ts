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
	{ path: '**', component: core.HomeComponent },
  { path: "users", component: core.UserListComponent },
  { path: "users/detail/:id", component: core.UserDetailComponent },
  { path: "users/edit/:id", component: core.UserEditComponent },
  { path: "users/add", component: core.UserAddComponent },
];

@NgModule({
  imports: [
    CommonModule,
  	RouterModule.forRoot(approutes, { enableTracing: false })
  ],
  declarations: [
  	core.AboutComponent,
  	core.HelpComponent,
  	core.HomeComponent,
    core.LoginComponent,
    core.UserListComponent,
    core.UserEditComponent,
    core.UserDetailComponent,
    core.UserAddComponent
  ]
})
export class AppRoutingModule { }
