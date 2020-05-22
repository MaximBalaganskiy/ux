System.register(["tslib", "aurelia-dependency-injection", "../designs/ios-design"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, aurelia_dependency_injection_1, ios_design_1, IOS;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (ios_design_1_1) {
                ios_design_1 = ios_design_1_1;
            }
        ],
        execute: function () {
            IOS = /** @class */ (function () {
                function IOS(design) {
                    this.design = design;
                    this.type = 'ios';
                }
                IOS = tslib_1.__decorate([
                    aurelia_dependency_injection_1.inject(ios_design_1.IOSDesign)
                ], IOS);
                return IOS;
            }());
            exports_1("IOS", IOS);
        }
    };
});
//# sourceMappingURL=ios.js.map