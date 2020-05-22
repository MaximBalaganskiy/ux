import * as tslib_1 from "tslib";
import { customAttribute, inject } from "aurelia-framework";
let AttachFocusAttribute = class AttachFocusAttribute {
    constructor(element) {
        this.element = element;
    }
    attached() {
        if (this.value === '' || (this.value && this.value !== 'false')) {
            this.element.focus();
        }
    }
};
AttachFocusAttribute = tslib_1.__decorate([
    inject(Element),
    customAttribute('ux-attach-focus')
], AttachFocusAttribute);
export { AttachFocusAttribute };
//# sourceMappingURL=attach-focus-attribute.js.map