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
exports.MarginGenerator = void 0;
var cssClassData_1 = require("../data/cssClassData");
var GeneratorBase_1 = require("../GeneratorBase");
var MarginGenerator = /** @class */ (function (_super) {
    __extends(MarginGenerator, _super);
    function MarginGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["0", ["0px"]],
            ["1", ["4px"]],
            ["2", ["8px"]],
            ["3", ["16px"]],
            ["4", ["32px"]],
            ["5", ["64px"]],
            ["auto", ["auto"]],
            ["inherit", ["inherit"]],
            ["initial", ["initial"]],
            ["revert", ["revert"]],
            ["unset", ["unset"]]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("m", ["margin"], _this.postfixValuesMap),
            new cssClassData_1.CssClassData("mt", ["margin-top"], _this.postfixValuesMap),
            new cssClassData_1.CssClassData("mb", ["margin-bottom"], _this.postfixValuesMap),
            new cssClassData_1.CssClassData("ml", ["margin-left"], _this.postfixValuesMap),
            new cssClassData_1.CssClassData("mr", ["margin-right"], _this.postfixValuesMap),
            new cssClassData_1.CssClassData("mx", ["margin-left", "margin-right"], _this.postfixValuesMap),
            new cssClassData_1.CssClassData("my", ["margin-top", "margin-bottom"], _this.postfixValuesMap),
        ];
        return _this;
    }
    return MarginGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.MarginGenerator = MarginGenerator;
//# sourceMappingURL=marginGenerator.js.map