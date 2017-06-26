import { Component } from '@angular/core';
import Cosmic from 'cosmicjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bucket = { slug: 'angular-gallery' };
  items = [];

  constructor() {
    this.items = [];
    Cosmic.getObjects({ bucket: this.bucket }, (err, res) => {
      this.items = res.objects.all;
    });
  }
}
