/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/GeneratorBase.ts":
/*!******************************!*\
  !*** ./src/GeneratorBase.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.GeneratorBase = void 0;
var GeneratorBase = /** @class */ (function () {
    function GeneratorBase() {
        this.postfixValuesMap = new Map();
        this.cssData = [];
    }
    GeneratorBase.prototype.generate = function (prefix, classes) {
        if (prefix === void 0) { prefix = ""; }
        if (classes === void 0) { classes = []; }
        var cssPart = "";
        this.cssData.forEach(function (data) {
            cssPart += data.getCss(prefix, classes);
        });
        return cssPart;
    };
    return GeneratorBase;
}());
exports.GeneratorBase = GeneratorBase;


/***/ }),

/***/ "./src/cssville.ts":
/*!*************************!*\
  !*** ./src/cssville.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.Cssville = void 0;
var paddingGenerator_1 = __webpack_require__(/*! ./generators/paddingGenerator */ "./src/generators/paddingGenerator.ts");
var marginGenerator_1 = __webpack_require__(/*! ./generators/marginGenerator */ "./src/generators/marginGenerator.ts");
var displayGenerator_1 = __webpack_require__(/*! ./generators/displayGenerator */ "./src/generators/displayGenerator.ts");
var flexDirectionGenerator_1 = __webpack_require__(/*! ./generators/flexDirectionGenerator */ "./src/generators/flexDirectionGenerator.ts");
var flexGrowGenerator_1 = __webpack_require__(/*! ./generators/flexGrowGenerator */ "./src/generators/flexGrowGenerator.ts");
var flexWrapGenerator_1 = __webpack_require__(/*! ./generators/flexWrapGenerator */ "./src/generators/flexWrapGenerator.ts");
var flexShrinkGenerator_1 = __webpack_require__(/*! ./generators/flexShrinkGenerator */ "./src/generators/flexShrinkGenerator.ts");
var floatGenerator_1 = __webpack_require__(/*! ./generators/floatGenerator */ "./src/generators/floatGenerator.ts");
var fontWeightGenerator_1 = __webpack_require__(/*! ./generators/fontWeightGenerator */ "./src/generators/fontWeightGenerator.ts");
var widthGenerator_1 = __webpack_require__(/*! ./generators/widthGenerator */ "./src/generators/widthGenerator.ts");
var fontSizeGenerator_1 = __webpack_require__(/*! ./generators/fontSizeGenerator */ "./src/generators/fontSizeGenerator.ts");
var positionGenerator_1 = __webpack_require__(/*! ./generators/positionGenerator */ "./src/generators/positionGenerator.ts");
var alignItemsGenerator_1 = __webpack_require__(/*! ./generators/alignItemsGenerator */ "./src/generators/alignItemsGenerator.ts");
var justifyContentGenerator_1 = __webpack_require__(/*! ./generators/justifyContentGenerator */ "./src/generators/justifyContentGenerator.ts");
var textDecorationGenerator_1 = __webpack_require__(/*! ./generators/textDecorationGenerator */ "./src/generators/textDecorationGenerator.ts");
var heightGenerator_1 = __webpack_require__(/*! ./generators/heightGenerator */ "./src/generators/heightGenerator.ts");
var colorGenerator_1 = __webpack_require__(/*! ./generators/colorGenerator */ "./src/generators/colorGenerator.ts");
var borderRadiusGenerator_1 = __webpack_require__(/*! ./generators/borderRadiusGenerator */ "./src/generators/borderRadiusGenerator.ts");
var cursorGenerator_1 = __webpack_require__(/*! ./generators/cursorGenerator */ "./src/generators/cursorGenerator.ts");
var backgroundColorGenerator_1 = __webpack_require__(/*! ./generators/backgroundColorGenerator */ "./src/generators/backgroundColorGenerator.ts");
var textAlignGenerator_1 = __webpack_require__(/*! ./generators/textAlignGenerator */ "./src/generators/textAlignGenerator.ts");
var wordBreakGenerator_1 = __webpack_require__(/*! ./generators/wordBreakGenerator */ "./src/generators/wordBreakGenerator.ts");
var whiteSpaceGenerator_1 = __webpack_require__(/*! ./generators/whiteSpaceGenerator */ "./src/generators/whiteSpaceGenerator.ts");
var Cssville = /** @class */ (function () {
    function Cssville() {
    }
    Cssville.getCss = function (classes) {
        if (classes === void 0) { classes = []; }
        var css = "";
        for (var x = 0; x < Cssville.generators.length; x++) {
            var g = Cssville.generators[x];
            var cssPart = g.generate("", classes);
            css += cssPart;
        }
        this.prefixValueMap.forEach(function (value, key) {
            var innerCss = "";
            var prefix = key;
            for (var x = 0; x < Cssville.generators.length; x++) {
                var g = Cssville.generators[x];
                var cssPartForPrefix = g.generate(prefix, classes);
                innerCss += cssPartForPrefix;
            }
            css += "@media (max-width: ".concat(value, ") { ").concat(innerCss, "} ");
        });
        return css;
    };
    Cssville.prefixValueMap = new Map([
        ["xl", "1280px"],
        ["lg", "1012px"],
        ["md", "768px"],
        ["sm", "544px"],
        ["xs", "320px"],
    ]);
    Cssville.generators = [
        new alignItemsGenerator_1.AlignItemsGenerator(),
        new borderRadiusGenerator_1.BorderRadiusGenerator(),
        new backgroundColorGenerator_1.BackgroundColorGenerator(),
        new colorGenerator_1.ColorGenerator(),
        new cursorGenerator_1.CursorGenerator(),
        new paddingGenerator_1.PaddingGenerator(),
        new marginGenerator_1.MarginGenerator(),
        new displayGenerator_1.DisplayGenerator(),
        new flexDirectionGenerator_1.FlexDirectionGenerator(),
        new flexGrowGenerator_1.FlexGrowGenerator(),
        new flexShrinkGenerator_1.FlexShrinkGenerator(),
        new flexWrapGenerator_1.FlexWrapGenerator(),
        new floatGenerator_1.FloatGenerator(),
        new fontSizeGenerator_1.FontSizeGenerator(),
        new fontWeightGenerator_1.FontWeightGenerator(),
        new heightGenerator_1.HeightGenerator(),
        new justifyContentGenerator_1.JustifyContentGenerator(),
        new widthGenerator_1.WidthGenerator(),
        new whiteSpaceGenerator_1.WhiteSpaceGenerator(),
        new wordBreakGenerator_1.WordBreakGenerator(),
        new textAlignGenerator_1.TextAlignGenerator(),
        new textDecorationGenerator_1.TextDecorationGenerator(),
        new positionGenerator_1.PositionGenerator(),
    ];
    return Cssville;
}());
exports.Cssville = Cssville;


/***/ }),

/***/ "./src/data/cssClassData.ts":
/*!**********************************!*\
  !*** ./src/data/cssClassData.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.CssClassData = void 0;
var CssClassData = /** @class */ (function () {
    function CssClassData(className, cssProperties, postfixArray, postfixValuesMap) {
        if (postfixValuesMap === void 0) { postfixValuesMap = new Map(); }
        var _this = this;
        this.className = className;
        this.cssProperties = cssProperties;
        this.postfixValuesMap = postfixValuesMap;
        this.cssParts = new Map();
        if (postfixArray !== undefined) {
            postfixArray.forEach(function (element) {
                _this.postfixValuesMap.set(element, [element]);
            });
        }
        this.postfixValuesMap.forEach(function (value, key) {
            var postfix = key;
            var innerProperties = "";
            _this.cssProperties.forEach(function (cssProperty) {
                value.forEach(function (v) {
                    innerProperties += "".concat(cssProperty, ": ").concat(v, "; ");
                });
            });
            _this.cssParts.set("".concat(_this.className, "-").concat(postfix), innerProperties);
        });
    }
    CssClassData.prototype.getCss = function (prefix, classes) {
        if (prefix === void 0) { prefix = ""; }
        var css = "";
        this.cssParts.forEach(function (value, key) {
            var className = "".concat(prefix === "" ? "" : "".concat(prefix, "-")).concat(key);
            if (classes.length === 0) {
                css += ".".concat(className, " {").concat(value, "} ");
            }
            if (classes.length > 0 && classes.indexOf(className) >= 0) {
                css += ".".concat(className, " {").concat(value, "} ");
            }
        });
        return css;
    };
    return CssClassData;
}());
exports.CssClassData = CssClassData;


/***/ }),

/***/ "./src/generators/alignItemsGenerator.ts":
/*!***********************************************!*\
  !*** ./src/generators/alignItemsGenerator.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.AlignItemsGenerator = void 0;
var cssClassData_1 = __webpack_require__(/*! ../data/cssClassData */ "./src/data/cssClassData.ts");
var GeneratorBase_1 = __webpack_require__(/*! ../GeneratorBase */ "./src/GeneratorBase.ts");
var AlignItemsGenerator = /** @class */ (function (_super) {
    __extends(AlignItemsGenerator, _super);
    function AlignItemsGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["first-baseline", ["first baseline"]],
            ["last-baseline", ["last baseline"]],
            ["safe-center", ["safe center"]],
            ["unsafe-center", ["unsafe center"]],
        ]);
        _this.list = ["normal", "stretch", "center", "start", "flex-start", "end", "flex-end", "baseline", "inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("align-items", ["-ms-align-items", "-o-align-items", "-webkit-align-items", "align-items"], _this.list, _this.postfixValuesMap)
        ];
        return _this;
    }
    return AlignItemsGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.AlignItemsGenerator = AlignItemsGenerator;


/***/ }),

/***/ "./src/generators/backgroundColorGenerator.ts":
/*!****************************************************!*\
  !*** ./src/generators/backgroundColorGenerator.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.BackgroundColorGenerator = void 0;
var cssClassData_1 = __webpack_require__(/*! ../data/cssClassData */ "./src/data/cssClassData.ts");
var GeneratorBase_1 = __webpack_require__(/*! ../GeneratorBase */ "./src/GeneratorBase.ts");
var BackgroundColorGenerator = /** @class */ (function (_super) {
    __extends(BackgroundColorGenerator, _super);
    function BackgroundColorGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.flatValues = ["black", "white", "transparent", "inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("bg-color", ["background-color"], _this.flatValues)
        ];
        return _this;
    }
    return BackgroundColorGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.BackgroundColorGenerator = BackgroundColorGenerator;


/***/ }),

/***/ "./src/generators/borderRadiusGenerator.ts":
/*!*************************************************!*\
  !*** ./src/generators/borderRadiusGenerator.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.BorderRadiusGenerator = void 0;
var cssClassData_1 = __webpack_require__(/*! ../data/cssClassData */ "./src/data/cssClassData.ts");
var GeneratorBase_1 = __webpack_require__(/*! ../GeneratorBase */ "./src/GeneratorBase.ts");
var BorderRadiusGenerator = /** @class */ (function (_super) {
    __extends(BorderRadiusGenerator, _super);
    function BorderRadiusGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["0", ["0px"]],
            ["1", ["4px"]],
            ["2", ["8px"]],
            ["3", ["16px"]],
            ["4", ["32px"]],
            ["5", ["64px"]],
            ["50p", ["50%"]],
        ]);
        _this.list = ["inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("br", ["-ms-border-radius", "border-radius"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("br-top-left", ["-ms-border-top-left-radius", "border-top-left-radius"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("br-top-right", ["-ms-border-top-right-radius", "border-top-right-radius"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("br-bottom-right", ["-ms-border-bottom-right-radius", "border-bottom-right-radius"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("br-bottom-left", ["-ms-border-bottom-left-radius", "border-bottom-left-radius"], _this.list, _this.postfixValuesMap)
        ];
        return _this;
    }
    return BorderRadiusGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.BorderRadiusGenerator = BorderRadiusGenerator;


