import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
import * as mapTypes from '../google-maps-types';
export declare class ImageMapTypeManager {
    protected _mapsWrapper: GoogleMapsAPIWrapper;
    constructor(_mapsWrapper: GoogleMapsAPIWrapper);
    addMapType(id: string, options: mapTypes.ImageMapTypeOptions): void;
}
