define(["require", "exports", "tslib", "aurelia-framework", "aurelia-pal"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SizeCustomAttribute = /** @class */ (function () {
        function SizeCustomAttribute(element) {
            this.element = element;
            this.value = { width: 0, height: 0 };
            this.width = 0;
            this.height = 0;
        }
        SizeCustomAttribute.prototype.bind = function () {
            this.observer = this.getObserver();
            this.observer.observe(this.element);
        };
        SizeCustomAttribute.prototype.unbind = function () {
            this.observer.disconnect();
            this.observer = void 0;
        };
        SizeCustomAttribute.prototype.getObserver = function () {
            var _this = this;
            if (typeof aurelia_pal_1.PLATFORM.global.ResizeObserver === 'function') {
                return new aurelia_pal_1.PLATFORM.global.ResizeObserver(function (records) {
                    var rect = records[0].contentRect;
                    _this.value = { width: rect.width, height: rect.height };
                });
            }
            else {
                return new ElementSizeDirtyChecker(function (size) {
                    _this.value = size;
                });
            }
        };
        SizeCustomAttribute.prototype.valueChanged = function (size) {
            this.value = size;
            this.width = size.width;
            this.height = size.height;
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.fromView, primaryProperty: true })
        ], SizeCustomAttribute.prototype, "value", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.fromView })
        ], SizeCustomAttribute.prototype, "width", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.fromView })
        ], SizeCustomAttribute.prototype, "height", void 0);
        SizeCustomAttribute = tslib_1.__decorate([
            aurelia_framework_1.customAttribute('size'),
            aurelia_framework_1.inject(Element)
        ], SizeCustomAttribute);
        return SizeCustomAttribute;
    }());
    exports.SizeCustomAttribute = SizeCustomAttribute;
    var ElementSizeDirtyChecker = /** @class */ (function () {
        function ElementSizeDirtyChecker(callback, rate /*3 times a second*/) {
            if (rate === void 0) { rate = 330; }
            this.callback = callback;
            this.rate = rate;
            this.size = { width: 0, height: 0 };
        }
        ElementSizeDirtyChecker.prototype.observe = function (element) {
            var _this = this;
            this.timerId = setInterval(function () {
                var _a = element.getBoundingClientRect(), width = _a.width, height = _a.height;
                var currentSize = _this.size;
                if (width !== currentSize.width || height !== currentSize.height) {
                    _this.size = { width: width, height: height };
                    if (typeof _this.callback === 'function') {
                        _this.callback(_this.size);
                    }
                }
            }, this.rate);
        };
        ElementSizeDirtyChecker.prototype.disconnect = function () {
            clearInterval(this.timerId);
        };
        return ElementSizeDirtyChecker;
    }());
});
//# sourceMappingURL=size-attribute.js.map