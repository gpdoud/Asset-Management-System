import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// import { CoreModule } from './core/core.module';
// import * as core from '@app/core';
import { AssetListComponent } from './core/asset/asset-list/asset-list.component';
import { AssetDetailComponent } from './core/asset/asset-detail/asset-detail.component';
import { AssetAddComponent } from './core/asset/asset-add/asset-add.component';
import { AssetEditComponent } from './core/asset/asset-edit/asset-edit.component';
import { AssetSearchComponent } from './core/asset/asset-search/asset-search.component';
import { AssetSearchListComponent } from './core/asset/asset-search-list/asset-search-list.component';

const approutes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: "full" },
	{ path: 'assets', component: AssetListComponent},
	{ path: 'assets/edit/:id', component: AssetEditComponent},
  { path: 'assets/detail/:id', component: AssetDetailComponent},
  { path: 'assets/search', component: AssetSearchComponent},
  { path: 'assets/search-list', component: AssetSearchListComponent},
  { path: 'assets/add', component: AssetAddComponent},
  { path: '**', component: AssetListComponent },
];

@NgModule({
   imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
