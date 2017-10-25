import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetSearchComponent } from './asset/asset-search/asset-search.component';
import { AssetSearchListComponent } from './asset/asset-search-list/asset-search-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  AssetSearchComponent,
  AssetSearchListComponent],
})
export class CoreModule { }