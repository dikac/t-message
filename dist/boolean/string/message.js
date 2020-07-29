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
    function Message(valid, value) {
        if (valid) {
            return `value is compatible with Message interface`;
        }
        else {
            return `value is not compatible with Message interface`;
        }
    }
    exports.default = Message;
});
//# sourceMappingURL=message.js.map