import { __decorate } from "tslib";
import { customElement, bindable, useView } from 'aurelia-templating';
import { PLATFORM } from 'aurelia-pal';
let UxListItem = class UxListItem {
    constructor() {
        this.theme = null;
    }
};
__decorate([
    bindable
], UxListItem.prototype, "theme", void 0);
UxListItem = __decorate([
    customElement('ux-list-item'),
    useView(PLATFORM.moduleName('./ux-list-item.html'))
], UxListItem);
export { UxListItem };
//# sourceMappingURL=ux-list-item.js.map