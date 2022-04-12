"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratorBase = void 0;
var GeneratorBase = /** @class */ (function () {
    function GeneratorBase() {
        this.postfixValuesMap = new Map();
        this.cssData = [];
    }
    GeneratorBase.prototype.generate = function (prefix) {
        if (prefix === void 0) { prefix = ""; }
        var cssPart = "";
        this.cssData.forEach(function (data) {
            cssPart += data.css(prefix);
        });
        return cssPart;
    };
    return GeneratorBase;
}());
exports.GeneratorBase = GeneratorBase;
//# sourceMappingURL=GeneratorBase.js.map