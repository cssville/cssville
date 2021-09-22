"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssClassData = void 0;
var CssClassData = /** @class */ (function () {
    function CssClassData(className, cssProperties) {
        this.className = className;
        this.cssProperties = cssProperties;
    }
    CssClassData.prototype.css = function (prefix, postfixValuesMap) {
        var _this = this;
        if (prefix === void 0) { prefix = ""; }
        var css = "";
        postfixValuesMap.forEach(function (value, key) {
            var postfix = key;
            var innerProperties = "";
            _this.cssProperties.forEach(function (cssProperty) {
                value.forEach(function (v) {
                    innerProperties += cssProperty + ": " + v + "; ";
                });
            });
            css += "." + (prefix === "" ? "" : prefix + "-") + _this.className + "-" + postfix + " { " + innerProperties + "} ";
        });
        return css;
    };
    return CssClassData;
}());
exports.CssClassData = CssClassData;
//# sourceMappingURL=cssClassData.js.map