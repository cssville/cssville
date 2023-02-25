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
exports.OpacityGenerator = void 0;
var cssClassData_1 = require("../data/cssClassData");
var GeneratorBase_1 = require("../GeneratorBase");
var OpacityGenerator = /** @class */ (function (_super) {
    __extends(OpacityGenerator, _super);
    function OpacityGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["00", ["0.0"]],
            ["01", ["0.1"]],
            ["02", ["0.2"]],
            ["03", ["0.3"]],
            ["04", ["0.4"]],
            ["05", ["0.5"]],
            ["06", ["0.6"]],
            ["07", ["0.7"]],
            ["08", ["0.8"]],
            ["09", ["0.9"]],
            ["10", ["1.0"]],
        ]);
        _this.list = ["inherit", "initial", "revert", "revert-layer", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("opacity", ["opacity"], _this.list, _this.postfixValuesMap),
        ];
        return _this;
    }
    return OpacityGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.OpacityGenerator = OpacityGenerator;
