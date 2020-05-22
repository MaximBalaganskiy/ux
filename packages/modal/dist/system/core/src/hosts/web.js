System.register(["tslib", "aurelia-dependency-injection", "../designs/material-design"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, aurelia_dependency_injection_1, material_design_1, Web;
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
            Web = /** @class */ (function () {
                function Web(design) {
                    this.design = design;
                    this.type = 'web';
                    this.isAvailable = true;
                }
                Web.prototype.start = function () {
                    var _this = this;
                    return Promise.resolve().then(function () { return _this; });
                };
                Web = tslib_1.__decorate([
                    aurelia_dependency_injection_1.inject(material_design_1.MaterialDesign)
                ], Web);
                return Web;
            }());
            exports_1("Web", Web);
        }
    };
});
//# sourceMappingURL=web.js.map