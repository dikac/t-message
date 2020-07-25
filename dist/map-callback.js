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
    function MapCallback(message, callback) {
        return {
            get subject() {
                return message;
            },
            get message() {
                return callback(message.message);
            }
        };
    }
    exports.default = MapCallback;
});
//# sourceMappingURL=map-callback.js.map