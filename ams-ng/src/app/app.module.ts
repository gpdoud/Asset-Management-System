import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@app/core/core.module';

import { AppComponent } from '@app/app.component';
import { AssetListComponent } from './core/asset/asset-list/asset-list.component';
import { AssetDetailComponent } from './core/asset/asset-detail/asset-detail.component';
import { AssetAddComponent } from './core/asset/asset-add/asset-add.component';
import { AssetService } from './shared/services/asset.service';
import { AboutComponent } from './core/about/about.component';
import { HelpComponent } from './core/help/help.component';
import { HomeComponent } from './core/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetListComponent,
    AssetDetailComponent,
    AssetAddComponent,
    AboutComponent,
    HelpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
  AssetService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
