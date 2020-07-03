(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-value/object-property", "@dikac/t-value/memoize"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const object_property_1 = require("@dikac/t-value/object-property");
    const memoize_1 = require("@dikac/t-value/memoize");
    /**
     * Wrap {@link Message} and cache its value
     *
     * suitable to cached value from heave operation
     */
    class Memoize {
        constructor(subject) {
            this.subject = subject;
            let value = new object_property_1.default(subject, 'message');
            this.memoize = new memoize_1.default(value);
        }
        get message() {
            return this.memoize.value;
        }
    }
    exports.default = Memoize;
});
//# sourceMappingURL=memoize.js.map