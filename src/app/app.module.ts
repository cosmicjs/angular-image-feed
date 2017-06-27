import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { Picture } from '../components/picture/picture';
import { PictureUpload } from '../components/picture_upload/picture_upload';
import { AppComponent } from './app.component';

import { CosmicConfigService } from '../services/cosmic_config';

@NgModule({
  declarations: [
    AppComponent,
    Picture,
    PictureUpload
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule
  ],
  providers: [CosmicConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
