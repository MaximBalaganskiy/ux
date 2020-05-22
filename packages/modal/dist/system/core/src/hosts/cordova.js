System.register(["tslib", "aurelia-dependency-injection", "aurelia-pal", "../platforms/ios", "../platforms/android"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, aurelia_dependency_injection_1, aurelia_pal_1, ios_1, android_1, Cordova;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (aurelia_pal_1_1) {
                aurelia_pal_1 = aurelia_pal_1_1;
            },
            function (ios_1_1) {
                ios_1 = ios_1_1;
            },
            function (android_1_1) {
                android_1 = android_1_1;
            }
        ],
        execute: function () {
            Cordova = /** @class */ (function () {
                function Cordova(container) {
                    this.container = container;
                    this.type = 'cordova';
                }
                Object.defineProperty(Cordova.prototype, "isAvailable", {
                    get: function () {
                        return !!aurelia_pal_1.PLATFORM.global.cordova;
                    },
                    enumerable: true,
                    configurable: true
                });
                Cordova.prototype.start = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        aurelia_pal_1.DOM.addEventListener('deviceready', function () {
                            switch (_this.getPlatformType()) {
                                case 'ios':
                                    resolve(_this.container.get(ios_1.IOS));
                                    break;
                                default:
                                    resolve(_this.container.get(android_1.Android));
                                    break;
                            }
                        }, false);
                    });
                };
                Cordova.prototype.getPlatformType = function () {
                    var device = aurelia_pal_1.PLATFORM.global.device || { platform: 'android' };
                    return device.platform.toLowerCase();
                };
                Cordova = tslib_1.__decorate([
                    aurelia_dependency_injection_1.inject(aurelia_dependency_injection_1.Container)
                ], Cordova);
                return Cordova;
            }());
            exports_1("Cordova", Cordova);
        }
    };
});
//# sourceMappingURL=cordova.js.map