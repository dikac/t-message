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
    /**
     * use callback return as {@link Message.message} value
     */
    class Callback {
        /**
         * @param callback
         * to be used for generating {@link Message.message}
         *
         * @param argument
         * argument fon {@param callback}
         */
        constructor(callback, argument) {
            this.callback = callback;
            this.argument = argument;
        }
        /**
         * value from {@template FunctionTemplate} return
         */
        get message() {
            return this.callback(...this.argument);
        }
    }
    exports.default = Callback;
});
//# sourceMappingURL=callback.js.map