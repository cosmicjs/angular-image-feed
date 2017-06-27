import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [CosmicConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
