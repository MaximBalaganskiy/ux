import * as tslib_1 from "tslib";
import { inject } from 'aurelia-dependency-injection';
import { MaterialDesign } from '../designs/material-design';
let Web = class Web {
    constructor(design) {
        this.design = design;
        this.type = 'web';
        this.isAvailable = true;
    }
    start() {
        return Promise.resolve().then(() => this);
    }
};
Web = tslib_1.__decorate([
    inject(MaterialDesign)
], Web);
export { Web };
//# sourceMappingURL=web.js.map