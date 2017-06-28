import { Component, Input, Output, EventEmitter } from '@angular/core';
import Cosmic from 'cosmicjs';
import { CosmicConfigService } from '../../services/cosmic_config';

@Component({
    selector: 'picture-upload',
    templateUrl: './picture_upload.html'
})
export class PictureUpload {
    private fl;
    private title;
    public uploading;
    @Output() onUpload = new EventEmitter<any>();

    constructor(
        private cosmicConfig: CosmicConfigService
    ) {
        this.uploading = false;
        this.fl = null;
        this.title = "";
    }

    onFileChange(ev) {
        if (ev.target.files && ev.target.files.length) {
            this.fl = ev.target.files[0];
        }
    }

    upload() {
        this.uploading = true;
        Cosmic.addMedia(this.cosmicConfig.getWriteCfg(), {
            media: this.fl,
            folder: this.fl.name
        }, (error, response) => {
            Cosmic.addObject(this.cosmicConfig.getWriteCfg(),
                this.cosmicConfig.buildPhotoUploadObj(this.title, response.body.media.name),
            (error, response) => {
                this.uploading = false;
                this.onUpload.emit({});
            });
        });
    }
}
