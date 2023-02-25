"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.HeightGenerator = void 0;
var cssClassData_1 = require("../data/cssClassData");
var GeneratorBase_1 = require("../GeneratorBase");
var HeightGenerator = /** @class */ (function (_super) {
    __extends(HeightGenerator, _super);
    function HeightGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["100", ["100%"]],
        ]);
        _this.list = ["auto", "max-content", "min-content", "16px", "24px", "32px", "48px", "64px", "inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("h", ["height"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("max-h", ["max-height"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("min-h", ["min-height"], _this.list, _this.postfixValuesMap)
        ];
        return _this;
    }
    return HeightGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.HeightGenerator = HeightGenerator;
