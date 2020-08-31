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
    class Sentence {
        constructor(valid, subject, predicates, object) {
            this.valid = valid;
            this.subject = subject;
            this.predicates = predicates;
            this.object = object;
        }
        valueOf() {
            return this.message;
        }
        toString() {
            return this.message;
        }
        get message() {
            const messages = [];
            if (this.subject) {
                messages.push(this.subject);
            }
            const predicate = this.predicates[this.valid ? 1 : 0];
            if (predicate) {
                messages.push(predicate);
            }
            if (this.object) {
                messages.push(this.object);
            }
            return messages.join(' ');
        }
    }
    exports.default = Sentence;
});
//# sourceMappingURL=sentence.js.map