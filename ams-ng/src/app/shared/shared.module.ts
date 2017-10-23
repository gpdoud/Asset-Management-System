import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list/vehicle-list.component';
import { VehicleAddComponent } from './vehicle/vehicle-add/vehicle-add.component';
import { VehicleEditComponent } from './vehicle/vehicle-edit/vehicle-edit.component';
import { VehicleDetailComponent } from './vehicle/vehicle-detail/vehicle-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VehicleComponent, VehicleListComponent, VehicleAddComponent, VehicleEditComponent, VehicleDetailComponent]
})
export class SharedModule { }
