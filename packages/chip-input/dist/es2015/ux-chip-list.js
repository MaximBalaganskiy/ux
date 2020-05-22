import { __decorate } from "tslib";
import { customElement, bindable, useView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { StyleEngine } from '@aurelia-ux/core';
import { PLATFORM } from 'aurelia-pal';
let UxChipList = class UxChipList {
    constructor(element, styleEngine) {
        this.element = element;
        this.styleEngine = styleEngine;
        this.type = 'inline';
    }
    bind() {
        this.themeChanged(this.theme);
    }
    themeChanged(newValue) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'chip-list';
        }
        this.styleEngine.applyTheme(newValue, this.element);
    }
};
__decorate([
    bindable
], UxChipList.prototype, "theme", void 0);
__decorate([
    bindable
], UxChipList.prototype, "type", void 0);
UxChipList = __decorate([
    inject(Element, StyleEngine),
    customElement('ux-chip-list'),
    useView(PLATFORM.moduleName('./ux-chip-list.html'))
], UxChipList);
export { UxChipList };
//# sourceMappingURL=ux-chip-list.js.map