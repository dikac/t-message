(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/message", "@dikac/t-function/assert/callback", "./throwable/message"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const message_1 = require("../boolean/message");
    const callback_1 = require("@dikac/t-function/assert/callback");
    const message_2 = require("./throwable/message");
    function Message(value, error = message_2.default) {
        callback_1.default(value, message_1.default, error);
    }
    exports.default = Message;
});
//# sourceMappingURL=message.js.map