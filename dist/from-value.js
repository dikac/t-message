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
    class FromValue {
        constructor(subject) {
            this.subject = subject;
        }
        get message() {
            return this.subject.value;
        }
    }
    exports.default = FromValue;
});
//# sourceMappingURL=from-value.js.map