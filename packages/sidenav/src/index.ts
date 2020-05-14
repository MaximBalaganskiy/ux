import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';
import { UxSidenav } from './ux-sidenav/ux-sidenav';
import { UxDefaultSidenavConfiguration } from './ux-default-sidenav-configuration';

export { UxSidenavTheme } from './ux-sidenav/ux-sidenav-theme';
export { IUxSidenavElement } from './ux-sidenav/i-ux-sidenav-element';
export { IUxSidenavDrawerElement } from './ux-sidenav-drawer/i-ux-sidenav-drawer-element';

export function configure(config: FrameworkConfiguration, callback?: (config: UxDefaultSidenavConfiguration) => void) {
  config.globalResources([
    PLATFORM.moduleName('./ux-sidenav/ux-sidenav'),
    PLATFORM.moduleName('./ux-sidenav-content/ux-sidenav-content'),
    PLATFORM.moduleName('./ux-sidenav-drawer/ux-sidenav-drawer'),
  ]);
  if (typeof callback === 'function') {
    const defaults = config.container.get(UxDefaultSidenavConfiguration);
    callback(defaults);
  }
}

export { UxSidenav };
