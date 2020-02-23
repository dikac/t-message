(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/record/map", "../boolean/type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const map_1 = require("@dikac/t-object/record/map");
    const type_1 = require("../boolean/type");
    /**
     * extract message value, and retain the object structure
     *
     * @param object
     * @param messageValidation
     * @constructor
     */
    function Map(object, messageValidation) {
        let validation = function (value) {
            return type_1.default(value, messageValidation);
        };
        return map_1.default(object, validation, (value) => value.message);
    }
    exports.default = Map;
});
//# sourceMappingURL=map.js.map