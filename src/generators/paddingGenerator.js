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
exports.PaddingGenerator = void 0;
var cssClassData_1 = require("../data/cssClassData");
var GeneratorBase_1 = require("./../GeneratorBase");
var PaddingGenerator = /** @class */ (function (_super) {
    __extends(PaddingGenerator, _super);
    function PaddingGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["0", ["0px"]],
            ["1", ["4px"]],
            ["2", ["8px"]],
            ["3", ["16px"]],
            ["4", ["32px"]],
            ["5", ["64px"]],
        ]);
        _this.list = ["inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("p", ["padding"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("pt", ["padding-top"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("pb", ["padding-bottom"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("pl", ["padding-left"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("pr", ["padding-right"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("px", ["padding-left", "padding-right"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("py", ["padding-top", "padding-bottom"], _this.list, _this.postfixValuesMap),
        ];
        return _this;
    }
    return PaddingGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.PaddingGenerator = PaddingGenerator;