/***/ }),

/***/ "./src/generators/colorGenerator.ts":
/*!******************************************!*\
  !*** ./src/generators/colorGenerator.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.ColorGenerator = void 0;
var cssClassData_1 = __webpack_require__(/*! ../data/cssClassData */ "./src/data/cssClassData.ts");
var GeneratorBase_1 = __webpack_require__(/*! ../GeneratorBase */ "./src/GeneratorBase.ts");
var ColorGenerator = /** @class */ (function (_super) {
    __extends(ColorGenerator, _super);
    function ColorGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.list = ["black", "white", "transparent", "inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("color", ["color"], _this.list)
        ];
        return _this;
    }
    return ColorGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.ColorGenerator = ColorGenerator;


/***/ }),

/***/ "./src/generators/cursorGenerator.ts":
/*!*******************************************!*\
  !*** ./src/generators/cursorGenerator.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.CursorGenerator = void 0;
var cssClassData_1 = __webpack_require__(/*! ../data/cssClassData */ "./src/data/cssClassData.ts");
var GeneratorBase_1 = __webpack_require__(/*! ../GeneratorBase */ "./src/GeneratorBase.ts");
var CursorGenerator = /** @class */ (function (_super) {
    __extends(CursorGenerator, _super);
    function CursorGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.list = ["cell", "help", "crosshair", "text", "wait", "copy", "move", "grab", "grabbing", "not-allowed", "pointer", "progress", "zoom-in", "zoom-out", "default"];
        _this.cssData = [
            new cssClassData_1.CssClassData("cursor", ["cursor"], _this.list)
        ];
        return _this;
    }
    return CursorGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.CursorGenerator = CursorGenerator;


/***/ }),

/***/ "./src/generators/displayGenerator.ts":
/*!********************************************!*\
  !*** ./src/generators/displayGenerator.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var cssClassData_1 = __webpack_require__(/*! ../data/cssClassData */ "./src/data/cssClassData.ts");
var GeneratorBase_1 = __webpack_require__(/*! ../GeneratorBase */ "./src/GeneratorBase.ts");
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
        ]);
        _this.list = ["inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("d", ["display"], _this.list, _this.postfixValuesMap)
        ];
        return _this;
    }
    return DisplayGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.DisplayGenerator = DisplayGenerator;


/***/ }),

/***/ "./src/generators/flexDirectionGenerator.ts":
/*!**************************************************!*\
  !*** ./src/generators/flexDirectionGenerator.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.FlexDirectionGenerator = void 0;
var cssClassData_1 = __webpack_require__(/*! ../data/cssClassData */ "./src/data/cssClassData.ts");
var GeneratorBase_1 = __webpack_require__(/*! ../GeneratorBase */ "./src/GeneratorBase.ts");
var FlexDirectionGenerator = /** @class */ (function (_super) {
    __extends(FlexDirectionGenerator, _super);
    function FlexDirectionGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["row", ["row"]],
            ["row-reverse", ["row-reverse"]],
            ["column", ["column"]],
            ["column-reverse", ["column-reverse"]],
        ]);
        _this.list = ["inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("flex-direction", ["flex-direction"], _this.list, _this.postfixValuesMap)
        ];
        return _this;
    }
    return FlexDirectionGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.FlexDirectionGenerator = FlexDirectionGenerator;


/***/ }),

/***/ "./src/generators/flexGrowGenerator.ts":
/*!*********************************************!*\
  !*** ./src/generators/flexGrowGenerator.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.FlexGrowGenerator = void 0;
var cssClassData_1 = __webpack_require__(/*! ../data/cssClassData */ "./src/data/cssClassData.ts");
var GeneratorBase_1 = __webpack_require__(/*! ../GeneratorBase */ "./src/GeneratorBase.ts");
var FlexGrowGenerator = /** @class */ (function (_super) {
    __extends(FlexGrowGenerator, _super);
    function FlexGrowGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["0", ["0"]],
            ["1", ["1"]],
            ["2", ["2"]],
            ["3", ["3"]],
        ]);
        _this.list = ["inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("flex-grow", ["-o-flex-grow", "-webkit-flex-grow", "flex-grow"], _this.list, _this.postfixValuesMap)
        ];
        return _this;
    }
    return FlexGrowGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.FlexGrowGenerator = FlexGrowGenerator;


/***/ }),

/***/ "./src/generators/flexShrinkGenerator.ts":
/*!***********************************************!*\
  !*** ./src/generators/flexShrinkGenerator.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.FlexShrinkGenerator = void 0;
var cssClassData_1 = __webpack_require__(/*! ../data/cssClassData */ "./src/data/cssClassData.ts");
var GeneratorBase_1 = __webpack_require__(/*! ../GeneratorBase */ "./src/GeneratorBase.ts");
var FlexShrinkGenerator = /** @class */ (function (_super) {
    __extends(FlexShrinkGenerator, _super);
    function FlexShrinkGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["0", ["0"]],
            ["1", ["1"]],
            ["2", ["2"]],
            ["3", ["3"]],
        ]);
        _this.list = ["inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("flex-shrink", ["-o-flex-shrink", "-webkit-flex-shrink", "flex-shrink"], _this.list, _this.postfixValuesMap)
        ];
        return _this;
    }
    return FlexShrinkGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.FlexShrinkGenerator = FlexShrinkGenerator;


/***/ }),

/***/ "./src/generators/flexWrapGenerator.ts":
/*!*********************************************!*\
  !*** ./src/generators/flexWrapGenerator.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.FlexWrapGenerator = void 0;
var cssClassData_1 = __webpack_require__(/*! ../data/cssClassData */ "./src/data/cssClassData.ts");
var GeneratorBase_1 = __webpack_require__(/*! ../GeneratorBase */ "./src/GeneratorBase.ts");
var FlexWrapGenerator = /** @class */ (function (_super) {
    __extends(FlexWrapGenerator, _super);
    function FlexWrapGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["nowrap", ["nowrap"]],
            ["wrap", ["wrap"]],
            ["wrap-reverse", ["wrap-reverse"]],
        ]);
        _this.list = ["inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("flex-wrap", ["-moz-flex-wrap", "-ms-flex-wrap", "-o-flex-wrap", "-webkit-flex-wrap", "flex-wrap"], _this.list, _this.postfixValuesMap)
        ];
        return _this;
    }
    return FlexWrapGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.FlexWrapGenerator = FlexWrapGenerator;


/***/ }),

/***/ "./src/generators/floatGenerator.ts":
/*!******************************************!*\
  !*** ./src/generators/floatGenerator.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.FloatGenerator = void 0;
var cssClassData_1 = __webpack_require__(/*! ../data/cssClassData */ "./src/data/cssClassData.ts");
var GeneratorBase_1 = __webpack_require__(/*! ../GeneratorBase */ "./src/GeneratorBase.ts");
var FloatGenerator = /** @class */ (function (_super) {
    __extends(FloatGenerator, _super);
    function FloatGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["left", ["left"]],
            ["right", ["right"]],
            ["none", ["none"]],
        ]);
        _this.list = ["inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("float", ["float"], _this.list, _this.postfixValuesMap)
        ];
        return _this;
    }
    return FloatGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.FloatGenerator = FloatGenerator;


/***/ }),

/***/ "./src/generators/fontSizeGenerator.ts":
/*!*********************************************!*\
  !*** ./src/generators/fontSizeGenerator.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.FontSizeGenerator = void 0;
var cssClassData_1 = __webpack_require__(/*! ../data/cssClassData */ "./src/data/cssClassData.ts");
var GeneratorBase_1 = __webpack_require__(/*! ../GeneratorBase */ "./src/GeneratorBase.ts");
var FontSizeGenerator = /** @class */ (function (_super) {
    __extends(FontSizeGenerator, _super);
    function FontSizeGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["xx-small", ["xx-small"]],
            ["x-small", ["x-small"]],
            ["small", ["small"]],
            ["medium", ["medium"]],
            ["large", ["large"]],
            ["x-large", ["x-large"]],
            ["xx-large", ["xx-large"]],
            ["xxx-large", ["48px", "xxx-large"]],
            ["smaller", ["smaller"]],
            ["larger", ["larger"]],
            ["1rem", ["1rem"]],
            ["2rem", ["2rem"]],
            ["3rem", ["3rem"]],
            ["4rem", ["4rem"]],
            ["5rem", ["5rem"]],
        ]);
        _this.list = ["inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("fs", ["font-size"], _this.list, _this.postfixValuesMap)
        ];
        return _this;
    }
    return FontSizeGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.FontSizeGenerator = FontSizeGenerator;


/***/ }),

/***/ "./src/generators/fontWeightGenerator.ts":
/*!***********************************************!*\
  !*** ./src/generators/fontWeightGenerator.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var cssClassData_1 = __webpack_require__(/*! ../data/cssClassData */ "./src/data/cssClassData.ts");
var GeneratorBase_1 = __webpack_require__(/*! ../GeneratorBase */ "./src/GeneratorBase.ts");
var FontWeightGenerator = /** @class */ (function (_super) {
    __extends(FontWeightGenerator, _super);
    function FontWeightGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["normal", ["normal"]],
            ["bold", ["bold"]],
            ["lighter", ["lighter"]],
            ["bolder", ["bolder"]],
            ["100", ["100"]],
            ["200", ["200"]],
            ["300", ["300"]],
            ["400", ["400"]],
            ["500", ["500"]],
            ["600", ["600"]],
            ["700", ["700"]],
            ["800", ["800"]],
            ["900", ["900"]],
        ]);
        _this.list = ["inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("fw", ["font-weight"], _this.list, _this.postfixValuesMap)
        ];
        return _this;
    }
    return FontWeightGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.FontWeightGenerator = FontWeightGenerator;


/***/ }),

/***/ "./src/generators/heightGenerator.ts":
/*!*******************************************!*\
  !*** ./src/generators/heightGenerator.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.HeightGenerator = void 0;
var cssClassData_1 = __webpack_require__(/*! ../data/cssClassData */ "./src/data/cssClassData.ts");
var GeneratorBase_1 = __webpack_require__(/*! ../GeneratorBase */ "./src/GeneratorBase.ts");
var HeightGenerator = /** @class */ (function (_super) {
    __extends(HeightGenerator, _super);
    function HeightGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["auto", ["auto"]],
            ["max-content", ["max-content"]],
            ["min-content", ["min-content"]],
            ["16px", ["16px"]],
            ["24px", ["24px"]],
            ["32px", ["32px"]],
            ["48px", ["48px"]],
            ["64px", ["64px"]],
            ["100", ["100%"]],
        ]);
        _this.list = ["inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("h", ["height"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("max-h", ["max-height"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("min-h", ["min-height"], _this.list, _this.postfixValuesMap)
        ];
        return _this;
    }
    return HeightGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.HeightGenerator = HeightGenerator;


/***/ }),

/***/ "./src/generators/justifyContentGenerator.ts":
/*!***************************************************!*\
  !*** ./src/generators/justifyContentGenerator.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.JustifyContentGenerator = void 0;
var cssClassData_1 = __webpack_require__(/*! ../data/cssClassData */ "./src/data/cssClassData.ts");
var GeneratorBase_1 = __webpack_require__(/*! ../GeneratorBase */ "./src/GeneratorBase.ts");
var JustifyContentGenerator = /** @class */ (function (_super) {
    __extends(JustifyContentGenerator, _super);
    function JustifyContentGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["center", ["center"]],
            ["start", ["start"]],
            ["flex-start", ["flex-start"]],
            ["end", ["end"]],
            ["flex-end", ["flex-end"]],
            ["normal", ["normal"]],
            ["space-between", ["space-between"]],
            ["space-around", ["space-around"]],
            ["space-evenly", ["space-evenly"]],
            ["stretch", ["stretch"]],
            ["safe-center", ["safe center"]],
            ["unsafe-center", ["unsafe center"]],
        ]);
        _this.list = ["inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("justify-content", ["-o-justify-content", "-webkit-justify-content", "justify-content"], _this.list, _this.postfixValuesMap)
        ];
        return _this;
    }
    return JustifyContentGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.JustifyContentGenerator = JustifyContentGenerator;


