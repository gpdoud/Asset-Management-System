import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@app/core/core.module';

import { AppComponent } from '@app/app.component';
import { AssetListComponent } from './core/asset/asset-list/asset-list.component';
import { AssetService } from './shared/services/asset.service'


@NgModule({
  declarations: [
    AppComponent,
    AssetListComponent
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
