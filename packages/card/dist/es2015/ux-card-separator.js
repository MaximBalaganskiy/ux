import { __decorate } from "tslib";
import { inject, useView, PLATFORM } from 'aurelia-framework';
import { customElement } from 'aurelia-templating';
let UxCardSeparator = class UxCardSeparator {
    constructor(element) {
        this.element = element;
    }
    bind() {
        if (this.element.hasAttribute('no-margin')) {
            this.element.classList.add('ux-card__separator--no-margin');
        }
    }
};
UxCardSeparator = __decorate([
    inject(Element),
    customElement('ux-card-separator'),
    useView(PLATFORM.moduleName('./ux-card-separator.html'))
], UxCardSeparator);
export { UxCardSeparator };
//# sourceMappingURL=ux-card-separator.js.map