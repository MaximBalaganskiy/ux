System.register(["tslib", "aurelia-templating", "aurelia-dependency-injection", "./modal-util"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, aurelia_templating_1, aurelia_dependency_injection_1, modal_util_1, OkModalAttribute;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (modal_util_1_1) {
                modal_util_1 = modal_util_1_1;
            }
        ],
        execute: function () {
            OkModalAttribute = /** @class */ (function () {
                function OkModalAttribute(element) {
                    this.element = element;
                }
                OkModalAttribute.prototype.bind = function () {
                    this.element.addEventListener('click', this);
                };
                OkModalAttribute.prototype.unbind = function () {
                    this.element.removeEventListener('click', this);
                };
                OkModalAttribute.prototype.handleEvent = function () {
                    var modal = modal_util_1.findModal(this.element);
                    if (modal !== null) {
                        modal.ok(this.value);
                    }
                };
                OkModalAttribute = tslib_1.__decorate([
                    aurelia_dependency_injection_1.inject(Element),
                    aurelia_templating_1.customAttribute('ok-modal')
                ], OkModalAttribute);
                return OkModalAttribute;
            }());
            exports_1("OkModalAttribute", OkModalAttribute);
        }
    };
});
//# sourceMappingURL=ok-modal-attribute.js.map