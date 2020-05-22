System.register(["tslib", "aurelia-dependency-injection", "aurelia-loader", "./styles/global-style-engine", "./styles/normalize.css"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, aurelia_dependency_injection_1, aurelia_loader_1, global_style_engine_1, UXConfiguration;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (aurelia_loader_1_1) {
                aurelia_loader_1 = aurelia_loader_1_1;
            },
            function (global_style_engine_1_1) {
                global_style_engine_1 = global_style_engine_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            UXConfiguration = /** @class */ (function () {
                function UXConfiguration() {
                }
                UXConfiguration.prototype.defaultConfiguration = function () {
                    return this;
                };
                UXConfiguration = tslib_1.__decorate([
                    aurelia_dependency_injection_1.inject(aurelia_loader_1.Loader, global_style_engine_1.GlobalStyleEngine)
                ], UXConfiguration);
                return UXConfiguration;
            }());
            exports_1("UXConfiguration", UXConfiguration);
        }
    };
});
//# sourceMappingURL=ux-configuration.js.map