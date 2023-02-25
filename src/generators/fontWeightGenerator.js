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
exports.FontWeightGenerator = void 0;
var cssClassData_1 = require("../data/cssClassData");
var GeneratorBase_1 = require("../GeneratorBase");
var FontWeightGenerator = /** @class */ (function (_super) {
    __extends(FontWeightGenerator, _super);
    function FontWeightGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.list = ["normal", "bold", "lighter", "bolder", "100", "200", "300", "400", "500",
            "600", "700", "800", "900", "inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("fw", ["font-weight"], _this.list)
        ];
        return _this;
    }
    return FontWeightGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.FontWeightGenerator = FontWeightGenerator;
