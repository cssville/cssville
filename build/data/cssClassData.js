"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssClassData = void 0;
var CssClassData = /** @class */ (function () {
    function CssClassData(className, cssProperties, postfixValuesMap) {
        var _this = this;
        this.className = className;
        this.cssProperties = cssProperties;
        this.postfixValuesMap = postfixValuesMap;
        this.cssParts = new Map();
        this.postfixValuesMap.forEach(function (value, key) {
            var postfix = key;
            var innerProperties = "";
            _this.cssProperties.forEach(function (cssProperty) {
                value.forEach(function (v) {
                    innerProperties += cssProperty + ": " + v + "; ";
                });
            });
            _this.cssParts.set(_this.className + "-" + postfix, innerProperties);
        });
    }
    CssClassData.prototype.getCss = function (prefix, classes) {
        if (prefix === void 0) { prefix = ""; }
        var css = "";
        this.cssParts.forEach(function (value, key) {
            var className = "" + (prefix === "" ? "" : prefix + "-") + key;
            if (classes.length === 0) {
                css += "." + className + " { " + value + "} ";
            }
            if (classes.length > 0 && classes.indexOf(className) >= 0) {
                css += "." + className + " { " + value + "} ";
            }
        });
        return css;
    };
    return CssClassData;
}());
exports.CssClassData = CssClassData;
//# sourceMappingURL=cssClassData.js.map