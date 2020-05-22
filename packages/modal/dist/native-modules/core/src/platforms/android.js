import * as tslib_1 from "tslib";
import { inject } from 'aurelia-dependency-injection';
import { MaterialDesign } from '../designs/material-design';
var Android = /** @class */ (function () {
    function Android(design) {
        this.design = design;
        this.type = 'android';
    }
    Android = tslib_1.__decorate([
        inject(MaterialDesign)
    ], Android);
    return Android;
}());
export { Android };
//# sourceMappingURL=android.js.map