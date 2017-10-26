import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@app/core/core.module';

import { AppComponent } from '@app/app.component';
import { Headers, Http } from '@angular/http';

  //you can kind of think of the module as the applicaiton, or the project in VS.net
  //the module needs to know about all the parts of the application

  //curly braces contain classes that we want to use for this module
  //@________ contains file where we can find class
  //module included with Angular that allows AJAX calls to be made 
import { HttpModule } from '@angular/http';
  // ./ means file is in same directory as current file
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { HelpComponent } from './core/help/help.component';
import { LoginComponent } from './core/login/login.component';
import { MenuComponent } from './core/menu/menu.component';

import { SystemService } from './shared/services/system.service';
import { UserService } from './shared/services/user.service';
import { LocationService } from './shared/services/location.service';


import { UserListComponent } from './core/user/user-list/user-list.component';
import { UserDetailComponent } from './core/user/user-detail/user-detail.component';
import { UserEditComponent } from './core/user/user-edit/user-edit.component';
import { UserAddComponent } from './core/user/user-add/user-add.component';

import { LocationListComponent } from './core/location/location-list/location-list.component';
import { LocationDetailComponent } from './core/location/location-detail/location-detail.component';
import { LocationEditComponent } from './core/location/location-edit/location-edit.component';
import { LocationAddComponent } from './core/location/location-add/location-add.component';


@NgModule({
  declarations: [

    AppComponent,  //values
    HomeComponent, 
    AboutComponent,
    MenuComponent,
    LoginComponent,
    HelpComponent,
    UserListComponent, 
    UserDetailComponent, 
    UserEditComponent, 
    UserAddComponent,
    LocationListComponent,
    LocationEditComponent,
    LocationDetailComponent,
    LocationAddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      UserService,
      SystemService,
      LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
