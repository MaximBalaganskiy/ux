System.register(["aurelia-framework", "./aurelia-ux", "./components/boolean-attr-binding-behavior", "./attributes/size-attribute", "./colors/swatches", "./colors/shadows", "./designs/design-attributes", "./effects/paper-ripple", "./components/html-attributes", "./components/background-color-parent", "./components/ux-choice-attribute", "./components/ux-choice-container-attribute", "./styles/style-engine", "./styles/global-style-engine", "./ux-configuration"], function (exports_1, context_1) {
    "use strict";
    var aurelia_framework_1, aurelia_ux_1, boolean_attr_binding_behavior_1, uxCorePromise;
    var __moduleName = context_1 && context_1.id;
    function configure(config, callback) {
        if (uxCorePromise) {
            return uxCorePromise;
        }
        var ux = config.container.get(aurelia_ux_1.AureliaUX);
        var boolAttr = new aurelia_framework_1.BindingBehaviorResource('');
        boolAttr.initialize(config.container, boolean_attr_binding_behavior_1.BooleanBB);
        boolAttr.register(config.aurelia.resources, 'booleanAttr');
        config.globalResources([
            aurelia_framework_1.PLATFORM.moduleName('./attributes/size-attribute'),
            aurelia_framework_1.PLATFORM.moduleName('./components/ux-choice-attribute'),
            aurelia_framework_1.PLATFORM.moduleName('./components/ux-choice-container-attribute')
        ]);
        if (typeof callback === 'function') {
            return uxCorePromise = Promise.resolve(callback(ux))
                .then(function () { return ux.start(config); });
        }
        else {
            ux.use.defaultConfiguration();
            return uxCorePromise = ux.start(config);
        }
    }
    exports_1("configure", configure);
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_ux_1_1) {
                aurelia_ux_1 = aurelia_ux_1_1;
                exports_1({
                    "AureliaUX": aurelia_ux_1_1["AureliaUX"]
                });
            },
            function (boolean_attr_binding_behavior_1_1) {
                boolean_attr_binding_behavior_1 = boolean_attr_binding_behavior_1_1;
            },
            function (size_attribute_1_1) {
                exports_1({
                    "SizeCustomAttribute": size_attribute_1_1["SizeCustomAttribute"]
                });
            },
            function (swatches_1_1) {
                exports_1({
                    "swatches": swatches_1_1["swatches"]
                });
            },
            function (shadows_1_1) {
                exports_1({
                    "shadows": shadows_1_1["shadows"]
                });
            },
            function (design_attributes_1_1) {
                exports_1({
                    "processDesignAttributes": design_attributes_1_1["processDesignAttributes"]
                });
            },
            function (paper_ripple_1_1) {
                exports_1({
                    "PaperRipple": paper_ripple_1_1["PaperRipple"]
                });
            },
            function (html_attributes_1_1) {
                exports_1({
                    "normalizeBooleanAttribute": html_attributes_1_1["normalizeBooleanAttribute"],
                    "normalizeNumberAttribute": html_attributes_1_1["normalizeNumberAttribute"]
                });
            },
            function (background_color_parent_1_1) {
                exports_1({
                    "getBackgroundColorThroughParents": background_color_parent_1_1["getBackgroundColorThroughParents"]
                });
            },
            function (ux_choice_attribute_1_1) {
                exports_1({
                    "UxChoiceAttribute": ux_choice_attribute_1_1["UxChoiceAttribute"]
                });
            },
            function (ux_choice_container_attribute_1_1) {
                exports_1({
                    "UxChoiceContainerAttribute": ux_choice_container_attribute_1_1["UxChoiceContainerAttribute"]
                });
            },
            function (style_engine_1_1) {
                exports_1({
                    "StyleEngine": style_engine_1_1["StyleEngine"]
                });
            },
            function (global_style_engine_1_1) {
                exports_1({
                    "GlobalStyleEngine": global_style_engine_1_1["GlobalStyleEngine"]
                });
            },
            function (ux_configuration_1_1) {
                exports_1({
                    "UXConfiguration": ux_configuration_1_1["UXConfiguration"]
                });
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=index.js.map