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
exports.TextDecorationGenerator = void 0;
var cssClassData_1 = require("../data/cssClassData");
var GeneratorBase_1 = require("../GeneratorBase");
var TextDecorationGenerator = /** @class */ (function (_super) {
    __extends(TextDecorationGenerator, _super);
    function TextDecorationGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValueMap = new Map([
            ["underline", "underline"],
            ["overline", "overline"],
            ["none", "none"],
            ["inherit", "inherit"],
            ["initial", "initial"],
            ["revert", "revert"],
            ["unset", "unset"]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("text-decoration", ["text-decoration"])
        ];
        return _this;
    }
    return TextDecorationGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.TextDecorationGenerator = TextDecorationGenerator;
//# sourceMappingURL=textDecorationGenerator.js.map