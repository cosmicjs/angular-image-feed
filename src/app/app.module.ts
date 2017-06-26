import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Picture } from '../components/picture/picture';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    Picture
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
