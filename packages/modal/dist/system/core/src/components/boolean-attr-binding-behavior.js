System.register(["tslib", "aurelia-binding"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, aurelia_binding_1, BooleanBB, BooleanAttributeObserver;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_binding_1_1) {
                aurelia_binding_1 = aurelia_binding_1_1;
            }
        ],
        execute: function () {
            BooleanBB = /** @class */ (function () {
                function BooleanBB() {
                }
                BooleanBB.prototype.bind = function (binding) {
                    binding.targetObserver = new BooleanAttributeObserver(binding.target, binding.targetProperty);
                };
                BooleanBB.prototype.unbind = function () {
                    // Empty
                };
                BooleanBB = tslib_1.__decorate([
                    aurelia_binding_1.bindingBehavior('booleanAttr')
                ], BooleanBB);
                return BooleanBB;
            }());
            exports_1("BooleanBB", BooleanBB);
            BooleanAttributeObserver = /** @class */ (function () {
                function BooleanAttributeObserver(element, attr) {
                    this.element = element;
                    this.attr = attr;
                    this.useString = /(?:^data-)|(?:^aria-)|\w+:/.test(attr);
                }
                BooleanAttributeObserver.prototype.getValue = function () {
                    var val = this.element.getAttribute(this.attr);
                    return val || val === '' ? true : false;
                };
                BooleanAttributeObserver.prototype.setValue = function (newValue) {
                    if (newValue || newValue === '') {
                        return this.element.setAttribute(this.attr, this.useString ? 'true' : '');
                    }
                    return this.useString ? this.element.setAttribute(this.attr, 'false') : this.element.removeAttribute(this.attr);
                };
                BooleanAttributeObserver.prototype.subscribe = function () {
                    var msg = "Observation of a \"" + this.element.nodeName + "\" element's \"" + this.attr + "\" attribute is not supported.";
                    throw new Error(msg);
                };
                return BooleanAttributeObserver;
            }());
        }
    };
});
//# sourceMappingURL=boolean-attr-binding-behavior.js.map