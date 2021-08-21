"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratorBase = void 0;
var GeneratorBase = /** @class */ (function () {
    function GeneratorBase() {
        this.postfixValueMap = new Map();
        this.cssData = [];
    }
    GeneratorBase.prototype.generate = function (prefix) {
        var _this = this;
        if (prefix === void 0) { prefix = ""; }
        var cssPart = "";
        this.cssData.forEach(function (data) {
            cssPart += data.css(prefix, _this.postfixValueMap);
        });
        return cssPart;
    };
    return GeneratorBase;
}());
exports.GeneratorBase = GeneratorBase;
//# sourceMappingURL=GeneratorBase.js.map