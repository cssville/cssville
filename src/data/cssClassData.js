"use strict";
exports.__esModule = true;
exports.CssClassData = void 0;
var CssClassData = /** @class */ (function () {
    function CssClassData(className, cssProperties, postfixArray, postfixValuesMap) {
        if (postfixValuesMap === void 0) { postfixValuesMap = new Map(); }
        var _this = this;
        this.className = className;
        this.cssProperties = cssProperties;
        this.postfixValuesMap = postfixValuesMap;
        this.cssParts = new Map();
        if (postfixArray !== undefined) {
            postfixArray.forEach(function (element) {
                _this.postfixValuesMap.set(element, [element]);
            });
        }
        this.postfixValuesMap.forEach(function (value, key) {
            var postfix = key;
            var innerProperties = "";
            _this.cssProperties.forEach(function (cssProperty) {
                value.forEach(function (v) {
                    innerProperties += "".concat(cssProperty, ": ").concat(v, "; ");
                });
            });
            _this.cssParts.set("".concat(_this.className, "-").concat(postfix), innerProperties);
        });
    }
    CssClassData.prototype.getCss = function (prefix, classes) {
        if (prefix === void 0) { prefix = ""; }
        var css = "";
        this.cssParts.forEach(function (value, key) {
            var className = "".concat(prefix === "" ? "" : "".concat(prefix, "-")).concat(key);
            if (classes.length === 0) {
                css += ".".concat(className, " {").concat(value, "} ");
            }
            if (classes.length > 0 && classes.indexOf(className) >= 0) {
                css += ".".concat(className, " {").concat(value, "} ");
            }
        });
        return css;
    };
    return CssClassData;
}());
exports.CssClassData = CssClassData;