/***/ }),

/***/ "./src/generators/marginGenerator.ts":
/*!*******************************************!*\
  !*** ./src/generators/marginGenerator.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.MarginGenerator = void 0;
var cssClassData_1 = __webpack_require__(/*! ../data/cssClassData */ "./src/data/cssClassData.ts");
var GeneratorBase_1 = __webpack_require__(/*! ../GeneratorBase */ "./src/GeneratorBase.ts");
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
        ]);
        _this.list = ["inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("m", ["margin"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("mt", ["margin-top"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("mb", ["margin-bottom"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("ml", ["margin-left"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("mr", ["margin-right"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("mx", ["margin-left", "margin-right"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("my", ["margin-top", "margin-bottom"], _this.list, _this.postfixValuesMap),
        ];
        return _this;
    }
    return MarginGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.MarginGenerator = MarginGenerator;


/***/ }),

/***/ "./src/generators/paddingGenerator.ts":
/*!********************************************!*\
  !*** ./src/generators/paddingGenerator.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.PaddingGenerator = void 0;
var cssClassData_1 = __webpack_require__(/*! ../data/cssClassData */ "./src/data/cssClassData.ts");
var GeneratorBase_1 = __webpack_require__(/*! ./../GeneratorBase */ "./src/GeneratorBase.ts");
var PaddingGenerator = /** @class */ (function (_super) {
    __extends(PaddingGenerator, _super);
    function PaddingGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["0", ["0px"]],
            ["1", ["4px"]],
            ["2", ["8px"]],
            ["3", ["16px"]],
            ["4", ["32px"]],
            ["5", ["64px"]],
        ]);
        _this.list = ["inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("p", ["padding"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("pt", ["padding-top"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("pb", ["padding-bottom"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("pl", ["padding-left"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("pr", ["padding-right"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("px", ["padding-left", "padding-right"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("py", ["padding-top", "padding-bottom"], _this.list, _this.postfixValuesMap),
        ];
        return _this;
    }
    return PaddingGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.PaddingGenerator = PaddingGenerator;


/***/ }),

/***/ "./src/generators/positionGenerator.ts":
/*!*********************************************!*\
  !*** ./src/generators/positionGenerator.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.PositionGenerator = void 0;
var cssClassData_1 = __webpack_require__(/*! ../data/cssClassData */ "./src/data/cssClassData.ts");
var GeneratorBase_1 = __webpack_require__(/*! ../GeneratorBase */ "./src/GeneratorBase.ts");
var PositionGenerator = /** @class */ (function (_super) {
    __extends(PositionGenerator, _super);
    function PositionGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["static", ["static"]],
            ["relative", ["relative"]],
            ["absolute", ["absolute"]],
            ["fixed", ["fixed"]],
            ["sticky", ["sticky"]],
        ]);
        _this.list = ["inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("position", ["position"], _this.list, _this.postfixValuesMap),
        ];
        return _this;
    }
    return PositionGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.PositionGenerator = PositionGenerator;


/***/ }),

/***/ "./src/generators/textAlignGenerator.ts":
/*!**********************************************!*\
  !*** ./src/generators/textAlignGenerator.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.TextAlignGenerator = void 0;
var cssClassData_1 = __webpack_require__(/*! ../data/cssClassData */ "./src/data/cssClassData.ts");
var GeneratorBase_1 = __webpack_require__(/*! ../GeneratorBase */ "./src/GeneratorBase.ts");
var TextAlignGenerator = /** @class */ (function (_super) {
    __extends(TextAlignGenerator, _super);
    function TextAlignGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["underline", ["underline"]],
            ["overline", ["overline"]],
            ["none", ["none"]],
            ["start", ["start"]],
            ["end", ["end"]],
            ["left", ["left"]],
            ["right", ["right"]],
            ["center", ["center"]],
            ["justify", ["justify"]],
            ["justify-all", ["justify-all"]],
            ["match-parent", ["match-parent"]],
        ]);
        _this.list = ["inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("text-align", ["text-align"], _this.list, _this.postfixValuesMap)
        ];
        return _this;
    }
    return TextAlignGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.TextAlignGenerator = TextAlignGenerator;


/***/ }),

/***/ "./src/generators/textDecorationGenerator.ts":
/*!***************************************************!*\
  !*** ./src/generators/textDecorationGenerator.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.TextDecorationGenerator = void 0;
var cssClassData_1 = __webpack_require__(/*! ../data/cssClassData */ "./src/data/cssClassData.ts");
var GeneratorBase_1 = __webpack_require__(/*! ../GeneratorBase */ "./src/GeneratorBase.ts");
var TextDecorationGenerator = /** @class */ (function (_super) {
    __extends(TextDecorationGenerator, _super);
    function TextDecorationGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["underline", ["underline"]],
            ["overline", ["overline"]],
            ["none", ["none"]],
        ]);
        _this.list = ["inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("text-decoration", ["text-decoration"], _this.list, _this.postfixValuesMap)
        ];
        return _this;
    }
    return TextDecorationGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.TextDecorationGenerator = TextDecorationGenerator;


/***/ }),

/***/ "./src/generators/whiteSpaceGenerator.ts":
/*!***********************************************!*\
  !*** ./src/generators/whiteSpaceGenerator.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.WhiteSpaceGenerator = void 0;
var cssClassData_1 = __webpack_require__(/*! ../data/cssClassData */ "./src/data/cssClassData.ts");
var GeneratorBase_1 = __webpack_require__(/*! ../GeneratorBase */ "./src/GeneratorBase.ts");
var WhiteSpaceGenerator = /** @class */ (function (_super) {
    __extends(WhiteSpaceGenerator, _super);
    function WhiteSpaceGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["nowrap", ["nowrap"]],
            ["pre", ["pre"]],
            ["pre-wrap", ["pre-wrap"]],
            ["pre-line", ["pre-line"]],
            ["break-spaces", ["break-spaces"]]
        ]);
        _this.list = ["normal"];
        _this.cssData = [
            new cssClassData_1.CssClassData("white-space", ["white-space"], _this.list, _this.postfixValuesMap)
        ];
        return _this;
    }
    return WhiteSpaceGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.WhiteSpaceGenerator = WhiteSpaceGenerator;


/***/ }),

/***/ "./src/generators/widthGenerator.ts":
/*!******************************************!*\
  !*** ./src/generators/widthGenerator.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.WidthGenerator = void 0;
var cssClassData_1 = __webpack_require__(/*! ../data/cssClassData */ "./src/data/cssClassData.ts");
var GeneratorBase_1 = __webpack_require__(/*! ../GeneratorBase */ "./src/GeneratorBase.ts");
var WidthGenerator = /** @class */ (function (_super) {
    __extends(WidthGenerator, _super);
    function WidthGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["max-content", ["max-content"]],
            ["min-content", ["min-content"]],
            ["fit-content", ["fit-content"]],
            ["0", ["0%"]],
            ["1", ["8.333%"]],
            ["2", ["16.666%"]],
            ["3", ["25%"]],
            ["4", ["33.333%"]],
            ["5", ["41.666%"]],
            ["6", ["50%"]],
            ["7", ["58.333%"]],
            ["8", ["66.666%"]],
            ["9", ["75%"]],
            ["10", ["83.333%"]],
            ["11", ["91.666%"]],
            ["12", ["100%"]],
            ["xs", ["320px"]],
            ["sm", ["544px"]],
            ["md", ["768px"]],
            ["lg", ["1012px"]],
            ["xl", ["1280px"]],
            ["16px", ["16px"]],
            ["24px", ["24px"]],
            ["32px", ["32px"]],
            ["48px", ["48px"]],
            ["64px", ["64px"]]
        ]);
        _this.list = ["inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("w", ["width"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("max-w", ["max-width"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("min-w", ["min-width"], _this.list, _this.postfixValuesMap)
        ];
        return _this;
    }
    return WidthGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.WidthGenerator = WidthGenerator;


/***/ }),

/***/ "./src/generators/wordBreakGenerator.ts":
/*!**********************************************!*\
  !*** ./src/generators/wordBreakGenerator.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.WordBreakGenerator = void 0;
var cssClassData_1 = __webpack_require__(/*! ../data/cssClassData */ "./src/data/cssClassData.ts");
var GeneratorBase_1 = __webpack_require__(/*! ../GeneratorBase */ "./src/GeneratorBase.ts");
var WordBreakGenerator = /** @class */ (function (_super) {
    __extends(WordBreakGenerator, _super);
    function WordBreakGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["break-all", ["break-all"]],
            ["keep-all", ["keep-all"]],
            ["break-word", ["break-word"]]
        ]);
        _this.list = ["normal"];
        _this.cssData = [
            new cssClassData_1.CssClassData("word-break", ["word-break"], _this.list, _this.postfixValuesMap)
        ];
        return _this;
    }
    return WordBreakGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.WordBreakGenerator = WordBreakGenerator;


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*************************!*\
  !*** ./src/generate.ts ***!
  \*************************/

