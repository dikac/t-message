(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/safe-cast", "../message/value", "@dikac/t-function/new"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const safe_cast_1 = require("@dikac/t-string/safe-cast");
    const value_1 = require("../message/value");
    const new_1 = require("@dikac/t-function/new");
    function Message(object, conversion = (result) => safe_cast_1.default(value_1.default(result)), throwable = new_1.default(Error)) {
        return throwable(conversion(object));
    }
    exports.default = Message;
});
//# sourceMappingURL=messsage.js.map