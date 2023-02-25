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
exports.JustifyContentGenerator = void 0;
var cssClassData_1 = require("../data/cssClassData");
var GeneratorBase_1 = require("../GeneratorBase");
var JustifyContentGenerator = /** @class */ (function (_super) {
    __extends(JustifyContentGenerator, _super);
    function JustifyContentGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["safe-center", ["safe center"]],
            ["unsafe-center", ["unsafe center"]],
        ]);
        _this.list = ["center", "start", "flex-start", "end", "flex-end", "normal", "space-between", "space-around", "space-evenly",
            "stretch", "inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("justify-content", ["-o-justify-content", "-webkit-justify-content", "justify-content"], _this.list, _this.postfixValuesMap)
        ];
        return _this;
    }
    return JustifyContentGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.JustifyContentGenerator = JustifyContentGenerator;
