import { __decorate } from "tslib";
import { customElement, bindable, useView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { PLATFORM } from 'aurelia-pal';
let UxField = /** @class */ (() => {
    let UxField = class UxField {
        constructor(element) {
            this.element = element;
        }
        attached() {
            if (this.label && !this.element.querySelector('label')) {
                this.labelElement = document.createElement('label');
                this.labelElement.classList.add('ux-field__label');
                this.labelElement.textContent = this.label;
                this.element.insertBefore(this.labelElement, this.element.firstChild);
            }
        }
        labelChanged(newValue) {
            if (this.labelElement != null) {
                this.labelElement.textContent = newValue;
            }
        }
    };
    __decorate([
        bindable
    ], UxField.prototype, "label", void 0);
    UxField = __decorate([
        inject(Element),
        customElement('ux-field'),
        useView(PLATFORM.moduleName('./ux-field.html'))
    ], UxField);
    return UxField;
})();
export { UxField };
//# sourceMappingURL=ux-field.js.map