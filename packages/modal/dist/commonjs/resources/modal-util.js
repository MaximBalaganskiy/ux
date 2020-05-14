"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ux_modal_1 = require("../ux-modal");
function findModal(item) {
    var element = item;
    if (element === null)
        return null;
    while (element.tagName !== 'BODY') {
        element = element.parentElement;
        var isModalElement = element ? modalViewModelFromElement(element) : null;
        if (isModalElement !== null) {
            return isModalElement;
        }
        if (element === null)
            return null;
    }
    return null;
}
exports.findModal = findModal;
function modalViewModelFromElement(element) {
    var el = element;
    if (!el.au) {
        return null;
    }
    for (var key in el.au) {
        if (el.au[key].viewModel && el.au[key].viewModel instanceof ux_modal_1.UxModal) {
            return el.au[key].viewModel;
        }
    }
    return null;
}
exports.modalViewModelFromElement = modalViewModelFromElement;
