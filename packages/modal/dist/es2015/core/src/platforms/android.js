import * as tslib_1 from "tslib";
import { inject } from 'aurelia-dependency-injection';
import { MaterialDesign } from '../designs/material-design';
let Android = class Android {
    constructor(design) {
        this.design = design;
        this.type = 'android';
    }
};
Android = tslib_1.__decorate([
    inject(MaterialDesign)
], Android);
export { Android };
//# sourceMappingURL=android.js.map