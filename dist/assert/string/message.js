(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/string/name", "@dikac/t-string/message/sentences"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const name_1 = require("@dikac/t-object/string/name");
    const sentences_1 = require("@dikac/t-string/message/sentences");
    function Message(valid, value, subject = '') {
        let sentence = new sentences_1.default(valid);
        sentence.subject.push(subject, `"${name_1.default(value)}"`);
        sentence.reject.push('is not compatible with');
        sentence.accept.push('is compatible with');
        sentence.expect.push('Message type');
        return sentence.message;
    }
    exports.default = Message;
});
//# sourceMappingURL=message.js.map