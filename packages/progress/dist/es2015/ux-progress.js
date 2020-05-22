import { __decorate } from "tslib";
import { customElement, useView, inject, PLATFORM, bindable } from 'aurelia-framework';
import { StyleEngine, normalizeNumberAttribute, GlobalStyleEngine } from '@aurelia-ux/core';
const INDETERMINATE_ANIMATION_TEMPLATE = `
@keyframes ux-progress-stroke-rotate-DIAMETER-STROKE-WIDTH {
   0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }
   12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }
   12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }
   25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }
   25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }
   37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }
   37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }
   50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }
   50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }
   62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }
   62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }
   75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }
   75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }
   87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }
   87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }
   100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }
 }`;
let UxProgress = class UxProgress {
    constructor(element, styleEngine, globalStyleEngine) {
        this.element = element;
        this.styleEngine = styleEngine;
        this.globalStyleEngine = globalStyleEngine;
        this.diameterNumber = 100;
        this.diameter = 100;
        this.strokeWidthNumber = 10;
        this.strokeWidth = 10;
    }
    valueChanged() {
        this.valueNumber = normalizeNumberAttribute(this.value);
        this.update();
    }
    themeChanged(newValue) {
        if (newValue !== null && !newValue.themeKey) {
            newValue.themeKey = 'progress';
        }
        this.styleEngine.applyTheme(newValue, this.element);
    }
    diameterChanged() {
        this.diameterNumber = normalizeNumberAttribute(this.diameter);
        this.update();
    }
    strokeWidthChanged() {
        this.strokeWidthNumber = normalizeNumberAttribute(this.strokeWidth);
        this.update();
    }
    bind() {
        this.valueNumber = normalizeNumberAttribute(this.value);
        this.diameterNumber = normalizeNumberAttribute(this.diameter);
        this.strokeWidthNumber = normalizeNumberAttribute(this.strokeWidth);
        this.update();
    }
    update() {
        var _a, _b;
        this.strokeCircumference = ((_a = this.diameterNumber, (_a !== null && _a !== void 0 ? _a : 0)) - (_b = this.strokeWidthNumber, (_b !== null && _b !== void 0 ? _b : 0))) * 3.14;
        if (this.valueNumber === undefined || this.valueNumber === null) {
            this.strokeDashOffset = 0;
            const styleId = `ux-progress-animation-template`;
            this.globalStyleEngine.addOrUpdateGlobalStyle(styleId, INDETERMINATE_ANIMATION_TEMPLATE
                .replace(/START_VALUE/g, `${0.95 * this.strokeCircumference}`)
                .replace(/END_VALUE/g, `${0.2 * this.strokeCircumference}`)
                .replace(/DIAMETER/g, `${this.diameter}`)
                .replace(/STROKE-WIDTH/g, `${this.strokeWidthNumber}`));
        }
        else {
            this.strokeDashOffset = this.strokeCircumference * (1 - this.valueNumber / 100);
            this.viewBox = `0 0 ${this.diameterNumber} ${this.diameterNumber}`;
        }
    }
};
__decorate([
    bindable
], UxProgress.prototype, "value", void 0);
__decorate([
    bindable
], UxProgress.prototype, "theme", void 0);
__decorate([
    bindable
], UxProgress.prototype, "diameter", void 0);
__decorate([
    bindable
], UxProgress.prototype, "strokeWidth", void 0);
UxProgress = __decorate([
    inject(Element, StyleEngine, GlobalStyleEngine),
    customElement('ux-progress'),
    useView(PLATFORM.moduleName('./ux-progress.html'))
], UxProgress);
export { UxProgress };
//# sourceMappingURL=ux-progress.js.map