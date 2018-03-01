import { Injectable } from '@angular/core';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
var OverlayManager = (function () {
    function OverlayManager(_mapsWrapper) {
        this._mapsWrapper = _mapsWrapper;
    }
    OverlayManager.prototype.USGSOverlay = function (bounds, image) {
        return this._mapsWrapper.USGSOverlay(bounds, image);
    };
    return OverlayManager;
}());
export { OverlayManager };
OverlayManager.decorators = [
    { type: Injectable },
];
/** @nocollapse */
OverlayManager.ctorParameters = function () { return [
    { type: GoogleMapsAPIWrapper, },
]; };
//# sourceMappingURL=overlay-manager.js.map