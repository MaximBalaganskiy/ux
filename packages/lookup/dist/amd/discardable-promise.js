define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiscardablePromise = void 0;
    /**
     * A wrapper-promise which rejects when discarded
     */
    var DiscardablePromise = /** @class */ (function () {
        function DiscardablePromise(promise) {
            this.promise = promise;
        }
        DiscardablePromise.prototype.then = function (onfulfilled, onrejected) {
            var _this = this;
            return this.promise.then(function (x) {
                if (_this.isDiscarded) {
                    return Promise.reject(DiscardablePromise.discarded);
                }
                else {
                    return Promise.resolve(x);
                }
            }).then(onfulfilled, onrejected);
        };
        DiscardablePromise.prototype.discard = function () {
            this.isDiscarded = true;
        };
        DiscardablePromise.discarded = Symbol("discarded");
        return DiscardablePromise;
    }());
    exports.DiscardablePromise = DiscardablePromise;
});
//# sourceMappingURL=discardable-promise.js.map