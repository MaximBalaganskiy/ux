"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var ux_sidenav_1 = require("./ux-sidenav/ux-sidenav");
exports.UxSidenav = ux_sidenav_1.UxSidenav;
var ux_default_sidenav_configuration_1 = require("./ux-default-sidenav-configuration");
exports.UxDefaultSidenavConfiguration = ux_default_sidenav_configuration_1.UxDefaultSidenavConfiguration;
var ux_sidenav_theme_1 = require("./ux-sidenav/ux-sidenav-theme");
exports.UxSidenavTheme = ux_sidenav_theme_1.UxSidenavTheme;
function configure(config, callback) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./ux-sidenav/ux-sidenav'),
        aurelia_framework_1.PLATFORM.moduleName('./ux-sidenav-content/ux-sidenav-content'),
        aurelia_framework_1.PLATFORM.moduleName('./ux-sidenav-drawer/ux-sidenav-drawer'),
    ]);
    if (typeof callback === 'function') {
        var defaults = config.container.get(ux_default_sidenav_configuration_1.UxDefaultSidenavConfiguration);
        callback(defaults);
    }
}
exports.configure = configure;
//# sourceMappingURL=index.js.map