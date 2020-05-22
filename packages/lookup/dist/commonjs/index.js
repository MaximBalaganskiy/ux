"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var ux_lookup_configuration_1 = require("./ux-lookup-configuration");
var ux_lookup_1 = require("./ux-lookup");
exports.UxLookup = ux_lookup_1.UxLookup;
var ux_lookup_theme_1 = require("./ux-lookup-theme");
exports.UxLookupTheme = ux_lookup_theme_1.UxLookupTheme;
function configure(frameworkConfig, callback) {
    frameworkConfig.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./ux-lookup')
    ]);
    if (typeof callback === 'function') {
        var config = frameworkConfig.container.get(ux_lookup_configuration_1.UxDefaultLookupConfiguration);
        callback(config);
    }
}
exports.configure = configure;
//# sourceMappingURL=index.js.map