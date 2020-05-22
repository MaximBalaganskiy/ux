System.register(["tslib", "aurelia-dependency-injection", "../designs/material-design"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, aurelia_dependency_injection_1, material_design_1, Android;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (material_design_1_1) {
                material_design_1 = material_design_1_1;
            }
        ],
        execute: function () {
            Android = /** @class */ (function () {
                function Android(design) {
                    this.design = design;
                    this.type = 'android';
                }
                Android = tslib_1.__decorate([
                    aurelia_dependency_injection_1.inject(material_design_1.MaterialDesign)
                ], Android);
                return Android;
            }());
            exports_1("Android", Android);
        }
    };
});
//# sourceMappingURL=android.js.map