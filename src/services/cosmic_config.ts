import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';

@Injectable()
export class CosmicConfigService {
    private write_key;
    private bucket_name;
    private photos_type;

    constructor() {
        this.photos_type = environment.photos_type;
        this.write_key = environment.write_key;
        this.bucket_name = environment.bucket_name;
    }

    public getReadCfg(): any {
        return {
            bucket: {
                slug: this.bucket_name
            }
        };
    }

    public getWriteCfg(): any {
        return {
            bucket: {
                slug: this.bucket_name,
                write_key: this.write_key
            }
        };
    }

    public buildPhotoUploadObj(title, file): any {
        return {
            write_key: this.write_key,
            type_slug: this.photos_type,
            title: title,
            metafields: [{
                key: 'picture',
                type: 'file',
                value: file
            }]
        };
    }

    getPhotoSlug() {
        return this.photos_type;
    }
}