import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import * as core from '@app/core';
import { AssetListComponent } from './core/asset/asset-list/asset-list.component';
import { AssetDetailComponent } from './core/asset/asset-detail/asset-detail.component';
import { AssetAddComponent } from './core/asset/asset-add/asset-add.component';

const approutes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: "full" },
	{ path: 'about', component: core.AboutComponent },
	{ path: 'help', component: core.HelpComponent },
	{ path: 'home', component: core.HomeComponent },
	{ path: 'assets', component: AssetListComponent},
  { path: 'assets/detail/:id', component: AssetDetailComponent},
  { path: 'assets/add', component: AssetAddComponent},
  { path: '**', component: core.HomeComponent },
];

@NgModule({
   imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
