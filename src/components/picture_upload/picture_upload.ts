import { Component, Input } from '@angular/core';
import Cosmic from 'cosmicjs';
import { CosmicConfigService } from '../../services/cosmic_config';

@Component({
    selector: 'picture-upload',
    templateUrl: './picture_upload.html'
})
export class PictureUpload {
    private fl;
    private title;

    constructor(
        private cosmicConfig: CosmicConfigService
    ) {
        this.fl = null;
        this.title = "";
    }

    onFileChange(ev) {
        if (ev.target.files && ev.target.files.length) {
            this.fl = ev.target.files[0];
        }
    }

    upload() {
        Cosmic.addMedia(this.cosmicConfig.getWriteCfg(), {
            media: this.fl,
            folder: this.fl.name
        }, (error, response) => {
            Cosmic.addObject(this.cosmicConfig.getWriteCfg(),
                this.cosmicConfig.buildPhotoUploadObj(this.title, response.body.media.name),
            (error, response) => {
                console.log(error, response);
            });
        });
    }
}
