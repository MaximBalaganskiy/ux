define(["require", "exports", "aurelia-framework", "./ux-expandable", "./ux-expandable-theme"], function (require, exports, aurelia_framework_1, ux_expandable_1, ux_expandable_theme_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UxExpandable = ux_expandable_1.UxExpandable;
    exports.UxExpandableTheme = ux_expandable_theme_1.UxExpandableTheme;
    function configure(config) {
        config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./ux-expandable'));
    }
    exports.configure = configure;
});
//# sourceMappingURL=index.js.map