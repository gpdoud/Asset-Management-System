import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserService } from '../shared/services/user.service';
import { MenuComponent } from './menu/menu.component';
import { LocationDetailComponent } from './location/location-detail/location-detail.component';

import { LocationAddComponent } from './location/location-add/location-add.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [UserService],
  declarations: []
})
export class CoreModule { }
