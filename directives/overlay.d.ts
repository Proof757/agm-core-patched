import { OnChanges, OnDestroy } from '@angular/core';
import { OverlayManager } from '../services/managers/overlay-manager';
/**
 * AgmOverlay renders a map marker inside a {@link AgmMap}.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-overlay [bounds]="bounds" [image]="image" *ngIf="toggleOverlay">
 *      </agm-overlay>
 *    </agm-map>
 *  `
 * })
 * ```
 */
export declare class AgmOverlay implements OnChanges, OnDestroy {
    private _mapTypeManager;
    overlay: any;
    /**
     * The options of google.maps.ImageMapType.
     */
    bounds: number[];
    /**
     * The mapLayerId that defines the name of new layer.
     */
    image: string;
    constructor(_mapTypeManager: OverlayManager);
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
