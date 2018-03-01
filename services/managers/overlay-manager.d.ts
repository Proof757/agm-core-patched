import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
export declare class OverlayManager {
    protected _mapsWrapper: GoogleMapsAPIWrapper;
    constructor(_mapsWrapper: GoogleMapsAPIWrapper);
    USGSOverlay(bounds: number[], image: string): Promise<any>;
}
