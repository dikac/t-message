(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/message", "../assert/throwable/message"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const message_1 = require("../assert/message");
    const message_2 = require("../assert/throwable/message");
    function Message(value, error = message_2.default) {
        message_1.default(value, error);
        return value;
    }
    exports.default = Message;
});
//# sourceMappingURL=message.js.map