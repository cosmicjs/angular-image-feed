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
  page = 0;
  page_size = 2;
  scrollEnabled = true;

  constructor(
    public cosmicCfg: CosmicConfigService
  ) {
    this.items = [];
    let params = {
      type_slug: this.cosmicCfg.getPhotoSlug(),
      limit: this.page_size,
      skip: 0
    };
    Cosmic.getObjectType(this.cosmicCfg.getReadCfg(), params, (err, res) => {
      this.items = res.objects.all;
    });
  }

  onScroll() {
    if (!this.scrollEnabled) {
      return;
    }
    this.page++;
    let params = {
      type_slug: this.cosmicCfg.getPhotoSlug(),
      limit: this.page_size,
      skip: this.page * this.page_size
    };
    Cosmic.getObjectType(this.cosmicCfg.getReadCfg(), params, (err, res) => {
      if (res.objects && res.objects.all) {
        res.objects.all.forEach((itm) => {
          this.items.push(itm);
        });
      }
      else {
        this.scrollEnabled = false;
      }
    });
  }
}
