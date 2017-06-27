import { Component } from '@angular/core';
import Cosmic from 'cosmicjs';
import {CosmicConfigService} from '../services/cosmic_config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bucket = { slug: 'angular-gallery' };
  items = [];

  constructor(
    public cosmicCfg: CosmicConfigService
  ) {
    this.items = [];
    Cosmic.getObjects(this.cosmicCfg.getReadCfg(), (err, res) => {
      this.items = res.objects.all;
    });
  }
}
