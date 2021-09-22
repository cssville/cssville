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
exports.FlexWrapGenerator = void 0;
var cssClassData_1 = require("../data/cssClassData");
var GeneratorBase_1 = require("../GeneratorBase");
var FlexWrapGenerator = /** @class */ (function (_super) {
    __extends(FlexWrapGenerator, _super);
    function FlexWrapGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["nowrap", ["nowrap"]],
            ["wrap", ["wrap"]],
            ["wrap-reverse", ["wrap-reverse"]],
            ["inherit", ["inherit"]],
            ["initial", ["initial"]],
            ["revert", ["revert"]],
            ["unset", ["unset"]]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("flex-wrap", ["-moz-flex-wrap", "-ms-flex-wrap", "-o-flex-wrap", "-webkit-flex-wrap", "flex-wrap"])
        ];
        return _this;
    }
    return FlexWrapGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.FlexWrapGenerator = FlexWrapGenerator;
//# sourceMappingURL=flexWrapGenerator.js.map