define(["require", "exports", "tslib", "./interfaces", "./interfaces", "./ux-positioning"], function (require, exports, tslib_1, interfaces_1, interfaces_2, ux_positioning_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(frameworkConfig, callback) {
        // config.globalResources([
        //   PLATFORM.moduleName('@aurelia-ux/boilerplate/ux-boilerplate')
        // ]);
        if (typeof callback === 'function') {
            var config = frameworkConfig.container.get(interfaces_1.UxPositioningConfiguration);
            callback(config);
        }
    }
    exports.configure = configure;
    tslib_1.__exportStar(interfaces_2, exports);
    tslib_1.__exportStar(ux_positioning_1, exports);
});
//# sourceMappingURL=index.js.map