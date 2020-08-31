(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * filter value {@param message} with given {@param callback}
     *
     * return value {@param callback} use for populate message data
     *
     * @param message
     * @param callback
     */
    class FilterCallback {
        constructor(subject, callback) {
            this.subject = subject;
            this.callback = callback;
        }
        get message() {
            return this.callback(this.subject);
        }
    }
    exports.default = FilterCallback;
});
//# sourceMappingURL=filter-callback.js.map