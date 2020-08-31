(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../sentence"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentence_1 = require("../../sentence");
    const sentence = new sentence_1.default(false, '', [
        'is not compatible with',
        'is compatible with',
    ], 'Message type');
    function Message(valid, value, subject = '') {
        sentence.valid = valid;
        sentence.subject = subject;
        return sentence.message;
    }
    exports.default = Message;
});
//# sourceMappingURL=message.js.map