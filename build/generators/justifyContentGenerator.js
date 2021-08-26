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
exports.JustifyContentGenerator = void 0;
var cssClassData_1 = require("../data/cssClassData");
var GeneratorBase_1 = require("../GeneratorBase");
var JustifyContentGenerator = /** @class */ (function (_super) {
    __extends(JustifyContentGenerator, _super);
    function JustifyContentGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValueMap = new Map([
            ["center", "center"],
            ["start", "start"],
            ["flex-start", "flex-start"],
            ["end", "end"],
            ["flex-end", "flex-end"],
            ["normal", "normal"],
            ["space-between", "space-between"],
            ["space-around", "space-around"],
            ["space-evenly", "space-evenly"],
            ["stretch", "stretch"],
            ["safe-center", "safe center"],
            ["unsafe-center", "unsafe center"],
            ["inherit", "inherit"],
            ["initial", "initial"],
            ["revert", "revert"],
            ["unset", "unset"]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("justify-content", ["justify-content"])
        ];
        return _this;
    }
    return JustifyContentGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.JustifyContentGenerator = JustifyContentGenerator;
//# sourceMappingURL=justifyContentGenerator.js.map