import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@app/core/core.module';

import { AppComponent } from '@app/app.component';
import { AssetListComponent } from './core/asset/asset-list/asset-list.component';
import { AssetDetailComponent } from './core/asset/asset-detail/asset-detail.component';
import { AssetAddComponent } from './core/asset/asset-add/asset-add.component';
import { AssetEditComponent } from './core/asset/asset-edit/asset-edit.component';
import { AssetService } from './shared/services/asset.service';
import { AboutComponent } from './core/about/about.component';
import { HelpComponent } from './core/help/help.component';
import { HomeComponent } from './core/home/home.component';
import { AssetSearchComponent } from './core/asset/asset-search/asset-search.component';
import { AssetSearchListComponent } from './core/asset/asset-search-list/asset-search-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AssetListComponent,
    AssetDetailComponent,
    AssetEditComponent,
    AssetAddComponent,
    AboutComponent,
    HelpComponent,
    HomeComponent,
    AssetSearchComponent,
    AssetSearchListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    CoreModule,
    HttpModule
  ],
  providers: [
  AssetService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
