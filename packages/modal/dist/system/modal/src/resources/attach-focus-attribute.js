System.register(["tslib", "aurelia-framework"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, aurelia_framework_1, AttachFocusAttribute;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
            AttachFocusAttribute = /** @class */ (function () {
                function AttachFocusAttribute(element) {
                    this.element = element;
                }
                AttachFocusAttribute.prototype.attached = function () {
                    if (this.value === '' || (this.value && this.value !== 'false')) {
                        this.element.focus();
                    }
                };
                AttachFocusAttribute = tslib_1.__decorate([
                    aurelia_framework_1.inject(Element),
                    aurelia_framework_1.customAttribute('ux-attach-focus')
                ], AttachFocusAttribute);
                return AttachFocusAttribute;
            }());
            exports_1("AttachFocusAttribute", AttachFocusAttribute);
        }
    };
});
//# sourceMappingURL=attach-focus-attribute.js.map