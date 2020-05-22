import { UxPositioningConfiguration } from './interfaces';
export function configure(frameworkConfig, callback) {
    // config.globalResources([
    //   PLATFORM.moduleName('@aurelia-ux/boilerplate/ux-boilerplate')
    // ]);
    if (typeof callback === 'function') {
        var config = frameworkConfig.container.get(UxPositioningConfiguration);
        callback(config);
    }
}
export * from './interfaces';
export * from './ux-positioning';
//# sourceMappingURL=index.js.map