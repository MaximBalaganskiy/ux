"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var ux_expandable_1 = require("./ux-expandable");
exports.UxExpandable = ux_expandable_1.UxExpandable;
var ux_expandable_theme_1 = require("./ux-expandable-theme");
exports.UxExpandableTheme = ux_expandable_theme_1.UxExpandableTheme;
function configure(config) {
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./ux-expandable'));
}
exports.configure = configure;
//# sourceMappingURL=index.js.map