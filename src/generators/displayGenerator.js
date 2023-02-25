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
exports.DisplayGenerator = void 0;
var cssClassData_1 = require("../data/cssClassData");
var GeneratorBase_1 = require("../GeneratorBase");
var DisplayGenerator = /** @class */ (function (_super) {
    __extends(DisplayGenerator, _super);
    function DisplayGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["block-flow", ["block flow"]],
            ["inline-flow", ["inline flow"]],
            ["inline-flow-root", ["inline flow-root"]],
            ["block-flex", ["block flex"]],
            ["inline-flex", ["inline flex"]],
            ["block-grid", ["block grid"]],
            ["inline-grid", ["inline grid"]],
            ["block-flow-root", ["block flow-root"]],
        ]);
        _this.list = ["block", "inline", "inline-block", "flex", "inline-flex", "inherit", "grid", "inline-grid",
            "flow-root", "none", "contents", "table", "table-row", "table-column", "table-cell", "list-item", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("d", ["display"], _this.list, _this.postfixValuesMap)
        ];
        return _this;
    }
    return DisplayGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.DisplayGenerator = DisplayGenerator;
