import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserService } from '../shared/services/user.service';
import { MenuComponent } from './menu/menu.component';


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
