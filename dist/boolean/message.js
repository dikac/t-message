(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/boolean/object", "@dikac/t-object/boolean/property"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const object_1 = require("@dikac/t-object/boolean/object");
    const property_1 = require("@dikac/t-object/boolean/property");
    function Message(value, validation) {
        if (!object_1.default(value)) {
            return false;
        }
        if (!property_1.default(value, 'message')) {
            return false;
        }
        if (validation) {
            if (!validation(value.message)) {
                return false;
            }
        }
        return true;
    }
    exports.default = Message;
});
//# sourceMappingURL=message.js.map