System.register(["tslib", "aurelia-dependency-injection", "./style-controller"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, aurelia_dependency_injection_1, style_controller_1, StyleEngine;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (style_controller_1_1) {
                style_controller_1 = style_controller_1_1;
            }
        ],
        execute: function () {
            StyleEngine = /** @class */ (function () {
                function StyleEngine(styleController) {
                    this.styleController = styleController;
                }
                /**
                 * Processes a UxTheme into the corresponding CSS Variables
                 * and applies them to the provided element. If no theme is
                 * provided then the theme will be setup as a default theme
                 * and set CSS Variables in the document head.
                 *
                 * @param element Element to apply the processed UxTheme to.
                 * @param theme UxTheme to process.
                 */
                StyleEngine.prototype.applyTheme = function (theme, element) {
                    if (theme == null || theme.themeKey == null) {
                        return;
                    }
                    this.styleController.updateTheme(theme, element);
                };
                /**
                 * Applies an array of themes. This is to enable the creation of
                 * large theme sets that can be easily applied with one call.
                 *
                 * @param themes Array of UxThemes to be applied.
                 */
                StyleEngine.prototype.applyThemeGroup = function (themes) {
                    for (var _i = 0, themes_1 = themes; _i < themes_1.length; _i++) {
                        var theme = themes_1[_i];
                        this.applyTheme(theme);
                    }
                };
                /**
                 * Retrieves the default theme object for the provided key that can then be updated.
                 *
                 * @param key Key of the theme to be retrieved.
                 */
                StyleEngine.prototype.getDefaultTheme = function (key) {
                    return this.styleController.themes[key];
                };
                StyleEngine = tslib_1.__decorate([
                    aurelia_dependency_injection_1.inject(style_controller_1.StyleController)
                ], StyleEngine);
                return StyleEngine;
            }());
            exports_1("StyleEngine", StyleEngine);
        }
    };
});
//# sourceMappingURL=style-engine.js.map