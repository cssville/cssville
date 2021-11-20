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
exports.DisplayGenerator = void 0;
var cssClassData_1 = require("../data/cssClassData");
var GeneratorBase_1 = require("../GeneratorBase");
var DisplayGenerator = /** @class */ (function (_super) {
    __extends(DisplayGenerator, _super);
    function DisplayGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["block", ["block"]],
            ["inline", ["inline"]],
            ["inline-block", ["inline-block"]],
            ["flex", ["flex"]],
            ["inline-flex", ["inline-flex"]],
            ["grid", ["grid"]],
            ["inline-grid", ["inline-grid"]],
            ["flow-root", ["flow-root"]],
            ["none", ["none"]],
            ["contents", ["contents"]],
            ["block-flow", ["block flow"]],
            ["inline-flow", ["inline flow"]],
            ["inline-flow-root", ["inline flow-root"]],
            ["block-flex", ["block flex"]],
            ["inline-flex", ["inline flex"]],
            ["block-grid", ["block grid"]],
            ["inline-grid", ["inline grid"]],
            ["block-flow-root", ["block flow-root"]],
            ["table", ["table"]],
            ["table-row", ["table-row"]],
            ["table-column", ["table-column"]],
            ["table-cell", ["table-cell"]],
            ["list-item", ["list-item"]],
            ["inherit", ["inherit"]],
            ["initial", ["initial"]],
            ["revert", ["revert"]],
            ["unset", ["unset"]]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("d", ["display"])
        ];
        return _this;
    }
    return DisplayGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.DisplayGenerator = DisplayGenerator;
//# sourceMappingURL=displayGenerator.js.map