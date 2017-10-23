import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserAddComponent } from './user/user-add/user-add.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  MenuComponent,
  LoginComponent,
  UserListComponent,
  UserEditComponent,
  UserDetailComponent,
  UserAddComponent]
})
export class CoreModule { }