exports.__esModule = true;
var fs = __webpack_require__(/*! fs */ "fs");
var cssville_1 = __webpack_require__(/*! ./cssville */ "./src/cssville.ts");
var pathModule = __webpack_require__(/*! path */ "path");
function getFiles(pathDir) {
    var files = [];
    var dirs = [];
    if (pathDir.indexOf(',') > -1) {
        dirs.push.apply(dirs, pathDir.split(','));
    }
    else {
        dirs.push(pathDir);
    }
    for (var _i = 0, dirs_1 = dirs; _i < dirs_1.length; _i++) {
        var dir_1 = dirs_1[_i];
        console.log("Reading files from ".concat(dir_1));
        if (!fs.existsSync(dir_1)) {
            console.error("Directory '".concat(pathModule.resolve(dir_1), "' not found!"));
            return files;
        }
        for (var _a = 0, _b = fs.readdirSync(dir_1); _a < _b.length; _a++) {
            var file = _b[_a];
            var fullPath = dir_1 + '/' + file;
            if (fs.lstatSync(fullPath).isDirectory())
                getFiles(fullPath).forEach(function (x) { return files.push(x); });
            else
                files.push(fullPath);
        }
    }
    return files;
}
var path = process.argv[2];
var dir = process.argv[3];
var extensions = process.argv[4];
if (!path) {
    path = "build/cssville.css";
}
if (!extensions) {
    var css = cssville_1.Cssville.getCss();
    fs.writeFile(path, css, function () { console.log("done: " + path); });
}
else {
    var classes = [];
    var exArray = extensions.split(",");
    var files = getFiles(dir).filter(function (fn) { return exArray.filter(function (e) { return fn.endsWith(e); }).length > 0; });
    files.forEach(function (file) {
        var content = fs.readFileSync(file).toString();
        var ext = pathModule.extname(file);
        var className = ext === ".jsx" || ext === ".tsx" ? "className=" : "class=";
        var pos = 0;
        var cssClasses = "";
        while (content.indexOf(className, pos) != -1) {
            pos = content.indexOf(className, pos) + className.length;
            if (content[pos] === '"') {
                var end = content.indexOf('"', pos + 1);
                if (end - pos > 1) {
                    cssClasses = content.substring(pos + 1, end);
                    cssClasses.split(" ").forEach(function (c) {
                        if (classes.indexOf(c) === -1) {
                            classes.push(c);
                        }
                    });
                }
                pos = end;
            }
        }
        console.log("File ".concat(file, " processed"));
    });
    var css = cssville_1.Cssville.getCss(classes);
    fs.writeFile(path, css, function () {
        console.log("Done: '".concat(path, "' with pattern '").concat(extensions, "' for dir '").concat(dir, "'"));
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYixrQkFBa0I7QUFDbEIsU0FBUyxtQkFBTyxDQUFDLGNBQUk7QUFDckIsaUJBQWlCLG1CQUFPLENBQUMscUNBQVk7QUFDckMsaUJBQWlCLG1CQUFPLENBQUMsa0JBQU07QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9CQUFvQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsZ0JBQWdCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCx1QkFBdUI7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywrQkFBK0I7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQscUNBQXFDLHdCQUF3QixlQUFlO0FBQ2pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvR2VuZXJhdG9yQmFzZS50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9jc3N2aWxsZS50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9kYXRhL2Nzc0NsYXNzRGF0YS50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL2FsaWduSXRlbXNHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9iYWNrZ3JvdW5kQ29sb3JHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9ib3JkZXJSYWRpdXNHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9jb2xvckdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL2N1cnNvckdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL2Rpc3BsYXlHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9mbGV4RGlyZWN0aW9uR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvZmxleEdyb3dHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9mbGV4U2hyaW5rR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvZmxleFdyYXBHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9mbG9hdEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL2ZvbnRTaXplR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvZm9udFdlaWdodEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL2hlaWdodEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL2p1c3RpZnlDb250ZW50R2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvbWFyZ2luR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvcGFkZGluZ0dlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL3Bvc2l0aW9uR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvdGV4dEFsaWduR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvdGV4dERlY29yYXRpb25HZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy93aGl0ZVNwYWNlR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvd2lkdGhHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy93b3JkQnJlYWtHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImZzXCIiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly9jc3N2aWxsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5HZW5lcmF0b3JCYXNlID0gdm9pZCAwO1xyXG52YXIgR2VuZXJhdG9yQmFzZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdlbmVyYXRvckJhc2UoKSB7XHJcbiAgICAgICAgdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuY3NzRGF0YSA9IFtdO1xyXG4gICAgfVxyXG4gICAgR2VuZXJhdG9yQmFzZS5wcm90b3R5cGUuZ2VuZXJhdGUgPSBmdW5jdGlvbiAocHJlZml4LCBjbGFzc2VzKSB7XHJcbiAgICAgICAgaWYgKHByZWZpeCA9PT0gdm9pZCAwKSB7IHByZWZpeCA9IFwiXCI7IH1cclxuICAgICAgICBpZiAoY2xhc3NlcyA9PT0gdm9pZCAwKSB7IGNsYXNzZXMgPSBbXTsgfVxyXG4gICAgICAgIHZhciBjc3NQYXJ0ID0gXCJcIjtcclxuICAgICAgICB0aGlzLmNzc0RhdGEuZm9yRWFjaChmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBjc3NQYXJ0ICs9IGRhdGEuZ2V0Q3NzKHByZWZpeCwgY2xhc3Nlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGNzc1BhcnQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdlbmVyYXRvckJhc2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuR2VuZXJhdG9yQmFzZSA9IEdlbmVyYXRvckJhc2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkNzc3ZpbGxlID0gdm9pZCAwO1xyXG52YXIgcGFkZGluZ0dlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy9wYWRkaW5nR2VuZXJhdG9yXCIpO1xyXG52YXIgbWFyZ2luR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL21hcmdpbkdlbmVyYXRvclwiKTtcclxudmFyIGRpc3BsYXlHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvZGlzcGxheUdlbmVyYXRvclwiKTtcclxudmFyIGZsZXhEaXJlY3Rpb25HZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvZmxleERpcmVjdGlvbkdlbmVyYXRvclwiKTtcclxudmFyIGZsZXhHcm93R2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2ZsZXhHcm93R2VuZXJhdG9yXCIpO1xyXG52YXIgZmxleFdyYXBHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvZmxleFdyYXBHZW5lcmF0b3JcIik7XHJcbnZhciBmbGV4U2hyaW5rR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2ZsZXhTaHJpbmtHZW5lcmF0b3JcIik7XHJcbnZhciBmbG9hdEdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy9mbG9hdEdlbmVyYXRvclwiKTtcclxudmFyIGZvbnRXZWlnaHRHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvZm9udFdlaWdodEdlbmVyYXRvclwiKTtcclxudmFyIHdpZHRoR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL3dpZHRoR2VuZXJhdG9yXCIpO1xyXG52YXIgZm9udFNpemVHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvZm9udFNpemVHZW5lcmF0b3JcIik7XHJcbnZhciBwb3NpdGlvbkdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy9wb3NpdGlvbkdlbmVyYXRvclwiKTtcclxudmFyIGFsaWduSXRlbXNHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvYWxpZ25JdGVtc0dlbmVyYXRvclwiKTtcclxudmFyIGp1c3RpZnlDb250ZW50R2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2p1c3RpZnlDb250ZW50R2VuZXJhdG9yXCIpO1xyXG52YXIgdGV4dERlY29yYXRpb25HZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvdGV4dERlY29yYXRpb25HZW5lcmF0b3JcIik7XHJcbnZhciBoZWlnaHRHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvaGVpZ2h0R2VuZXJhdG9yXCIpO1xyXG52YXIgY29sb3JHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvY29sb3JHZW5lcmF0b3JcIik7XHJcbnZhciBib3JkZXJSYWRpdXNHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvYm9yZGVyUmFkaXVzR2VuZXJhdG9yXCIpO1xyXG52YXIgY3Vyc29yR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2N1cnNvckdlbmVyYXRvclwiKTtcclxudmFyIGJhY2tncm91bmRDb2xvckdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy9iYWNrZ3JvdW5kQ29sb3JHZW5lcmF0b3JcIik7XHJcbnZhciB0ZXh0QWxpZ25HZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvdGV4dEFsaWduR2VuZXJhdG9yXCIpO1xyXG52YXIgd29yZEJyZWFrR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL3dvcmRCcmVha0dlbmVyYXRvclwiKTtcclxudmFyIHdoaXRlU3BhY2VHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvd2hpdGVTcGFjZUdlbmVyYXRvclwiKTtcclxudmFyIENzc3ZpbGxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ3NzdmlsbGUoKSB7XHJcbiAgICB9XHJcbiAgICBDc3N2aWxsZS5nZXRDc3MgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xyXG4gICAgICAgIGlmIChjbGFzc2VzID09PSB2b2lkIDApIHsgY2xhc3NlcyA9IFtdOyB9XHJcbiAgICAgICAgdmFyIGNzcyA9IFwiXCI7XHJcbiAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBDc3N2aWxsZS5nZW5lcmF0b3JzLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIHZhciBnID0gQ3NzdmlsbGUuZ2VuZXJhdG9yc1t4XTtcclxuICAgICAgICAgICAgdmFyIGNzc1BhcnQgPSBnLmdlbmVyYXRlKFwiXCIsIGNsYXNzZXMpO1xyXG4gICAgICAgICAgICBjc3MgKz0gY3NzUGFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcmVmaXhWYWx1ZU1hcC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBpbm5lckNzcyA9IFwiXCI7XHJcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBrZXk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgQ3NzdmlsbGUuZ2VuZXJhdG9ycy5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGcgPSBDc3N2aWxsZS5nZW5lcmF0b3JzW3hdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNzc1BhcnRGb3JQcmVmaXggPSBnLmdlbmVyYXRlKHByZWZpeCwgY2xhc3Nlcyk7XHJcbiAgICAgICAgICAgICAgICBpbm5lckNzcyArPSBjc3NQYXJ0Rm9yUHJlZml4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNzcyArPSBcIkBtZWRpYSAobWF4LXdpZHRoOiBcIi5jb25jYXQodmFsdWUsIFwiKSB7IFwiKS5jb25jYXQoaW5uZXJDc3MsIFwifSBcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGNzcztcclxuICAgIH07XHJcbiAgICBDc3N2aWxsZS5wcmVmaXhWYWx1ZU1hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgIFtcInhsXCIsIFwiMTI4MHB4XCJdLFxyXG4gICAgICAgIFtcImxnXCIsIFwiMTAxMnB4XCJdLFxyXG4gICAgICAgIFtcIm1kXCIsIFwiNzY4cHhcIl0sXHJcbiAgICAgICAgW1wic21cIiwgXCI1NDRweFwiXSxcclxuICAgICAgICBbXCJ4c1wiLCBcIjMyMHB4XCJdLFxyXG4gICAgXSk7XHJcbiAgICBDc3N2aWxsZS5nZW5lcmF0b3JzID0gW1xyXG4gICAgICAgIG5ldyBhbGlnbkl0ZW1zR2VuZXJhdG9yXzEuQWxpZ25JdGVtc0dlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyBib3JkZXJSYWRpdXNHZW5lcmF0b3JfMS5Cb3JkZXJSYWRpdXNHZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgYmFja2dyb3VuZENvbG9yR2VuZXJhdG9yXzEuQmFja2dyb3VuZENvbG9yR2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IGNvbG9yR2VuZXJhdG9yXzEuQ29sb3JHZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgY3Vyc29yR2VuZXJhdG9yXzEuQ3Vyc29yR2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IHBhZGRpbmdHZW5lcmF0b3JfMS5QYWRkaW5nR2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IG1hcmdpbkdlbmVyYXRvcl8xLk1hcmdpbkdlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyBkaXNwbGF5R2VuZXJhdG9yXzEuRGlzcGxheUdlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyBmbGV4RGlyZWN0aW9uR2VuZXJhdG9yXzEuRmxleERpcmVjdGlvbkdlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyBmbGV4R3Jvd0dlbmVyYXRvcl8xLkZsZXhHcm93R2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IGZsZXhTaHJpbmtHZW5lcmF0b3JfMS5GbGV4U2hyaW5rR2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IGZsZXhXcmFwR2VuZXJhdG9yXzEuRmxleFdyYXBHZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgZmxvYXRHZW5lcmF0b3JfMS5GbG9hdEdlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyBmb250U2l6ZUdlbmVyYXRvcl8xLkZvbnRTaXplR2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IGZvbnRXZWlnaHRHZW5lcmF0b3JfMS5Gb250V2VpZ2h0R2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IGhlaWdodEdlbmVyYXRvcl8xLkhlaWdodEdlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyBqdXN0aWZ5Q29udGVudEdlbmVyYXRvcl8xLkp1c3RpZnlDb250ZW50R2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IHdpZHRoR2VuZXJhdG9yXzEuV2lkdGhHZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgd2hpdGVTcGFjZUdlbmVyYXRvcl8xLldoaXRlU3BhY2VHZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgd29yZEJyZWFrR2VuZXJhdG9yXzEuV29yZEJyZWFrR2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IHRleHRBbGlnbkdlbmVyYXRvcl8xLlRleHRBbGlnbkdlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyB0ZXh0RGVjb3JhdGlvbkdlbmVyYXRvcl8xLlRleHREZWNvcmF0aW9uR2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IHBvc2l0aW9uR2VuZXJhdG9yXzEuUG9zaXRpb25HZW5lcmF0b3IoKSxcclxuICAgIF07XHJcbiAgICByZXR1cm4gQ3NzdmlsbGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ3NzdmlsbGUgPSBDc3N2aWxsZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuQ3NzQ2xhc3NEYXRhID0gdm9pZCAwO1xyXG52YXIgQ3NzQ2xhc3NEYXRhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ3NzQ2xhc3NEYXRhKGNsYXNzTmFtZSwgY3NzUHJvcGVydGllcywgcG9zdGZpeEFycmF5LCBwb3N0Zml4VmFsdWVzTWFwKSB7XHJcbiAgICAgICAgaWYgKHBvc3RmaXhWYWx1ZXNNYXAgPT09IHZvaWQgMCkgeyBwb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcCgpOyB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgICAgICB0aGlzLmNzc1Byb3BlcnRpZXMgPSBjc3NQcm9wZXJ0aWVzO1xyXG4gICAgICAgIHRoaXMucG9zdGZpeFZhbHVlc01hcCA9IHBvc3RmaXhWYWx1ZXNNYXA7XHJcbiAgICAgICAgdGhpcy5jc3NQYXJ0cyA9IG5ldyBNYXAoKTtcclxuICAgICAgICBpZiAocG9zdGZpeEFycmF5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcG9zdGZpeEFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAuc2V0KGVsZW1lbnQsIFtlbGVtZW50XSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBvc3RmaXhWYWx1ZXNNYXAuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICB2YXIgcG9zdGZpeCA9IGtleTtcclxuICAgICAgICAgICAgdmFyIGlubmVyUHJvcGVydGllcyA9IFwiXCI7XHJcbiAgICAgICAgICAgIF90aGlzLmNzc1Byb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiAoY3NzUHJvcGVydHkpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbm5lclByb3BlcnRpZXMgKz0gXCJcIi5jb25jYXQoY3NzUHJvcGVydHksIFwiOiBcIikuY29uY2F0KHYsIFwiOyBcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLmNzc1BhcnRzLnNldChcIlwiLmNvbmNhdChfdGhpcy5jbGFzc05hbWUsIFwiLVwiKS5jb25jYXQocG9zdGZpeCksIGlubmVyUHJvcGVydGllcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBDc3NDbGFzc0RhdGEucHJvdG90eXBlLmdldENzcyA9IGZ1bmN0aW9uIChwcmVmaXgsIGNsYXNzZXMpIHtcclxuICAgICAgICBpZiAocHJlZml4ID09PSB2b2lkIDApIHsgcHJlZml4ID0gXCJcIjsgfVxyXG4gICAgICAgIHZhciBjc3MgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuY3NzUGFydHMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gXCJcIi5jb25jYXQocHJlZml4ID09PSBcIlwiID8gXCJcIiA6IFwiXCIuY29uY2F0KHByZWZpeCwgXCItXCIpKS5jb25jYXQoa2V5KTtcclxuICAgICAgICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjc3MgKz0gXCIuXCIuY29uY2F0KGNsYXNzTmFtZSwgXCIge1wiKS5jb25jYXQodmFsdWUsIFwifSBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCAmJiBjbGFzc2VzLmluZGV4T2YoY2xhc3NOYW1lKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjc3MgKz0gXCIuXCIuY29uY2F0KGNsYXNzTmFtZSwgXCIge1wiKS5jb25jYXQodmFsdWUsIFwifSBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gY3NzO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDc3NDbGFzc0RhdGE7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ3NzQ2xhc3NEYXRhID0gQ3NzQ2xhc3NEYXRhO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuQWxpZ25JdGVtc0dlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBBbGlnbkl0ZW1zR2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEFsaWduSXRlbXNHZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBBbGlnbkl0ZW1zR2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1wiZmlyc3QtYmFzZWxpbmVcIiwgW1wiZmlyc3QgYmFzZWxpbmVcIl1dLFxyXG4gICAgICAgICAgICBbXCJsYXN0LWJhc2VsaW5lXCIsIFtcImxhc3QgYmFzZWxpbmVcIl1dLFxyXG4gICAgICAgICAgICBbXCJzYWZlLWNlbnRlclwiLCBbXCJzYWZlIGNlbnRlclwiXV0sXHJcbiAgICAgICAgICAgIFtcInVuc2FmZS1jZW50ZXJcIiwgW1widW5zYWZlIGNlbnRlclwiXV0sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMubGlzdCA9IFtcIm5vcm1hbFwiLCBcInN0cmV0Y2hcIiwgXCJjZW50ZXJcIiwgXCJzdGFydFwiLCBcImZsZXgtc3RhcnRcIiwgXCJlbmRcIiwgXCJmbGV4LWVuZFwiLCBcImJhc2VsaW5lXCIsIFwiaW5oZXJpdFwiLCBcImluaXRpYWxcIiwgXCJyZXZlcnRcIiwgXCJ1bnNldFwiXTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiYWxpZ24taXRlbXNcIiwgW1wiLW1zLWFsaWduLWl0ZW1zXCIsIFwiLW8tYWxpZ24taXRlbXNcIiwgXCItd2Via2l0LWFsaWduLWl0ZW1zXCIsIFwiYWxpZ24taXRlbXNcIl0sIF90aGlzLmxpc3QsIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQWxpZ25JdGVtc0dlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLkFsaWduSXRlbXNHZW5lcmF0b3IgPSBBbGlnbkl0ZW1zR2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuQmFja2dyb3VuZENvbG9yR2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIEJhY2tncm91bmRDb2xvckdlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhCYWNrZ3JvdW5kQ29sb3JHZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBCYWNrZ3JvdW5kQ29sb3JHZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuZmxhdFZhbHVlcyA9IFtcImJsYWNrXCIsIFwid2hpdGVcIiwgXCJ0cmFuc3BhcmVudFwiLCBcImluaGVyaXRcIiwgXCJpbml0aWFsXCIsIFwicmV2ZXJ0XCIsIFwidW5zZXRcIl07XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImJnLWNvbG9yXCIsIFtcImJhY2tncm91bmQtY29sb3JcIl0sIF90aGlzLmZsYXRWYWx1ZXMpXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQmFja2dyb3VuZENvbG9yR2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuQmFja2dyb3VuZENvbG9yR2VuZXJhdG9yID0gQmFja2dyb3VuZENvbG9yR2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuQm9yZGVyUmFkaXVzR2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIEJvcmRlclJhZGl1c0dlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhCb3JkZXJSYWRpdXNHZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBCb3JkZXJSYWRpdXNHZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCIwXCIsIFtcIjBweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjFcIiwgW1wiNHB4XCJdXSxcclxuICAgICAgICAgICAgW1wiMlwiLCBbXCI4cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCIzXCIsIFtcIjE2cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCI0XCIsIFtcIjMycHhcIl1dLFxyXG4gICAgICAgICAgICBbXCI1XCIsIFtcIjY0cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCI1MHBcIiwgW1wiNTAlXCJdXSxcclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5saXN0ID0gW1wiaW5oZXJpdFwiLCBcImluaXRpYWxcIiwgXCJyZXZlcnRcIiwgXCJ1bnNldFwiXTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiYnJcIiwgW1wiLW1zLWJvcmRlci1yYWRpdXNcIiwgXCJib3JkZXItcmFkaXVzXCJdLCBfdGhpcy5saXN0LCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImJyLXRvcC1sZWZ0XCIsIFtcIi1tcy1ib3JkZXItdG9wLWxlZnQtcmFkaXVzXCIsIFwiYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c1wiXSwgX3RoaXMubGlzdCwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJici10b3AtcmlnaHRcIiwgW1wiLW1zLWJvcmRlci10b3AtcmlnaHQtcmFkaXVzXCIsIFwiYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNcIl0sIF90aGlzLmxpc3QsIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiYnItYm90dG9tLXJpZ2h0XCIsIFtcIi1tcy1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c1wiLCBcImJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzXCJdLCBfdGhpcy5saXN0LCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImJyLWJvdHRvbS1sZWZ0XCIsIFtcIi1tcy1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzXCIsIFwiYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c1wiXSwgX3RoaXMubGlzdCwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBCb3JkZXJSYWRpdXNHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5Cb3JkZXJSYWRpdXNHZW5lcmF0b3IgPSBCb3JkZXJSYWRpdXNHZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5Db2xvckdlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBDb2xvckdlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhDb2xvckdlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIENvbG9yR2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmxpc3QgPSBbXCJibGFja1wiLCBcIndoaXRlXCIsIFwidHJhbnNwYXJlbnRcIiwgXCJpbmhlcml0XCIsIFwiaW5pdGlhbFwiLCBcInJldmVydFwiLCBcInVuc2V0XCJdO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJjb2xvclwiLCBbXCJjb2xvclwiXSwgX3RoaXMubGlzdClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBDb2xvckdlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLkNvbG9yR2VuZXJhdG9yID0gQ29sb3JHZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5DdXJzb3JHZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgQ3Vyc29yR2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEN1cnNvckdlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEN1cnNvckdlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5saXN0ID0gW1wiY2VsbFwiLCBcImhlbHBcIiwgXCJjcm9zc2hhaXJcIiwgXCJ0ZXh0XCIsIFwid2FpdFwiLCBcImNvcHlcIiwgXCJtb3ZlXCIsIFwiZ3JhYlwiLCBcImdyYWJiaW5nXCIsIFwibm90LWFsbG93ZWRcIiwgXCJwb2ludGVyXCIsIFwicHJvZ3Jlc3NcIiwgXCJ6b29tLWluXCIsIFwiem9vbS1vdXRcIiwgXCJkZWZhdWx0XCJdO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJjdXJzb3JcIiwgW1wiY3Vyc29yXCJdLCBfdGhpcy5saXN0KVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEN1cnNvckdlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLkN1cnNvckdlbmVyYXRvciA9IEN1cnNvckdlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkRpc3BsYXlHZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgRGlzcGxheUdlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhEaXNwbGF5R2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRGlzcGxheUdlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcImJsb2NrXCIsIFtcImJsb2NrXCJdXSxcclxuICAgICAgICAgICAgW1wiaW5saW5lXCIsIFtcImlubGluZVwiXV0sXHJcbiAgICAgICAgICAgIFtcImlubGluZS1ibG9ja1wiLCBbXCJpbmxpbmUtYmxvY2tcIl1dLFxyXG4gICAgICAgICAgICBbXCJmbGV4XCIsIFtcImZsZXhcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmxpbmUtZmxleFwiLCBbXCJpbmxpbmUtZmxleFwiXV0sXHJcbiAgICAgICAgICAgIFtcImdyaWRcIiwgW1wiZ3JpZFwiXV0sXHJcbiAgICAgICAgICAgIFtcImlubGluZS1ncmlkXCIsIFtcImlubGluZS1ncmlkXCJdXSxcclxuICAgICAgICAgICAgW1wiZmxvdy1yb290XCIsIFtcImZsb3ctcm9vdFwiXV0sXHJcbiAgICAgICAgICAgIFtcIm5vbmVcIiwgW1wibm9uZVwiXV0sXHJcbiAgICAgICAgICAgIFtcImNvbnRlbnRzXCIsIFtcImNvbnRlbnRzXCJdXSxcclxuICAgICAgICAgICAgW1wiYmxvY2stZmxvd1wiLCBbXCJibG9jayBmbG93XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5saW5lLWZsb3dcIiwgW1wiaW5saW5lIGZsb3dcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmxpbmUtZmxvdy1yb290XCIsIFtcImlubGluZSBmbG93LXJvb3RcIl1dLFxyXG4gICAgICAgICAgICBbXCJibG9jay1mbGV4XCIsIFtcImJsb2NrIGZsZXhcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmxpbmUtZmxleFwiLCBbXCJpbmxpbmUgZmxleFwiXV0sXHJcbiAgICAgICAgICAgIFtcImJsb2NrLWdyaWRcIiwgW1wiYmxvY2sgZ3JpZFwiXV0sXHJcbiAgICAgICAgICAgIFtcImlubGluZS1ncmlkXCIsIFtcImlubGluZSBncmlkXCJdXSxcclxuICAgICAgICAgICAgW1wiYmxvY2stZmxvdy1yb290XCIsIFtcImJsb2NrIGZsb3ctcm9vdFwiXV0sXHJcbiAgICAgICAgICAgIFtcInRhYmxlXCIsIFtcInRhYmxlXCJdXSxcclxuICAgICAgICAgICAgW1widGFibGUtcm93XCIsIFtcInRhYmxlLXJvd1wiXV0sXHJcbiAgICAgICAgICAgIFtcInRhYmxlLWNvbHVtblwiLCBbXCJ0YWJsZS1jb2x1bW5cIl1dLFxyXG4gICAgICAgICAgICBbXCJ0YWJsZS1jZWxsXCIsIFtcInRhYmxlLWNlbGxcIl1dLFxyXG4gICAgICAgICAgICBbXCJsaXN0LWl0ZW1cIiwgW1wibGlzdC1pdGVtXCJdXSxcclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5saXN0ID0gW1wiaW5oZXJpdFwiLCBcImluaXRpYWxcIiwgXCJyZXZlcnRcIiwgXCJ1bnNldFwiXTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiZFwiLCBbXCJkaXNwbGF5XCJdLCBfdGhpcy5saXN0LCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIERpc3BsYXlHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5EaXNwbGF5R2VuZXJhdG9yID0gRGlzcGxheUdlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkZsZXhEaXJlY3Rpb25HZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgRmxleERpcmVjdGlvbkdlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhGbGV4RGlyZWN0aW9uR2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRmxleERpcmVjdGlvbkdlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcInJvd1wiLCBbXCJyb3dcIl1dLFxyXG4gICAgICAgICAgICBbXCJyb3ctcmV2ZXJzZVwiLCBbXCJyb3ctcmV2ZXJzZVwiXV0sXHJcbiAgICAgICAgICAgIFtcImNvbHVtblwiLCBbXCJjb2x1bW5cIl1dLFxyXG4gICAgICAgICAgICBbXCJjb2x1bW4tcmV2ZXJzZVwiLCBbXCJjb2x1bW4tcmV2ZXJzZVwiXV0sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMubGlzdCA9IFtcImluaGVyaXRcIiwgXCJpbml0aWFsXCIsIFwicmV2ZXJ0XCIsIFwidW5zZXRcIl07XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImZsZXgtZGlyZWN0aW9uXCIsIFtcImZsZXgtZGlyZWN0aW9uXCJdLCBfdGhpcy5saXN0LCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEZsZXhEaXJlY3Rpb25HZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5GbGV4RGlyZWN0aW9uR2VuZXJhdG9yID0gRmxleERpcmVjdGlvbkdlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkZsZXhHcm93R2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIEZsZXhHcm93R2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZsZXhHcm93R2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRmxleEdyb3dHZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCIwXCIsIFtcIjBcIl1dLFxyXG4gICAgICAgICAgICBbXCIxXCIsIFtcIjFcIl1dLFxyXG4gICAgICAgICAgICBbXCIyXCIsIFtcIjJcIl1dLFxyXG4gICAgICAgICAgICBbXCIzXCIsIFtcIjNcIl1dLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmxpc3QgPSBbXCJpbmhlcml0XCIsIFwiaW5pdGlhbFwiLCBcInJldmVydFwiLCBcInVuc2V0XCJdO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJmbGV4LWdyb3dcIiwgW1wiLW8tZmxleC1ncm93XCIsIFwiLXdlYmtpdC1mbGV4LWdyb3dcIiwgXCJmbGV4LWdyb3dcIl0sIF90aGlzLmxpc3QsIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRmxleEdyb3dHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5GbGV4R3Jvd0dlbmVyYXRvciA9IEZsZXhHcm93R2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuRmxleFNocmlua0dlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBGbGV4U2hyaW5rR2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZsZXhTaHJpbmtHZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGbGV4U2hyaW5rR2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1wiMFwiLCBbXCIwXCJdXSxcclxuICAgICAgICAgICAgW1wiMVwiLCBbXCIxXCJdXSxcclxuICAgICAgICAgICAgW1wiMlwiLCBbXCIyXCJdXSxcclxuICAgICAgICAgICAgW1wiM1wiLCBbXCIzXCJdXSxcclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5saXN0ID0gW1wiaW5oZXJpdFwiLCBcImluaXRpYWxcIiwgXCJyZXZlcnRcIiwgXCJ1bnNldFwiXTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiZmxleC1zaHJpbmtcIiwgW1wiLW8tZmxleC1zaHJpbmtcIiwgXCItd2Via2l0LWZsZXgtc2hyaW5rXCIsIFwiZmxleC1zaHJpbmtcIl0sIF90aGlzLmxpc3QsIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRmxleFNocmlua0dlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLkZsZXhTaHJpbmtHZW5lcmF0b3IgPSBGbGV4U2hyaW5rR2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuRmxleFdyYXBHZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgRmxleFdyYXBHZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRmxleFdyYXBHZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGbGV4V3JhcEdlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcIm5vd3JhcFwiLCBbXCJub3dyYXBcIl1dLFxyXG4gICAgICAgICAgICBbXCJ3cmFwXCIsIFtcIndyYXBcIl1dLFxyXG4gICAgICAgICAgICBbXCJ3cmFwLXJldmVyc2VcIiwgW1wid3JhcC1yZXZlcnNlXCJdXSxcclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5saXN0ID0gW1wiaW5oZXJpdFwiLCBcImluaXRpYWxcIiwgXCJyZXZlcnRcIiwgXCJ1bnNldFwiXTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiZmxleC13cmFwXCIsIFtcIi1tb3otZmxleC13cmFwXCIsIFwiLW1zLWZsZXgtd3JhcFwiLCBcIi1vLWZsZXgtd3JhcFwiLCBcIi13ZWJraXQtZmxleC13cmFwXCIsIFwiZmxleC13cmFwXCJdLCBfdGhpcy5saXN0LCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEZsZXhXcmFwR2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuRmxleFdyYXBHZW5lcmF0b3IgPSBGbGV4V3JhcEdlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkZsb2F0R2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIEZsb2F0R2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZsb2F0R2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRmxvYXRHZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCJsZWZ0XCIsIFtcImxlZnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJyaWdodFwiLCBbXCJyaWdodFwiXV0sXHJcbiAgICAgICAgICAgIFtcIm5vbmVcIiwgW1wibm9uZVwiXV0sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMubGlzdCA9IFtcImluaGVyaXRcIiwgXCJpbml0aWFsXCIsIFwicmV2ZXJ0XCIsIFwidW5zZXRcIl07XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImZsb2F0XCIsIFtcImZsb2F0XCJdLCBfdGhpcy5saXN0LCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEZsb2F0R2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuRmxvYXRHZW5lcmF0b3IgPSBGbG9hdEdlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkZvbnRTaXplR2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIEZvbnRTaXplR2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZvbnRTaXplR2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRm9udFNpemVHZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCJ4eC1zbWFsbFwiLCBbXCJ4eC1zbWFsbFwiXV0sXHJcbiAgICAgICAgICAgIFtcIngtc21hbGxcIiwgW1wieC1zbWFsbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInNtYWxsXCIsIFtcInNtYWxsXCJdXSxcclxuICAgICAgICAgICAgW1wibWVkaXVtXCIsIFtcIm1lZGl1bVwiXV0sXHJcbiAgICAgICAgICAgIFtcImxhcmdlXCIsIFtcImxhcmdlXCJdXSxcclxuICAgICAgICAgICAgW1wieC1sYXJnZVwiLCBbXCJ4LWxhcmdlXCJdXSxcclxuICAgICAgICAgICAgW1wieHgtbGFyZ2VcIiwgW1wieHgtbGFyZ2VcIl1dLFxyXG4gICAgICAgICAgICBbXCJ4eHgtbGFyZ2VcIiwgW1wiNDhweFwiLCBcInh4eC1sYXJnZVwiXV0sXHJcbiAgICAgICAgICAgIFtcInNtYWxsZXJcIiwgW1wic21hbGxlclwiXV0sXHJcbiAgICAgICAgICAgIFtcImxhcmdlclwiLCBbXCJsYXJnZXJcIl1dLFxyXG4gICAgICAgICAgICBbXCIxcmVtXCIsIFtcIjFyZW1cIl1dLFxyXG4gICAgICAgICAgICBbXCIycmVtXCIsIFtcIjJyZW1cIl1dLFxyXG4gICAgICAgICAgICBbXCIzcmVtXCIsIFtcIjNyZW1cIl1dLFxyXG4gICAgICAgICAgICBbXCI0cmVtXCIsIFtcIjRyZW1cIl1dLFxyXG4gICAgICAgICAgICBbXCI1cmVtXCIsIFtcIjVyZW1cIl1dLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmxpc3QgPSBbXCJpbmhlcml0XCIsIFwiaW5pdGlhbFwiLCBcInJldmVydFwiLCBcInVuc2V0XCJdO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJmc1wiLCBbXCJmb250LXNpemVcIl0sIF90aGlzLmxpc3QsIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRm9udFNpemVHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5Gb250U2l6ZUdlbmVyYXRvciA9IEZvbnRTaXplR2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuRm9udFdlaWdodEdlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBGb250V2VpZ2h0R2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZvbnRXZWlnaHRHZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGb250V2VpZ2h0R2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1wibm9ybWFsXCIsIFtcIm5vcm1hbFwiXV0sXHJcbiAgICAgICAgICAgIFtcImJvbGRcIiwgW1wiYm9sZFwiXV0sXHJcbiAgICAgICAgICAgIFtcImxpZ2h0ZXJcIiwgW1wibGlnaHRlclwiXV0sXHJcbiAgICAgICAgICAgIFtcImJvbGRlclwiLCBbXCJib2xkZXJcIl1dLFxyXG4gICAgICAgICAgICBbXCIxMDBcIiwgW1wiMTAwXCJdXSxcclxuICAgICAgICAgICAgW1wiMjAwXCIsIFtcIjIwMFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjMwMFwiLCBbXCIzMDBcIl1dLFxyXG4gICAgICAgICAgICBbXCI0MDBcIiwgW1wiNDAwXCJdXSxcclxuICAgICAgICAgICAgW1wiNTAwXCIsIFtcIjUwMFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjYwMFwiLCBbXCI2MDBcIl1dLFxyXG4gICAgICAgICAgICBbXCI3MDBcIiwgW1wiNzAwXCJdXSxcclxuICAgICAgICAgICAgW1wiODAwXCIsIFtcIjgwMFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjkwMFwiLCBbXCI5MDBcIl1dLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmxpc3QgPSBbXCJpbmhlcml0XCIsIFwiaW5pdGlhbFwiLCBcInJldmVydFwiLCBcInVuc2V0XCJdO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJmd1wiLCBbXCJmb250LXdlaWdodFwiXSwgX3RoaXMubGlzdCwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBGb250V2VpZ2h0R2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuRm9udFdlaWdodEdlbmVyYXRvciA9IEZvbnRXZWlnaHRHZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5IZWlnaHRHZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgSGVpZ2h0R2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEhlaWdodEdlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEhlaWdodEdlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcImF1dG9cIiwgW1wiYXV0b1wiXV0sXHJcbiAgICAgICAgICAgIFtcIm1heC1jb250ZW50XCIsIFtcIm1heC1jb250ZW50XCJdXSxcclxuICAgICAgICAgICAgW1wibWluLWNvbnRlbnRcIiwgW1wibWluLWNvbnRlbnRcIl1dLFxyXG4gICAgICAgICAgICBbXCIxNnB4XCIsIFtcIjE2cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCIyNHB4XCIsIFtcIjI0cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCIzMnB4XCIsIFtcIjMycHhcIl1dLFxyXG4gICAgICAgICAgICBbXCI0OHB4XCIsIFtcIjQ4cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCI2NHB4XCIsIFtcIjY0cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCIxMDBcIiwgW1wiMTAwJVwiXV0sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMubGlzdCA9IFtcImluaGVyaXRcIiwgXCJpbml0aWFsXCIsIFwicmV2ZXJ0XCIsIFwidW5zZXRcIl07XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImhcIiwgW1wiaGVpZ2h0XCJdLCBfdGhpcy5saXN0LCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcIm1heC1oXCIsIFtcIm1heC1oZWlnaHRcIl0sIF90aGlzLmxpc3QsIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwibWluLWhcIiwgW1wibWluLWhlaWdodFwiXSwgX3RoaXMubGlzdCwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBIZWlnaHRHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5IZWlnaHRHZW5lcmF0b3IgPSBIZWlnaHRHZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5KdXN0aWZ5Q29udGVudEdlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBKdXN0aWZ5Q29udGVudEdlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhKdXN0aWZ5Q29udGVudEdlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEp1c3RpZnlDb250ZW50R2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1wiY2VudGVyXCIsIFtcImNlbnRlclwiXV0sXHJcbiAgICAgICAgICAgIFtcInN0YXJ0XCIsIFtcInN0YXJ0XCJdXSxcclxuICAgICAgICAgICAgW1wiZmxleC1zdGFydFwiLCBbXCJmbGV4LXN0YXJ0XCJdXSxcclxuICAgICAgICAgICAgW1wiZW5kXCIsIFtcImVuZFwiXV0sXHJcbiAgICAgICAgICAgIFtcImZsZXgtZW5kXCIsIFtcImZsZXgtZW5kXCJdXSxcclxuICAgICAgICAgICAgW1wibm9ybWFsXCIsIFtcIm5vcm1hbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInNwYWNlLWJldHdlZW5cIiwgW1wic3BhY2UtYmV0d2VlblwiXV0sXHJcbiAgICAgICAgICAgIFtcInNwYWNlLWFyb3VuZFwiLCBbXCJzcGFjZS1hcm91bmRcIl1dLFxyXG4gICAgICAgICAgICBbXCJzcGFjZS1ldmVubHlcIiwgW1wic3BhY2UtZXZlbmx5XCJdXSxcclxuICAgICAgICAgICAgW1wic3RyZXRjaFwiLCBbXCJzdHJldGNoXCJdXSxcclxuICAgICAgICAgICAgW1wic2FmZS1jZW50ZXJcIiwgW1wic2FmZSBjZW50ZXJcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNhZmUtY2VudGVyXCIsIFtcInVuc2FmZSBjZW50ZXJcIl1dLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmxpc3QgPSBbXCJpbmhlcml0XCIsIFwiaW5pdGlhbFwiLCBcInJldmVydFwiLCBcInVuc2V0XCJdO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJqdXN0aWZ5LWNvbnRlbnRcIiwgW1wiLW8tanVzdGlmeS1jb250ZW50XCIsIFwiLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnRcIiwgXCJqdXN0aWZ5LWNvbnRlbnRcIl0sIF90aGlzLmxpc3QsIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSnVzdGlmeUNvbnRlbnRHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5KdXN0aWZ5Q29udGVudEdlbmVyYXRvciA9IEp1c3RpZnlDb250ZW50R2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuTWFyZ2luR2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIE1hcmdpbkdlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhNYXJnaW5HZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBNYXJnaW5HZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCIwXCIsIFtcIjBweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjFcIiwgW1wiNHB4XCJdXSxcclxuICAgICAgICAgICAgW1wiMlwiLCBbXCI4cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCIzXCIsIFtcIjE2cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCI0XCIsIFtcIjMycHhcIl1dLFxyXG4gICAgICAgICAgICBbXCI1XCIsIFtcIjY0cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCJhdXRvXCIsIFtcImF1dG9cIl1dLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmxpc3QgPSBbXCJpbmhlcml0XCIsIFwiaW5pdGlhbFwiLCBcInJldmVydFwiLCBcInVuc2V0XCJdO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJtXCIsIFtcIm1hcmdpblwiXSwgX3RoaXMubGlzdCwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJtdFwiLCBbXCJtYXJnaW4tdG9wXCJdLCBfdGhpcy5saXN0LCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcIm1iXCIsIFtcIm1hcmdpbi1ib3R0b21cIl0sIF90aGlzLmxpc3QsIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwibWxcIiwgW1wibWFyZ2luLWxlZnRcIl0sIF90aGlzLmxpc3QsIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwibXJcIiwgW1wibWFyZ2luLXJpZ2h0XCJdLCBfdGhpcy5saXN0LCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcIm14XCIsIFtcIm1hcmdpbi1sZWZ0XCIsIFwibWFyZ2luLXJpZ2h0XCJdLCBfdGhpcy5saXN0LCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcIm15XCIsIFtcIm1hcmdpbi10b3BcIiwgXCJtYXJnaW4tYm90dG9tXCJdLCBfdGhpcy5saXN0LCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBNYXJnaW5HZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5NYXJnaW5HZW5lcmF0b3IgPSBNYXJnaW5HZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5QYWRkaW5nR2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi8uLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgUGFkZGluZ0dlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhQYWRkaW5nR2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUGFkZGluZ0dlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcIjBcIiwgW1wiMHB4XCJdXSxcclxuICAgICAgICAgICAgW1wiMVwiLCBbXCI0cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCIyXCIsIFtcIjhweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjNcIiwgW1wiMTZweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjRcIiwgW1wiMzJweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjVcIiwgW1wiNjRweFwiXV0sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMubGlzdCA9IFtcImluaGVyaXRcIiwgXCJpbml0aWFsXCIsIFwicmV2ZXJ0XCIsIFwidW5zZXRcIl07XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcInBcIiwgW1wicGFkZGluZ1wiXSwgX3RoaXMubGlzdCwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJwdFwiLCBbXCJwYWRkaW5nLXRvcFwiXSwgX3RoaXMubGlzdCwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJwYlwiLCBbXCJwYWRkaW5nLWJvdHRvbVwiXSwgX3RoaXMubGlzdCwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJwbFwiLCBbXCJwYWRkaW5nLWxlZnRcIl0sIF90aGlzLmxpc3QsIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwicHJcIiwgW1wicGFkZGluZy1yaWdodFwiXSwgX3RoaXMubGlzdCwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJweFwiLCBbXCJwYWRkaW5nLWxlZnRcIiwgXCJwYWRkaW5nLXJpZ2h0XCJdLCBfdGhpcy5saXN0LCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcInB5XCIsIFtcInBhZGRpbmctdG9wXCIsIFwicGFkZGluZy1ib3R0b21cIl0sIF90aGlzLmxpc3QsIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFBhZGRpbmdHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5QYWRkaW5nR2VuZXJhdG9yID0gUGFkZGluZ0dlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLlBvc2l0aW9uR2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIFBvc2l0aW9uR2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFBvc2l0aW9uR2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUG9zaXRpb25HZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCJzdGF0aWNcIiwgW1wic3RhdGljXCJdXSxcclxuICAgICAgICAgICAgW1wicmVsYXRpdmVcIiwgW1wicmVsYXRpdmVcIl1dLFxyXG4gICAgICAgICAgICBbXCJhYnNvbHV0ZVwiLCBbXCJhYnNvbHV0ZVwiXV0sXHJcbiAgICAgICAgICAgIFtcImZpeGVkXCIsIFtcImZpeGVkXCJdXSxcclxuICAgICAgICAgICAgW1wic3RpY2t5XCIsIFtcInN0aWNreVwiXV0sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMubGlzdCA9IFtcImluaGVyaXRcIiwgXCJpbml0aWFsXCIsIFwicmV2ZXJ0XCIsIFwidW5zZXRcIl07XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcInBvc2l0aW9uXCIsIFtcInBvc2l0aW9uXCJdLCBfdGhpcy5saXN0LCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBQb3NpdGlvbkdlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLlBvc2l0aW9uR2VuZXJhdG9yID0gUG9zaXRpb25HZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5UZXh0QWxpZ25HZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgVGV4dEFsaWduR2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRleHRBbGlnbkdlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFRleHRBbGlnbkdlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcInVuZGVybGluZVwiLCBbXCJ1bmRlcmxpbmVcIl1dLFxyXG4gICAgICAgICAgICBbXCJvdmVybGluZVwiLCBbXCJvdmVybGluZVwiXV0sXHJcbiAgICAgICAgICAgIFtcIm5vbmVcIiwgW1wibm9uZVwiXV0sXHJcbiAgICAgICAgICAgIFtcInN0YXJ0XCIsIFtcInN0YXJ0XCJdXSxcclxuICAgICAgICAgICAgW1wiZW5kXCIsIFtcImVuZFwiXV0sXHJcbiAgICAgICAgICAgIFtcImxlZnRcIiwgW1wibGVmdFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJpZ2h0XCIsIFtcInJpZ2h0XCJdXSxcclxuICAgICAgICAgICAgW1wiY2VudGVyXCIsIFtcImNlbnRlclwiXV0sXHJcbiAgICAgICAgICAgIFtcImp1c3RpZnlcIiwgW1wianVzdGlmeVwiXV0sXHJcbiAgICAgICAgICAgIFtcImp1c3RpZnktYWxsXCIsIFtcImp1c3RpZnktYWxsXCJdXSxcclxuICAgICAgICAgICAgW1wibWF0Y2gtcGFyZW50XCIsIFtcIm1hdGNoLXBhcmVudFwiXV0sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMubGlzdCA9IFtcImluaGVyaXRcIiwgXCJpbml0aWFsXCIsIFwicmV2ZXJ0XCIsIFwidW5zZXRcIl07XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcInRleHQtYWxpZ25cIiwgW1widGV4dC1hbGlnblwiXSwgX3RoaXMubGlzdCwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBUZXh0QWxpZ25HZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5UZXh0QWxpZ25HZW5lcmF0b3IgPSBUZXh0QWxpZ25HZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5UZXh0RGVjb3JhdGlvbkdlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBUZXh0RGVjb3JhdGlvbkdlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUZXh0RGVjb3JhdGlvbkdlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFRleHREZWNvcmF0aW9uR2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1widW5kZXJsaW5lXCIsIFtcInVuZGVybGluZVwiXV0sXHJcbiAgICAgICAgICAgIFtcIm92ZXJsaW5lXCIsIFtcIm92ZXJsaW5lXCJdXSxcclxuICAgICAgICAgICAgW1wibm9uZVwiLCBbXCJub25lXCJdXSxcclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5saXN0ID0gW1wiaW5oZXJpdFwiLCBcImluaXRpYWxcIiwgXCJyZXZlcnRcIiwgXCJ1bnNldFwiXTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwidGV4dC1kZWNvcmF0aW9uXCIsIFtcInRleHQtZGVjb3JhdGlvblwiXSwgX3RoaXMubGlzdCwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBUZXh0RGVjb3JhdGlvbkdlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLlRleHREZWNvcmF0aW9uR2VuZXJhdG9yID0gVGV4dERlY29yYXRpb25HZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5XaGl0ZVNwYWNlR2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIFdoaXRlU3BhY2VHZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoV2hpdGVTcGFjZUdlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFdoaXRlU3BhY2VHZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCJub3dyYXBcIiwgW1wibm93cmFwXCJdXSxcclxuICAgICAgICAgICAgW1wicHJlXCIsIFtcInByZVwiXV0sXHJcbiAgICAgICAgICAgIFtcInByZS13cmFwXCIsIFtcInByZS13cmFwXCJdXSxcclxuICAgICAgICAgICAgW1wicHJlLWxpbmVcIiwgW1wicHJlLWxpbmVcIl1dLFxyXG4gICAgICAgICAgICBbXCJicmVhay1zcGFjZXNcIiwgW1wiYnJlYWstc3BhY2VzXCJdXVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmxpc3QgPSBbXCJub3JtYWxcIl07XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcIndoaXRlLXNwYWNlXCIsIFtcIndoaXRlLXNwYWNlXCJdLCBfdGhpcy5saXN0LCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFdoaXRlU3BhY2VHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5XaGl0ZVNwYWNlR2VuZXJhdG9yID0gV2hpdGVTcGFjZUdlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLldpZHRoR2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIFdpZHRoR2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFdpZHRoR2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gV2lkdGhHZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCJtYXgtY29udGVudFwiLCBbXCJtYXgtY29udGVudFwiXV0sXHJcbiAgICAgICAgICAgIFtcIm1pbi1jb250ZW50XCIsIFtcIm1pbi1jb250ZW50XCJdXSxcclxuICAgICAgICAgICAgW1wiZml0LWNvbnRlbnRcIiwgW1wiZml0LWNvbnRlbnRcIl1dLFxyXG4gICAgICAgICAgICBbXCIwXCIsIFtcIjAlXCJdXSxcclxuICAgICAgICAgICAgW1wiMVwiLCBbXCI4LjMzMyVcIl1dLFxyXG4gICAgICAgICAgICBbXCIyXCIsIFtcIjE2LjY2NiVcIl1dLFxyXG4gICAgICAgICAgICBbXCIzXCIsIFtcIjI1JVwiXV0sXHJcbiAgICAgICAgICAgIFtcIjRcIiwgW1wiMzMuMzMzJVwiXV0sXHJcbiAgICAgICAgICAgIFtcIjVcIiwgW1wiNDEuNjY2JVwiXV0sXHJcbiAgICAgICAgICAgIFtcIjZcIiwgW1wiNTAlXCJdXSxcclxuICAgICAgICAgICAgW1wiN1wiLCBbXCI1OC4zMzMlXCJdXSxcclxuICAgICAgICAgICAgW1wiOFwiLCBbXCI2Ni42NjYlXCJdXSxcclxuICAgICAgICAgICAgW1wiOVwiLCBbXCI3NSVcIl1dLFxyXG4gICAgICAgICAgICBbXCIxMFwiLCBbXCI4My4zMzMlXCJdXSxcclxuICAgICAgICAgICAgW1wiMTFcIiwgW1wiOTEuNjY2JVwiXV0sXHJcbiAgICAgICAgICAgIFtcIjEyXCIsIFtcIjEwMCVcIl1dLFxyXG4gICAgICAgICAgICBbXCJ4c1wiLCBbXCIzMjBweFwiXV0sXHJcbiAgICAgICAgICAgIFtcInNtXCIsIFtcIjU0NHB4XCJdXSxcclxuICAgICAgICAgICAgW1wibWRcIiwgW1wiNzY4cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCJsZ1wiLCBbXCIxMDEycHhcIl1dLFxyXG4gICAgICAgICAgICBbXCJ4bFwiLCBbXCIxMjgwcHhcIl1dLFxyXG4gICAgICAgICAgICBbXCIxNnB4XCIsIFtcIjE2cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCIyNHB4XCIsIFtcIjI0cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCIzMnB4XCIsIFtcIjMycHhcIl1dLFxyXG4gICAgICAgICAgICBbXCI0OHB4XCIsIFtcIjQ4cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCI2NHB4XCIsIFtcIjY0cHhcIl1dXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMubGlzdCA9IFtcImluaGVyaXRcIiwgXCJpbml0aWFsXCIsIFwicmV2ZXJ0XCIsIFwidW5zZXRcIl07XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcIndcIiwgW1wid2lkdGhcIl0sIF90aGlzLmxpc3QsIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwibWF4LXdcIiwgW1wibWF4LXdpZHRoXCJdLCBfdGhpcy5saXN0LCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcIm1pbi13XCIsIFtcIm1pbi13aWR0aFwiXSwgX3RoaXMubGlzdCwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBXaWR0aEdlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLldpZHRoR2VuZXJhdG9yID0gV2lkdGhHZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5Xb3JkQnJlYWtHZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgV29yZEJyZWFrR2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFdvcmRCcmVha0dlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFdvcmRCcmVha0dlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcImJyZWFrLWFsbFwiLCBbXCJicmVhay1hbGxcIl1dLFxyXG4gICAgICAgICAgICBbXCJrZWVwLWFsbFwiLCBbXCJrZWVwLWFsbFwiXV0sXHJcbiAgICAgICAgICAgIFtcImJyZWFrLXdvcmRcIiwgW1wiYnJlYWstd29yZFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5saXN0ID0gW1wibm9ybWFsXCJdO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJ3b3JkLWJyZWFrXCIsIFtcIndvcmQtYnJlYWtcIl0sIF90aGlzLmxpc3QsIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gV29yZEJyZWFrR2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuV29yZEJyZWFrR2VuZXJhdG9yID0gV29yZEJyZWFrR2VuZXJhdG9yO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG52YXIgY3NzdmlsbGVfMSA9IHJlcXVpcmUoXCIuL2Nzc3ZpbGxlXCIpO1xyXG52YXIgcGF0aE1vZHVsZSA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG5mdW5jdGlvbiBnZXRGaWxlcyhwYXRoRGlyKSB7XHJcbiAgICB2YXIgZmlsZXMgPSBbXTtcclxuICAgIHZhciBkaXJzID0gW107XHJcbiAgICBpZiAocGF0aERpci5pbmRleE9mKCcsJykgPiAtMSkge1xyXG4gICAgICAgIGRpcnMucHVzaC5hcHBseShkaXJzLCBwYXRoRGlyLnNwbGl0KCcsJykpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZGlycy5wdXNoKHBhdGhEaXIpO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBkaXJzXzEgPSBkaXJzOyBfaSA8IGRpcnNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgZGlyXzEgPSBkaXJzXzFbX2ldO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVhZGluZyBmaWxlcyBmcm9tIFwiLmNvbmNhdChkaXJfMSkpO1xyXG4gICAgICAgIGlmICghZnMuZXhpc3RzU3luYyhkaXJfMSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkRpcmVjdG9yeSAnXCIuY29uY2F0KHBhdGhNb2R1bGUucmVzb2x2ZShkaXJfMSksIFwiJyBub3QgZm91bmQhXCIpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbGVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBfYSA9IDAsIF9iID0gZnMucmVhZGRpclN5bmMoZGlyXzEpOyBfYSA8IF9iLmxlbmd0aDsgX2ErKykge1xyXG4gICAgICAgICAgICB2YXIgZmlsZSA9IF9iW19hXTtcclxuICAgICAgICAgICAgdmFyIGZ1bGxQYXRoID0gZGlyXzEgKyAnLycgKyBmaWxlO1xyXG4gICAgICAgICAgICBpZiAoZnMubHN0YXRTeW5jKGZ1bGxQYXRoKS5pc0RpcmVjdG9yeSgpKVxyXG4gICAgICAgICAgICAgICAgZ2V0RmlsZXMoZnVsbFBhdGgpLmZvckVhY2goZnVuY3Rpb24gKHgpIHsgcmV0dXJuIGZpbGVzLnB1c2goeCk7IH0pO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBmaWxlcy5wdXNoKGZ1bGxQYXRoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmlsZXM7XHJcbn1cclxudmFyIHBhdGggPSBwcm9jZXNzLmFyZ3ZbMl07XHJcbnZhciBkaXIgPSBwcm9jZXNzLmFyZ3ZbM107XHJcbnZhciBleHRlbnNpb25zID0gcHJvY2Vzcy5hcmd2WzRdO1xyXG5pZiAoIXBhdGgpIHtcclxuICAgIHBhdGggPSBcImJ1aWxkL2Nzc3ZpbGxlLmNzc1wiO1xyXG59XHJcbmlmICghZXh0ZW5zaW9ucykge1xyXG4gICAgdmFyIGNzcyA9IGNzc3ZpbGxlXzEuQ3NzdmlsbGUuZ2V0Q3NzKCk7XHJcbiAgICBmcy53cml0ZUZpbGUocGF0aCwgY3NzLCBmdW5jdGlvbiAoKSB7IGNvbnNvbGUubG9nKFwiZG9uZTogXCIgKyBwYXRoKTsgfSk7XHJcbn1cclxuZWxzZSB7XHJcbiAgICB2YXIgY2xhc3NlcyA9IFtdO1xyXG4gICAgdmFyIGV4QXJyYXkgPSBleHRlbnNpb25zLnNwbGl0KFwiLFwiKTtcclxuICAgIHZhciBmaWxlcyA9IGdldEZpbGVzKGRpcikuZmlsdGVyKGZ1bmN0aW9uIChmbikgeyByZXR1cm4gZXhBcnJheS5maWx0ZXIoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGZuLmVuZHNXaXRoKGUpOyB9KS5sZW5ndGggPiAwOyB9KTtcclxuICAgIGZpbGVzLmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcclxuICAgICAgICB2YXIgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlKS50b1N0cmluZygpO1xyXG4gICAgICAgIHZhciBleHQgPSBwYXRoTW9kdWxlLmV4dG5hbWUoZmlsZSk7XHJcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IGV4dCA9PT0gXCIuanN4XCIgfHwgZXh0ID09PSBcIi50c3hcIiA/IFwiY2xhc3NOYW1lPVwiIDogXCJjbGFzcz1cIjtcclxuICAgICAgICB2YXIgcG9zID0gMDtcclxuICAgICAgICB2YXIgY3NzQ2xhc3NlcyA9IFwiXCI7XHJcbiAgICAgICAgd2hpbGUgKGNvbnRlbnQuaW5kZXhPZihjbGFzc05hbWUsIHBvcykgIT0gLTEpIHtcclxuICAgICAgICAgICAgcG9zID0gY29udGVudC5pbmRleE9mKGNsYXNzTmFtZSwgcG9zKSArIGNsYXNzTmFtZS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChjb250ZW50W3Bvc10gPT09ICdcIicpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbmQgPSBjb250ZW50LmluZGV4T2YoJ1wiJywgcG9zICsgMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW5kIC0gcG9zID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzZXMgPSBjb250ZW50LnN1YnN0cmluZyhwb3MgKyAxLCBlbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzZXMuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsYXNzZXMuaW5kZXhPZihjKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMucHVzaChjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcG9zID0gZW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSBcIi5jb25jYXQoZmlsZSwgXCIgcHJvY2Vzc2VkXCIpKTtcclxuICAgIH0pO1xyXG4gICAgdmFyIGNzcyA9IGNzc3ZpbGxlXzEuQ3NzdmlsbGUuZ2V0Q3NzKGNsYXNzZXMpO1xyXG4gICAgZnMud3JpdGVGaWxlKHBhdGgsIGNzcywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRG9uZTogJ1wiLmNvbmNhdChwYXRoLCBcIicgd2l0aCBwYXR0ZXJuICdcIikuY29uY2F0KGV4dGVuc2lvbnMsIFwiJyBmb3IgZGlyICdcIikuY29uY2F0KGRpciwgXCInXCIpKTtcclxuICAgIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==