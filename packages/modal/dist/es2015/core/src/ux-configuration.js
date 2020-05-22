import * as tslib_1 from "tslib";
import { inject } from 'aurelia-dependency-injection';
import { Loader } from 'aurelia-loader';
import { GlobalStyleEngine } from './styles/global-style-engine';
import './styles/normalize.css';
let UXConfiguration = class UXConfiguration {
    defaultConfiguration() {
        return this;
    }
};
UXConfiguration = tslib_1.__decorate([
    inject(Loader, GlobalStyleEngine)
], UXConfiguration);
export { UXConfiguration };
//# sourceMappingURL=ux-configuration.js.map