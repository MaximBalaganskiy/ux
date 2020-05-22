System.register(["tslib", "aurelia-dependency-injection", "../designs/material-design", "./web", "aurelia-pal"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, aurelia_dependency_injection_1, material_design_1, web_1, aurelia_pal_1, Electron;
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
            },
            function (web_1_1) {
                web_1 = web_1_1;
            },
            function (aurelia_pal_1_1) {
                aurelia_pal_1 = aurelia_pal_1_1;
            }
        ],
        execute: function () {
            Electron = /** @class */ (function () {
                function Electron() {
                    this.type = 'electron';
                }
                Object.defineProperty(Electron.prototype, "isAvailable", {
                    get: function () {
                        var p = aurelia_pal_1.PLATFORM.global.process;
                        return p && p.versions && p.versions.electron;
                    },
                    enumerable: true,
                    configurable: true
                });
                Electron.prototype.start = function (config) {
                    return Promise.resolve().then(function () { return config.container.get(web_1.Web); });
                };
                Electron = tslib_1.__decorate([
                    aurelia_dependency_injection_1.inject(material_design_1.MaterialDesign)
                ], Electron);
                return Electron;
            }());
            exports_1("Electron", Electron);
        }
    };
});
//# sourceMappingURL=electron.js.map