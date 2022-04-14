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
exports.FlexShrinkGenerator = void 0;
var cssClassData_1 = require("../data/cssClassData");
var GeneratorBase_1 = require("../GeneratorBase");
var FlexShrinkGenerator = /** @class */ (function (_super) {
    __extends(FlexShrinkGenerator, _super);
    function FlexShrinkGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["0", ["0"]],
            ["1", ["1"]],
            ["2", ["2"]],
            ["3", ["3"]],
            ["inherit", ["inherit"]],
            ["initial", ["initial"]],
            ["revert", ["revert"]],
            ["unset", ["unset"]]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("flex-shrink", ["-o-flex-shrink", "-webkit-flex-shrink", "flex-shrink"], _this.postfixValuesMap)
        ];
        return _this;
    }
    return FlexShrinkGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.FlexShrinkGenerator = FlexShrinkGenerator;
//# sourceMappingURL=flexShrinkGenerator.js.map