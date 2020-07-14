(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/boolean/object"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const object_1 = require("@dikac/t-object/boolean/object");
    function Type(value, validation = (value) => true) {
        if (!object_1.default(value)) {
            return false;
        }
        if (!validation(value.message)) {
            return false;
        }
        return true;
    }
    exports.default = Type;
});
//# sourceMappingURL=type.js.map