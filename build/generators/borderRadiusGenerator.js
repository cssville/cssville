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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorderRadiusGenerator = void 0;
var cssClassData_1 = require("../data/cssClassData");
var GeneratorBase_1 = require("../GeneratorBase");
var BorderRadiusGenerator = /** @class */ (function (_super) {
    __extends(BorderRadiusGenerator, _super);
    function BorderRadiusGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValueMap = new Map([
            ["0", "0px"],
            ["1", "4px"],
            ["2", "8px"],
            ["3", "16px"],
            ["4", "32px"],
            ["5", "64px"],
            ["inherit", "inherit"],
            ["initial", "initial"],
            ["revert", "revert"],
            ["unset", "unset"]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("br", ["border-radius"]),
            new cssClassData_1.CssClassData("br-top-left", ["border-top-left-radius"]),
            new cssClassData_1.CssClassData("br-top-right", ["border-top-right-radius"]),
            new cssClassData_1.CssClassData("br-bottom-right", ["border-bottom-right-radius"]),
            new cssClassData_1.CssClassData("br-bottom-left", ["border-bottom-left-radius"])
        ];
        return _this;
    }
    return BorderRadiusGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.BorderRadiusGenerator = BorderRadiusGenerator;
//# sourceMappingURL=borderRadiusGenerator.js.map