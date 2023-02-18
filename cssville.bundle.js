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
    function CssClassData(className, cssProperties, postfixValuesMap, postfixArray) {
        if (postfixArray === void 0) { postfixArray = undefined; }
        var _this = this;
        this.className = className;
        this.cssProperties = cssProperties;
        this.postfixValuesMap = postfixValuesMap;
        this.cssParts = new Map();
        if (postfixArray !== undefined) {
            console.log(postfixArray);
            postfixArray.forEach(function (element) {
                postfixValuesMap[postfixValuesMap.keys.length] = [element, [element]];
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
        console.log("aa");
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
            ["normal", ["normal"]],
            ["stretch", ["stretch"]],
            ["center", ["center"]],
            ["start", ["start"]],
            ["flex-start", ["flex-start"]],
            ["end", ["end"]],
            ["flex-end", ["flex-end"]],
            ["baseline", ["baseline"]],
            ["first-baseline", ["first baseline"]],
            ["last-baseline", ["last baseline"]],
            ["safe-center", ["safe center"]],
            ["unsafe-center", ["unsafe center"]],
            ["inherit", ["inherit"]],
            ["initial", ["initial"]],
            ["revert", ["revert"]],
            ["unset", ["unset"]]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("align-items", ["-ms-align-items", "-o-align-items", "-webkit-align-items", "align-items"], _this.postfixValuesMap)
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
        _this.postfixValuesMap = new Map([
            ["transparent", ["transparent"]],
            ["inherit", ["inherit"]],
            ["initial", ["initial"]],
            ["revert", ["revert"]],
            ["unset", ["unset"]]
        ]);
        _this.flatValues = ["black", "white"];
        _this.cssData = [
            new cssClassData_1.CssClassData("bg-color", ["background-color"], _this.postfixValuesMap, _this.flatValues)
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
            ["inherit", ["inherit"]],
            ["initial", ["initial"]],
            ["revert", ["revert"]],
            ["unset", ["unset"]]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("br", ["-ms-border-radius", "border-radius"], _this.postfixValuesMap),
            new cssClassData_1.CssClassData("br-top-left", ["-ms-border-top-left-radius", "border-top-left-radius"], _this.postfixValuesMap),
            new cssClassData_1.CssClassData("br-top-right", ["-ms-border-top-right-radius", "border-top-right-radius"], _this.postfixValuesMap),
            new cssClassData_1.CssClassData("br-bottom-right", ["-ms-border-bottom-right-radius", "border-bottom-right-radius"], _this.postfixValuesMap),
            new cssClassData_1.CssClassData("br-bottom-left", ["-ms-border-bottom-left-radius", "border-bottom-left-radius"], _this.postfixValuesMap)
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
        _this.postfixValuesMap = new Map([
            ["black", ["black"]],
            ["white", ["white"]],
            ["transparent", ["transparent"]],
            ["inherit", ["inherit"]],
            ["initial", ["initial"]],
            ["revert", ["revert"]],
            ["unset", ["unset"]]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("color", ["color"], _this.postfixValuesMap)
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
        _this.postfixValuesMap = new Map([
            ["cell", ["cell"]],
            ["help", ["help"]],
            ["crosshair", ["crosshair"]],
            ["text", ["text"]],
            ["wait", ["wait"]],
            ["copy", ["copy"]],
            ["move", ["move"]],
            ["grab", ["grab"]],
            ["grabbing", ["grabbing"]],
            ["not-allowed", ["not-allowed"]],
            ["pointer", ["pointer"]],
            ["progress", ["progress"]],
            ["zoom-in", ["zoom-in"]],
            ["zoom-out", ["zoom-out"]],
            ["default", ["default"]]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("cursor", ["cursor"], _this.postfixValuesMap)
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
            ["inherit", ["inherit"]],
            ["initial", ["initial"]],
            ["revert", ["revert"]],
            ["unset", ["unset"]]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("d", ["display"], _this.postfixValuesMap)
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
            ["inherit", ["inherit"]],
            ["initial", ["initial"]],
            ["revert", ["revert"]],
            ["unset", ["unset"]]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("flex-direction", ["flex-direction"], _this.postfixValuesMap)
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
            ["inherit", ["inherit"]],
            ["initial", ["initial"]],
            ["revert", ["revert"]],
            ["unset", ["unset"]]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("flex-grow", ["-o-flex-grow", "-webkit-flex-grow", "flex-grow"], _this.postfixValuesMap)
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
            ["inherit", ["inherit"]],
            ["initial", ["initial"]],
            ["revert", ["revert"]],
            ["unset", ["unset"]]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("flex-wrap", ["-moz-flex-wrap", "-ms-flex-wrap", "-o-flex-wrap", "-webkit-flex-wrap", "flex-wrap"], _this.postfixValuesMap)
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
            ["inherit", ["inherit"]],
            ["initial", ["initial"]],
            ["revert", ["revert"]],
            ["unset", ["unset"]]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("float", ["float"], _this.postfixValuesMap)
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
            ["inherit", ["inherit"]],
            ["initial", ["initial"]],
            ["revert", ["revert"]],
            ["unset", ["unset"]]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("fs", ["font-size"], _this.postfixValuesMap)
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
            ["inherit", ["inherit"]],
            ["initial", ["initial"]],
            ["revert", ["revert"]],
            ["unset", ["unset"]]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("fw", ["font-weight"], _this.postfixValuesMap)
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
            ["inherit", ["inherit"]],
            ["initial", ["initial"]],
            ["revert", ["revert"]],
            ["unset", ["unset"]],
            ["16px", ["16px"]],
            ["24px", ["24px"]],
            ["32px", ["32px"]],
            ["48px", ["48px"]],
            ["64px", ["64px"]],
            ["100", ["100%"]],
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("h", ["height"], _this.postfixValuesMap),
            new cssClassData_1.CssClassData("max-h", ["max-height"], _this.postfixValuesMap),
            new cssClassData_1.CssClassData("min-h", ["min-height"], _this.postfixValuesMap)
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
            ["inherit", ["inherit"]],
            ["initial", ["initial"]],
            ["revert", ["revert"]],
            ["unset", ["unset"]]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("justify-content", ["-o-justify-content", "-webkit-justify-content", "justify-content"], _this.postfixValuesMap)
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
            ["inherit", ["inherit"]],
            ["initial", ["initial"]],
            ["revert", ["revert"]],
            ["unset", ["unset"]]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("p", ["padding"], _this.postfixValuesMap),
            new cssClassData_1.CssClassData("pt", ["padding-top"], _this.postfixValuesMap),
            new cssClassData_1.CssClassData("pb", ["padding-bottom"], _this.postfixValuesMap),
            new cssClassData_1.CssClassData("pl", ["padding-left"], _this.postfixValuesMap),
            new cssClassData_1.CssClassData("pr", ["padding-right"], _this.postfixValuesMap),
            new cssClassData_1.CssClassData("px", ["padding-left", "padding-right"], _this.postfixValuesMap),
            new cssClassData_1.CssClassData("py", ["padding-top", "padding-bottom"], _this.postfixValuesMap),
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
            ["inherit", ["inherit"]],
            ["initial", ["initial"]],
            ["revert", ["revert"]],
            ["unset", ["unset"]]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("position", ["position"], _this.postfixValuesMap),
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
            ["inherit", ["inherit"]],
            ["initial", ["initial"]],
            ["revert", ["revert"]],
            ["unset", ["unset"]]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("text-align", ["text-align"], _this.postfixValuesMap)
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
            ["inherit", ["inherit"]],
            ["initial", ["initial"]],
            ["revert", ["revert"]],
            ["unset", ["unset"]]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("text-decoration", ["text-decoration"], _this.postfixValuesMap)
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
            ["normal", ["normal"]],
            ["nowrap", ["nowrap"]],
            ["pre", ["pre"]],
            ["pre-wrap", ["pre-wrap"]],
            ["pre-line", ["pre-line"]],
            ["break-spaces", ["break-spaces"]]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("white-space", ["white-space"], _this.postfixValuesMap)
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
            ["inherit", ["inherit"]],
            ["initial", ["initial"]],
            ["revert", ["revert"]],
            ["unset", ["unset"]],
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
        _this.cssData = [
            new cssClassData_1.CssClassData("w", ["width"], _this.postfixValuesMap),
            new cssClassData_1.CssClassData("max-w", ["max-width"], _this.postfixValuesMap),
            new cssClassData_1.CssClassData("min-w", ["min-width"], _this.postfixValuesMap)
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
            ["normal", ["normal"]],
            ["break-all", ["break-all"]],
            ["keep-all", ["keep-all"]],
            ["break-word", ["break-word"]]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("word-break", ["word-break"], _this.postfixValuesMap)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFDQUFxQyx3QkFBd0IsZUFBZTtBQUNqSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL0dlbmVyYXRvckJhc2UudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvY3NzdmlsbGUudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZGF0YS9jc3NDbGFzc0RhdGEudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9hbGlnbkl0ZW1zR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvYmFja2dyb3VuZENvbG9yR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvYm9yZGVyUmFkaXVzR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvY29sb3JHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9jdXJzb3JHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9kaXNwbGF5R2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvZmxleERpcmVjdGlvbkdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL2ZsZXhHcm93R2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvZmxleFNocmlua0dlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL2ZsZXhXcmFwR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvZmxvYXRHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9mb250U2l6ZUdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL2ZvbnRXZWlnaHRHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9oZWlnaHRHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9qdXN0aWZ5Q29udGVudEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL21hcmdpbkdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL3BhZGRpbmdHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9wb3NpdGlvbkdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL3RleHRBbGlnbkdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL3RleHREZWNvcmF0aW9uR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvd2hpdGVTcGFjZUdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL3dpZHRoR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvd29yZEJyZWFrR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJmc1wiIiwid2VicGFjazovL2Nzc3ZpbGxlL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuR2VuZXJhdG9yQmFzZSA9IHZvaWQgMDtcclxudmFyIEdlbmVyYXRvckJhc2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHZW5lcmF0b3JCYXNlKCkge1xyXG4gICAgICAgIHRoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmNzc0RhdGEgPSBbXTtcclxuICAgIH1cclxuICAgIEdlbmVyYXRvckJhc2UucHJvdG90eXBlLmdlbmVyYXRlID0gZnVuY3Rpb24gKHByZWZpeCwgY2xhc3Nlcykge1xyXG4gICAgICAgIGlmIChwcmVmaXggPT09IHZvaWQgMCkgeyBwcmVmaXggPSBcIlwiOyB9XHJcbiAgICAgICAgaWYgKGNsYXNzZXMgPT09IHZvaWQgMCkgeyBjbGFzc2VzID0gW107IH1cclxuICAgICAgICB2YXIgY3NzUGFydCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jc3NEYXRhLmZvckVhY2goZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgY3NzUGFydCArPSBkYXRhLmdldENzcyhwcmVmaXgsIGNsYXNzZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBjc3NQYXJ0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHZW5lcmF0b3JCYXNlO1xyXG59KCkpO1xyXG5leHBvcnRzLkdlbmVyYXRvckJhc2UgPSBHZW5lcmF0b3JCYXNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5Dc3N2aWxsZSA9IHZvaWQgMDtcclxudmFyIHBhZGRpbmdHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvcGFkZGluZ0dlbmVyYXRvclwiKTtcclxudmFyIG1hcmdpbkdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy9tYXJnaW5HZW5lcmF0b3JcIik7XHJcbnZhciBkaXNwbGF5R2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2Rpc3BsYXlHZW5lcmF0b3JcIik7XHJcbnZhciBmbGV4RGlyZWN0aW9uR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2ZsZXhEaXJlY3Rpb25HZW5lcmF0b3JcIik7XHJcbnZhciBmbGV4R3Jvd0dlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy9mbGV4R3Jvd0dlbmVyYXRvclwiKTtcclxudmFyIGZsZXhXcmFwR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2ZsZXhXcmFwR2VuZXJhdG9yXCIpO1xyXG52YXIgZmxleFNocmlua0dlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy9mbGV4U2hyaW5rR2VuZXJhdG9yXCIpO1xyXG52YXIgZmxvYXRHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvZmxvYXRHZW5lcmF0b3JcIik7XHJcbnZhciBmb250V2VpZ2h0R2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2ZvbnRXZWlnaHRHZW5lcmF0b3JcIik7XHJcbnZhciB3aWR0aEdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy93aWR0aEdlbmVyYXRvclwiKTtcclxudmFyIGZvbnRTaXplR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2ZvbnRTaXplR2VuZXJhdG9yXCIpO1xyXG52YXIgcG9zaXRpb25HZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvcG9zaXRpb25HZW5lcmF0b3JcIik7XHJcbnZhciBhbGlnbkl0ZW1zR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2FsaWduSXRlbXNHZW5lcmF0b3JcIik7XHJcbnZhciBqdXN0aWZ5Q29udGVudEdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy9qdXN0aWZ5Q29udGVudEdlbmVyYXRvclwiKTtcclxudmFyIHRleHREZWNvcmF0aW9uR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL3RleHREZWNvcmF0aW9uR2VuZXJhdG9yXCIpO1xyXG52YXIgaGVpZ2h0R2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2hlaWdodEdlbmVyYXRvclwiKTtcclxudmFyIGNvbG9yR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2NvbG9yR2VuZXJhdG9yXCIpO1xyXG52YXIgYm9yZGVyUmFkaXVzR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2JvcmRlclJhZGl1c0dlbmVyYXRvclwiKTtcclxudmFyIGN1cnNvckdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy9jdXJzb3JHZW5lcmF0b3JcIik7XHJcbnZhciBiYWNrZ3JvdW5kQ29sb3JHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvYmFja2dyb3VuZENvbG9yR2VuZXJhdG9yXCIpO1xyXG52YXIgdGV4dEFsaWduR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL3RleHRBbGlnbkdlbmVyYXRvclwiKTtcclxudmFyIHdvcmRCcmVha0dlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy93b3JkQnJlYWtHZW5lcmF0b3JcIik7XHJcbnZhciB3aGl0ZVNwYWNlR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL3doaXRlU3BhY2VHZW5lcmF0b3JcIik7XHJcbnZhciBDc3N2aWxsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENzc3ZpbGxlKCkge1xyXG4gICAgfVxyXG4gICAgQ3NzdmlsbGUuZ2V0Q3NzID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcclxuICAgICAgICBpZiAoY2xhc3NlcyA9PT0gdm9pZCAwKSB7IGNsYXNzZXMgPSBbXTsgfVxyXG4gICAgICAgIHZhciBjc3MgPSBcIlwiO1xyXG4gICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgQ3NzdmlsbGUuZ2VuZXJhdG9ycy5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICB2YXIgZyA9IENzc3ZpbGxlLmdlbmVyYXRvcnNbeF07XHJcbiAgICAgICAgICAgIHZhciBjc3NQYXJ0ID0gZy5nZW5lcmF0ZShcIlwiLCBjbGFzc2VzKTtcclxuICAgICAgICAgICAgY3NzICs9IGNzc1BhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJlZml4VmFsdWVNYXAuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICB2YXIgaW5uZXJDc3MgPSBcIlwiO1xyXG4gICAgICAgICAgICB2YXIgcHJlZml4ID0ga2V5O1xyXG4gICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IENzc3ZpbGxlLmdlbmVyYXRvcnMubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBnID0gQ3NzdmlsbGUuZ2VuZXJhdG9yc1t4XTtcclxuICAgICAgICAgICAgICAgIHZhciBjc3NQYXJ0Rm9yUHJlZml4ID0gZy5nZW5lcmF0ZShwcmVmaXgsIGNsYXNzZXMpO1xyXG4gICAgICAgICAgICAgICAgaW5uZXJDc3MgKz0gY3NzUGFydEZvclByZWZpeDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjc3MgKz0gXCJAbWVkaWEgKG1heC13aWR0aDogXCIuY29uY2F0KHZhbHVlLCBcIikgeyBcIikuY29uY2F0KGlubmVyQ3NzLCBcIn0gXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBjc3M7XHJcbiAgICB9O1xyXG4gICAgQ3NzdmlsbGUucHJlZml4VmFsdWVNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICBbXCJ4bFwiLCBcIjEyODBweFwiXSxcclxuICAgICAgICBbXCJsZ1wiLCBcIjEwMTJweFwiXSxcclxuICAgICAgICBbXCJtZFwiLCBcIjc2OHB4XCJdLFxyXG4gICAgICAgIFtcInNtXCIsIFwiNTQ0cHhcIl0sXHJcbiAgICAgICAgW1wieHNcIiwgXCIzMjBweFwiXSxcclxuICAgIF0pO1xyXG4gICAgQ3NzdmlsbGUuZ2VuZXJhdG9ycyA9IFtcclxuICAgICAgICBuZXcgYWxpZ25JdGVtc0dlbmVyYXRvcl8xLkFsaWduSXRlbXNHZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgYm9yZGVyUmFkaXVzR2VuZXJhdG9yXzEuQm9yZGVyUmFkaXVzR2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IGJhY2tncm91bmRDb2xvckdlbmVyYXRvcl8xLkJhY2tncm91bmRDb2xvckdlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyBjb2xvckdlbmVyYXRvcl8xLkNvbG9yR2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IGN1cnNvckdlbmVyYXRvcl8xLkN1cnNvckdlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyBwYWRkaW5nR2VuZXJhdG9yXzEuUGFkZGluZ0dlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyBtYXJnaW5HZW5lcmF0b3JfMS5NYXJnaW5HZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgZGlzcGxheUdlbmVyYXRvcl8xLkRpc3BsYXlHZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgZmxleERpcmVjdGlvbkdlbmVyYXRvcl8xLkZsZXhEaXJlY3Rpb25HZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgZmxleEdyb3dHZW5lcmF0b3JfMS5GbGV4R3Jvd0dlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyBmbGV4U2hyaW5rR2VuZXJhdG9yXzEuRmxleFNocmlua0dlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyBmbGV4V3JhcEdlbmVyYXRvcl8xLkZsZXhXcmFwR2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IGZsb2F0R2VuZXJhdG9yXzEuRmxvYXRHZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgZm9udFNpemVHZW5lcmF0b3JfMS5Gb250U2l6ZUdlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyBmb250V2VpZ2h0R2VuZXJhdG9yXzEuRm9udFdlaWdodEdlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyBoZWlnaHRHZW5lcmF0b3JfMS5IZWlnaHRHZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcganVzdGlmeUNvbnRlbnRHZW5lcmF0b3JfMS5KdXN0aWZ5Q29udGVudEdlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyB3aWR0aEdlbmVyYXRvcl8xLldpZHRoR2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IHdoaXRlU3BhY2VHZW5lcmF0b3JfMS5XaGl0ZVNwYWNlR2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IHdvcmRCcmVha0dlbmVyYXRvcl8xLldvcmRCcmVha0dlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyB0ZXh0QWxpZ25HZW5lcmF0b3JfMS5UZXh0QWxpZ25HZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgdGV4dERlY29yYXRpb25HZW5lcmF0b3JfMS5UZXh0RGVjb3JhdGlvbkdlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyBwb3NpdGlvbkdlbmVyYXRvcl8xLlBvc2l0aW9uR2VuZXJhdG9yKCksXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIENzc3ZpbGxlO1xyXG59KCkpO1xyXG5leHBvcnRzLkNzc3ZpbGxlID0gQ3NzdmlsbGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkNzc0NsYXNzRGF0YSA9IHZvaWQgMDtcclxudmFyIENzc0NsYXNzRGF0YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENzc0NsYXNzRGF0YShjbGFzc05hbWUsIGNzc1Byb3BlcnRpZXMsIHBvc3RmaXhWYWx1ZXNNYXAsIHBvc3RmaXhBcnJheSkge1xyXG4gICAgICAgIGlmIChwb3N0Zml4QXJyYXkgPT09IHZvaWQgMCkgeyBwb3N0Zml4QXJyYXkgPSB1bmRlZmluZWQ7IH1cclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgICAgIHRoaXMuY3NzUHJvcGVydGllcyA9IGNzc1Byb3BlcnRpZXM7XHJcbiAgICAgICAgdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gcG9zdGZpeFZhbHVlc01hcDtcclxuICAgICAgICB0aGlzLmNzc1BhcnRzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGlmIChwb3N0Zml4QXJyYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwb3N0Zml4QXJyYXkpO1xyXG4gICAgICAgICAgICBwb3N0Zml4QXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcG9zdGZpeFZhbHVlc01hcFtwb3N0Zml4VmFsdWVzTWFwLmtleXMubGVuZ3RoXSA9IFtlbGVtZW50LCBbZWxlbWVudF1dO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wb3N0Zml4VmFsdWVzTWFwLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgdmFyIHBvc3RmaXggPSBrZXk7XHJcbiAgICAgICAgICAgIHZhciBpbm5lclByb3BlcnRpZXMgPSBcIlwiO1xyXG4gICAgICAgICAgICBfdGhpcy5jc3NQcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gKGNzc1Byb3BlcnR5KSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJQcm9wZXJ0aWVzICs9IFwiXCIuY29uY2F0KGNzc1Byb3BlcnR5LCBcIjogXCIpLmNvbmNhdCh2LCBcIjsgXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBfdGhpcy5jc3NQYXJ0cy5zZXQoXCJcIi5jb25jYXQoX3RoaXMuY2xhc3NOYW1lLCBcIi1cIikuY29uY2F0KHBvc3RmaXgpLCBpbm5lclByb3BlcnRpZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgQ3NzQ2xhc3NEYXRhLnByb3RvdHlwZS5nZXRDc3MgPSBmdW5jdGlvbiAocHJlZml4LCBjbGFzc2VzKSB7XHJcbiAgICAgICAgaWYgKHByZWZpeCA9PT0gdm9pZCAwKSB7IHByZWZpeCA9IFwiXCI7IH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImFhXCIpO1xyXG4gICAgICAgIHZhciBjc3MgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuY3NzUGFydHMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gXCJcIi5jb25jYXQocHJlZml4ID09PSBcIlwiID8gXCJcIiA6IFwiXCIuY29uY2F0KHByZWZpeCwgXCItXCIpKS5jb25jYXQoa2V5KTtcclxuICAgICAgICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjc3MgKz0gXCIuXCIuY29uY2F0KGNsYXNzTmFtZSwgXCIge1wiKS5jb25jYXQodmFsdWUsIFwifSBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCAmJiBjbGFzc2VzLmluZGV4T2YoY2xhc3NOYW1lKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjc3MgKz0gXCIuXCIuY29uY2F0KGNsYXNzTmFtZSwgXCIge1wiKS5jb25jYXQodmFsdWUsIFwifSBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gY3NzO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDc3NDbGFzc0RhdGE7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ3NzQ2xhc3NEYXRhID0gQ3NzQ2xhc3NEYXRhO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuQWxpZ25JdGVtc0dlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBBbGlnbkl0ZW1zR2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEFsaWduSXRlbXNHZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBBbGlnbkl0ZW1zR2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1wibm9ybWFsXCIsIFtcIm5vcm1hbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInN0cmV0Y2hcIiwgW1wic3RyZXRjaFwiXV0sXHJcbiAgICAgICAgICAgIFtcImNlbnRlclwiLCBbXCJjZW50ZXJcIl1dLFxyXG4gICAgICAgICAgICBbXCJzdGFydFwiLCBbXCJzdGFydFwiXV0sXHJcbiAgICAgICAgICAgIFtcImZsZXgtc3RhcnRcIiwgW1wiZmxleC1zdGFydFwiXV0sXHJcbiAgICAgICAgICAgIFtcImVuZFwiLCBbXCJlbmRcIl1dLFxyXG4gICAgICAgICAgICBbXCJmbGV4LWVuZFwiLCBbXCJmbGV4LWVuZFwiXV0sXHJcbiAgICAgICAgICAgIFtcImJhc2VsaW5lXCIsIFtcImJhc2VsaW5lXCJdXSxcclxuICAgICAgICAgICAgW1wiZmlyc3QtYmFzZWxpbmVcIiwgW1wiZmlyc3QgYmFzZWxpbmVcIl1dLFxyXG4gICAgICAgICAgICBbXCJsYXN0LWJhc2VsaW5lXCIsIFtcImxhc3QgYmFzZWxpbmVcIl1dLFxyXG4gICAgICAgICAgICBbXCJzYWZlLWNlbnRlclwiLCBbXCJzYWZlIGNlbnRlclwiXV0sXHJcbiAgICAgICAgICAgIFtcInVuc2FmZS1jZW50ZXJcIiwgW1widW5zYWZlIGNlbnRlclwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaGVyaXRcIiwgW1wiaW5oZXJpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaXRpYWxcIiwgW1wiaW5pdGlhbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJldmVydFwiLCBbXCJyZXZlcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNldFwiLCBbXCJ1bnNldFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiYWxpZ24taXRlbXNcIiwgW1wiLW1zLWFsaWduLWl0ZW1zXCIsIFwiLW8tYWxpZ24taXRlbXNcIiwgXCItd2Via2l0LWFsaWduLWl0ZW1zXCIsIFwiYWxpZ24taXRlbXNcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQWxpZ25JdGVtc0dlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLkFsaWduSXRlbXNHZW5lcmF0b3IgPSBBbGlnbkl0ZW1zR2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuQmFja2dyb3VuZENvbG9yR2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIEJhY2tncm91bmRDb2xvckdlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhCYWNrZ3JvdW5kQ29sb3JHZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBCYWNrZ3JvdW5kQ29sb3JHZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCJ0cmFuc3BhcmVudFwiLCBbXCJ0cmFuc3BhcmVudFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaGVyaXRcIiwgW1wiaW5oZXJpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaXRpYWxcIiwgW1wiaW5pdGlhbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJldmVydFwiLCBbXCJyZXZlcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNldFwiLCBbXCJ1bnNldFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5mbGF0VmFsdWVzID0gW1wiYmxhY2tcIiwgXCJ3aGl0ZVwiXTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiYmctY29sb3JcIiwgW1wiYmFja2dyb3VuZC1jb2xvclwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCwgX3RoaXMuZmxhdFZhbHVlcylcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBCYWNrZ3JvdW5kQ29sb3JHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5CYWNrZ3JvdW5kQ29sb3JHZW5lcmF0b3IgPSBCYWNrZ3JvdW5kQ29sb3JHZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5Cb3JkZXJSYWRpdXNHZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgQm9yZGVyUmFkaXVzR2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEJvcmRlclJhZGl1c0dlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEJvcmRlclJhZGl1c0dlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcIjBcIiwgW1wiMHB4XCJdXSxcclxuICAgICAgICAgICAgW1wiMVwiLCBbXCI0cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCIyXCIsIFtcIjhweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjNcIiwgW1wiMTZweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjRcIiwgW1wiMzJweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjVcIiwgW1wiNjRweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjUwcFwiLCBbXCI1MCVcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmhlcml0XCIsIFtcImluaGVyaXRcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbml0aWFsXCIsIFtcImluaXRpYWxcIl1dLFxyXG4gICAgICAgICAgICBbXCJyZXZlcnRcIiwgW1wicmV2ZXJ0XCJdXSxcclxuICAgICAgICAgICAgW1widW5zZXRcIiwgW1widW5zZXRcIl1dXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImJyXCIsIFtcIi1tcy1ib3JkZXItcmFkaXVzXCIsIFwiYm9yZGVyLXJhZGl1c1wiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJici10b3AtbGVmdFwiLCBbXCItbXMtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c1wiLCBcImJvcmRlci10b3AtbGVmdC1yYWRpdXNcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiYnItdG9wLXJpZ2h0XCIsIFtcIi1tcy1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1c1wiLCBcImJvcmRlci10b3AtcmlnaHQtcmFkaXVzXCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImJyLWJvdHRvbS1yaWdodFwiLCBbXCItbXMtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNcIiwgXCJib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c1wiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJici1ib3R0b20tbGVmdFwiLCBbXCItbXMtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c1wiLCBcImJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQm9yZGVyUmFkaXVzR2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuQm9yZGVyUmFkaXVzR2VuZXJhdG9yID0gQm9yZGVyUmFkaXVzR2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuQ29sb3JHZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgQ29sb3JHZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQ29sb3JHZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBDb2xvckdlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcImJsYWNrXCIsIFtcImJsYWNrXCJdXSxcclxuICAgICAgICAgICAgW1wid2hpdGVcIiwgW1wid2hpdGVcIl1dLFxyXG4gICAgICAgICAgICBbXCJ0cmFuc3BhcmVudFwiLCBbXCJ0cmFuc3BhcmVudFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaGVyaXRcIiwgW1wiaW5oZXJpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaXRpYWxcIiwgW1wiaW5pdGlhbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJldmVydFwiLCBbXCJyZXZlcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNldFwiLCBbXCJ1bnNldFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiY29sb3JcIiwgW1wiY29sb3JcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ29sb3JHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5Db2xvckdlbmVyYXRvciA9IENvbG9yR2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuQ3Vyc29yR2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIEN1cnNvckdlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhDdXJzb3JHZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBDdXJzb3JHZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCJjZWxsXCIsIFtcImNlbGxcIl1dLFxyXG4gICAgICAgICAgICBbXCJoZWxwXCIsIFtcImhlbHBcIl1dLFxyXG4gICAgICAgICAgICBbXCJjcm9zc2hhaXJcIiwgW1wiY3Jvc3NoYWlyXCJdXSxcclxuICAgICAgICAgICAgW1widGV4dFwiLCBbXCJ0ZXh0XCJdXSxcclxuICAgICAgICAgICAgW1wid2FpdFwiLCBbXCJ3YWl0XCJdXSxcclxuICAgICAgICAgICAgW1wiY29weVwiLCBbXCJjb3B5XCJdXSxcclxuICAgICAgICAgICAgW1wibW92ZVwiLCBbXCJtb3ZlXCJdXSxcclxuICAgICAgICAgICAgW1wiZ3JhYlwiLCBbXCJncmFiXCJdXSxcclxuICAgICAgICAgICAgW1wiZ3JhYmJpbmdcIiwgW1wiZ3JhYmJpbmdcIl1dLFxyXG4gICAgICAgICAgICBbXCJub3QtYWxsb3dlZFwiLCBbXCJub3QtYWxsb3dlZFwiXV0sXHJcbiAgICAgICAgICAgIFtcInBvaW50ZXJcIiwgW1wicG9pbnRlclwiXV0sXHJcbiAgICAgICAgICAgIFtcInByb2dyZXNzXCIsIFtcInByb2dyZXNzXCJdXSxcclxuICAgICAgICAgICAgW1wiem9vbS1pblwiLCBbXCJ6b29tLWluXCJdXSxcclxuICAgICAgICAgICAgW1wiem9vbS1vdXRcIiwgW1wiem9vbS1vdXRcIl1dLFxyXG4gICAgICAgICAgICBbXCJkZWZhdWx0XCIsIFtcImRlZmF1bHRcIl1dXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImN1cnNvclwiLCBbXCJjdXJzb3JcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ3Vyc29yR2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuQ3Vyc29yR2VuZXJhdG9yID0gQ3Vyc29yR2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuRGlzcGxheUdlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBEaXNwbGF5R2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKERpc3BsYXlHZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBEaXNwbGF5R2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1wiYmxvY2tcIiwgW1wiYmxvY2tcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmxpbmVcIiwgW1wiaW5saW5lXCJdXSxcclxuICAgICAgICAgICAgW1wiaW5saW5lLWJsb2NrXCIsIFtcImlubGluZS1ibG9ja1wiXV0sXHJcbiAgICAgICAgICAgIFtcImZsZXhcIiwgW1wiZmxleFwiXV0sXHJcbiAgICAgICAgICAgIFtcImlubGluZS1mbGV4XCIsIFtcImlubGluZS1mbGV4XCJdXSxcclxuICAgICAgICAgICAgW1wiZ3JpZFwiLCBbXCJncmlkXCJdXSxcclxuICAgICAgICAgICAgW1wiaW5saW5lLWdyaWRcIiwgW1wiaW5saW5lLWdyaWRcIl1dLFxyXG4gICAgICAgICAgICBbXCJmbG93LXJvb3RcIiwgW1wiZmxvdy1yb290XCJdXSxcclxuICAgICAgICAgICAgW1wibm9uZVwiLCBbXCJub25lXCJdXSxcclxuICAgICAgICAgICAgW1wiY29udGVudHNcIiwgW1wiY29udGVudHNcIl1dLFxyXG4gICAgICAgICAgICBbXCJibG9jay1mbG93XCIsIFtcImJsb2NrIGZsb3dcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmxpbmUtZmxvd1wiLCBbXCJpbmxpbmUgZmxvd1wiXV0sXHJcbiAgICAgICAgICAgIFtcImlubGluZS1mbG93LXJvb3RcIiwgW1wiaW5saW5lIGZsb3ctcm9vdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImJsb2NrLWZsZXhcIiwgW1wiYmxvY2sgZmxleFwiXV0sXHJcbiAgICAgICAgICAgIFtcImlubGluZS1mbGV4XCIsIFtcImlubGluZSBmbGV4XCJdXSxcclxuICAgICAgICAgICAgW1wiYmxvY2stZ3JpZFwiLCBbXCJibG9jayBncmlkXCJdXSxcclxuICAgICAgICAgICAgW1wiaW5saW5lLWdyaWRcIiwgW1wiaW5saW5lIGdyaWRcIl1dLFxyXG4gICAgICAgICAgICBbXCJibG9jay1mbG93LXJvb3RcIiwgW1wiYmxvY2sgZmxvdy1yb290XCJdXSxcclxuICAgICAgICAgICAgW1widGFibGVcIiwgW1widGFibGVcIl1dLFxyXG4gICAgICAgICAgICBbXCJ0YWJsZS1yb3dcIiwgW1widGFibGUtcm93XCJdXSxcclxuICAgICAgICAgICAgW1widGFibGUtY29sdW1uXCIsIFtcInRhYmxlLWNvbHVtblwiXV0sXHJcbiAgICAgICAgICAgIFtcInRhYmxlLWNlbGxcIiwgW1widGFibGUtY2VsbFwiXV0sXHJcbiAgICAgICAgICAgIFtcImxpc3QtaXRlbVwiLCBbXCJsaXN0LWl0ZW1cIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmhlcml0XCIsIFtcImluaGVyaXRcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbml0aWFsXCIsIFtcImluaXRpYWxcIl1dLFxyXG4gICAgICAgICAgICBbXCJyZXZlcnRcIiwgW1wicmV2ZXJ0XCJdXSxcclxuICAgICAgICAgICAgW1widW5zZXRcIiwgW1widW5zZXRcIl1dXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImRcIiwgW1wiZGlzcGxheVwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBEaXNwbGF5R2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuRGlzcGxheUdlbmVyYXRvciA9IERpc3BsYXlHZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5GbGV4RGlyZWN0aW9uR2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIEZsZXhEaXJlY3Rpb25HZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRmxleERpcmVjdGlvbkdlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEZsZXhEaXJlY3Rpb25HZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCJyb3dcIiwgW1wicm93XCJdXSxcclxuICAgICAgICAgICAgW1wicm93LXJldmVyc2VcIiwgW1wicm93LXJldmVyc2VcIl1dLFxyXG4gICAgICAgICAgICBbXCJjb2x1bW5cIiwgW1wiY29sdW1uXCJdXSxcclxuICAgICAgICAgICAgW1wiY29sdW1uLXJldmVyc2VcIiwgW1wiY29sdW1uLXJldmVyc2VcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmhlcml0XCIsIFtcImluaGVyaXRcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbml0aWFsXCIsIFtcImluaXRpYWxcIl1dLFxyXG4gICAgICAgICAgICBbXCJyZXZlcnRcIiwgW1wicmV2ZXJ0XCJdXSxcclxuICAgICAgICAgICAgW1widW5zZXRcIiwgW1widW5zZXRcIl1dXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImZsZXgtZGlyZWN0aW9uXCIsIFtcImZsZXgtZGlyZWN0aW9uXCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEZsZXhEaXJlY3Rpb25HZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5GbGV4RGlyZWN0aW9uR2VuZXJhdG9yID0gRmxleERpcmVjdGlvbkdlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkZsZXhHcm93R2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIEZsZXhHcm93R2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZsZXhHcm93R2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRmxleEdyb3dHZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCIwXCIsIFtcIjBcIl1dLFxyXG4gICAgICAgICAgICBbXCIxXCIsIFtcIjFcIl1dLFxyXG4gICAgICAgICAgICBbXCIyXCIsIFtcIjJcIl1dLFxyXG4gICAgICAgICAgICBbXCIzXCIsIFtcIjNcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmhlcml0XCIsIFtcImluaGVyaXRcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbml0aWFsXCIsIFtcImluaXRpYWxcIl1dLFxyXG4gICAgICAgICAgICBbXCJyZXZlcnRcIiwgW1wicmV2ZXJ0XCJdXSxcclxuICAgICAgICAgICAgW1widW5zZXRcIiwgW1widW5zZXRcIl1dXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImZsZXgtZ3Jvd1wiLCBbXCItby1mbGV4LWdyb3dcIiwgXCItd2Via2l0LWZsZXgtZ3Jvd1wiLCBcImZsZXgtZ3Jvd1wiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBGbGV4R3Jvd0dlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLkZsZXhHcm93R2VuZXJhdG9yID0gRmxleEdyb3dHZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5GbGV4U2hyaW5rR2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIEZsZXhTaHJpbmtHZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRmxleFNocmlua0dlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEZsZXhTaHJpbmtHZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCIwXCIsIFtcIjBcIl1dLFxyXG4gICAgICAgICAgICBbXCIxXCIsIFtcIjFcIl1dLFxyXG4gICAgICAgICAgICBbXCIyXCIsIFtcIjJcIl1dLFxyXG4gICAgICAgICAgICBbXCIzXCIsIFtcIjNcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmhlcml0XCIsIFtcImluaGVyaXRcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbml0aWFsXCIsIFtcImluaXRpYWxcIl1dLFxyXG4gICAgICAgICAgICBbXCJyZXZlcnRcIiwgW1wicmV2ZXJ0XCJdXSxcclxuICAgICAgICAgICAgW1widW5zZXRcIiwgW1widW5zZXRcIl1dXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImZsZXgtc2hyaW5rXCIsIFtcIi1vLWZsZXgtc2hyaW5rXCIsIFwiLXdlYmtpdC1mbGV4LXNocmlua1wiLCBcImZsZXgtc2hyaW5rXCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEZsZXhTaHJpbmtHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5GbGV4U2hyaW5rR2VuZXJhdG9yID0gRmxleFNocmlua0dlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkZsZXhXcmFwR2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIEZsZXhXcmFwR2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZsZXhXcmFwR2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRmxleFdyYXBHZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCJub3dyYXBcIiwgW1wibm93cmFwXCJdXSxcclxuICAgICAgICAgICAgW1wid3JhcFwiLCBbXCJ3cmFwXCJdXSxcclxuICAgICAgICAgICAgW1wid3JhcC1yZXZlcnNlXCIsIFtcIndyYXAtcmV2ZXJzZVwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaGVyaXRcIiwgW1wiaW5oZXJpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaXRpYWxcIiwgW1wiaW5pdGlhbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJldmVydFwiLCBbXCJyZXZlcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNldFwiLCBbXCJ1bnNldFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiZmxleC13cmFwXCIsIFtcIi1tb3otZmxleC13cmFwXCIsIFwiLW1zLWZsZXgtd3JhcFwiLCBcIi1vLWZsZXgtd3JhcFwiLCBcIi13ZWJraXQtZmxleC13cmFwXCIsIFwiZmxleC13cmFwXCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEZsZXhXcmFwR2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuRmxleFdyYXBHZW5lcmF0b3IgPSBGbGV4V3JhcEdlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkZsb2F0R2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIEZsb2F0R2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZsb2F0R2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRmxvYXRHZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCJsZWZ0XCIsIFtcImxlZnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJyaWdodFwiLCBbXCJyaWdodFwiXV0sXHJcbiAgICAgICAgICAgIFtcIm5vbmVcIiwgW1wibm9uZVwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaGVyaXRcIiwgW1wiaW5oZXJpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaXRpYWxcIiwgW1wiaW5pdGlhbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJldmVydFwiLCBbXCJyZXZlcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNldFwiLCBbXCJ1bnNldFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiZmxvYXRcIiwgW1wiZmxvYXRcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRmxvYXRHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5GbG9hdEdlbmVyYXRvciA9IEZsb2F0R2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuRm9udFNpemVHZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgRm9udFNpemVHZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRm9udFNpemVHZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGb250U2l6ZUdlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcInh4LXNtYWxsXCIsIFtcInh4LXNtYWxsXCJdXSxcclxuICAgICAgICAgICAgW1wieC1zbWFsbFwiLCBbXCJ4LXNtYWxsXCJdXSxcclxuICAgICAgICAgICAgW1wic21hbGxcIiwgW1wic21hbGxcIl1dLFxyXG4gICAgICAgICAgICBbXCJtZWRpdW1cIiwgW1wibWVkaXVtXCJdXSxcclxuICAgICAgICAgICAgW1wibGFyZ2VcIiwgW1wibGFyZ2VcIl1dLFxyXG4gICAgICAgICAgICBbXCJ4LWxhcmdlXCIsIFtcIngtbGFyZ2VcIl1dLFxyXG4gICAgICAgICAgICBbXCJ4eC1sYXJnZVwiLCBbXCJ4eC1sYXJnZVwiXV0sXHJcbiAgICAgICAgICAgIFtcInh4eC1sYXJnZVwiLCBbXCI0OHB4XCIsIFwieHh4LWxhcmdlXCJdXSxcclxuICAgICAgICAgICAgW1wic21hbGxlclwiLCBbXCJzbWFsbGVyXCJdXSxcclxuICAgICAgICAgICAgW1wibGFyZ2VyXCIsIFtcImxhcmdlclwiXV0sXHJcbiAgICAgICAgICAgIFtcIjFyZW1cIiwgW1wiMXJlbVwiXV0sXHJcbiAgICAgICAgICAgIFtcIjJyZW1cIiwgW1wiMnJlbVwiXV0sXHJcbiAgICAgICAgICAgIFtcIjNyZW1cIiwgW1wiM3JlbVwiXV0sXHJcbiAgICAgICAgICAgIFtcIjRyZW1cIiwgW1wiNHJlbVwiXV0sXHJcbiAgICAgICAgICAgIFtcIjVyZW1cIiwgW1wiNXJlbVwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaGVyaXRcIiwgW1wiaW5oZXJpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaXRpYWxcIiwgW1wiaW5pdGlhbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJldmVydFwiLCBbXCJyZXZlcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNldFwiLCBbXCJ1bnNldFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiZnNcIiwgW1wiZm9udC1zaXplXCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEZvbnRTaXplR2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuRm9udFNpemVHZW5lcmF0b3IgPSBGb250U2l6ZUdlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkZvbnRXZWlnaHRHZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgRm9udFdlaWdodEdlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhGb250V2VpZ2h0R2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRm9udFdlaWdodEdlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcIm5vcm1hbFwiLCBbXCJub3JtYWxcIl1dLFxyXG4gICAgICAgICAgICBbXCJib2xkXCIsIFtcImJvbGRcIl1dLFxyXG4gICAgICAgICAgICBbXCJsaWdodGVyXCIsIFtcImxpZ2h0ZXJcIl1dLFxyXG4gICAgICAgICAgICBbXCJib2xkZXJcIiwgW1wiYm9sZGVyXCJdXSxcclxuICAgICAgICAgICAgW1wiMTAwXCIsIFtcIjEwMFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjIwMFwiLCBbXCIyMDBcIl1dLFxyXG4gICAgICAgICAgICBbXCIzMDBcIiwgW1wiMzAwXCJdXSxcclxuICAgICAgICAgICAgW1wiNDAwXCIsIFtcIjQwMFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjUwMFwiLCBbXCI1MDBcIl1dLFxyXG4gICAgICAgICAgICBbXCI2MDBcIiwgW1wiNjAwXCJdXSxcclxuICAgICAgICAgICAgW1wiNzAwXCIsIFtcIjcwMFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjgwMFwiLCBbXCI4MDBcIl1dLFxyXG4gICAgICAgICAgICBbXCI5MDBcIiwgW1wiOTAwXCJdXSxcclxuICAgICAgICAgICAgW1wiaW5oZXJpdFwiLCBbXCJpbmhlcml0XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5pdGlhbFwiLCBbXCJpbml0aWFsXCJdXSxcclxuICAgICAgICAgICAgW1wicmV2ZXJ0XCIsIFtcInJldmVydFwiXV0sXHJcbiAgICAgICAgICAgIFtcInVuc2V0XCIsIFtcInVuc2V0XCJdXVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJmd1wiLCBbXCJmb250LXdlaWdodFwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBGb250V2VpZ2h0R2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuRm9udFdlaWdodEdlbmVyYXRvciA9IEZvbnRXZWlnaHRHZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5IZWlnaHRHZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgSGVpZ2h0R2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEhlaWdodEdlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEhlaWdodEdlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcImF1dG9cIiwgW1wiYXV0b1wiXV0sXHJcbiAgICAgICAgICAgIFtcIm1heC1jb250ZW50XCIsIFtcIm1heC1jb250ZW50XCJdXSxcclxuICAgICAgICAgICAgW1wibWluLWNvbnRlbnRcIiwgW1wibWluLWNvbnRlbnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmhlcml0XCIsIFtcImluaGVyaXRcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbml0aWFsXCIsIFtcImluaXRpYWxcIl1dLFxyXG4gICAgICAgICAgICBbXCJyZXZlcnRcIiwgW1wicmV2ZXJ0XCJdXSxcclxuICAgICAgICAgICAgW1widW5zZXRcIiwgW1widW5zZXRcIl1dLFxyXG4gICAgICAgICAgICBbXCIxNnB4XCIsIFtcIjE2cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCIyNHB4XCIsIFtcIjI0cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCIzMnB4XCIsIFtcIjMycHhcIl1dLFxyXG4gICAgICAgICAgICBbXCI0OHB4XCIsIFtcIjQ4cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCI2NHB4XCIsIFtcIjY0cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCIxMDBcIiwgW1wiMTAwJVwiXV0sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImhcIiwgW1wiaGVpZ2h0XCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcIm1heC1oXCIsIFtcIm1heC1oZWlnaHRcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwibWluLWhcIiwgW1wibWluLWhlaWdodFwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBIZWlnaHRHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5IZWlnaHRHZW5lcmF0b3IgPSBIZWlnaHRHZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5KdXN0aWZ5Q29udGVudEdlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBKdXN0aWZ5Q29udGVudEdlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhKdXN0aWZ5Q29udGVudEdlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEp1c3RpZnlDb250ZW50R2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1wiY2VudGVyXCIsIFtcImNlbnRlclwiXV0sXHJcbiAgICAgICAgICAgIFtcInN0YXJ0XCIsIFtcInN0YXJ0XCJdXSxcclxuICAgICAgICAgICAgW1wiZmxleC1zdGFydFwiLCBbXCJmbGV4LXN0YXJ0XCJdXSxcclxuICAgICAgICAgICAgW1wiZW5kXCIsIFtcImVuZFwiXV0sXHJcbiAgICAgICAgICAgIFtcImZsZXgtZW5kXCIsIFtcImZsZXgtZW5kXCJdXSxcclxuICAgICAgICAgICAgW1wibm9ybWFsXCIsIFtcIm5vcm1hbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInNwYWNlLWJldHdlZW5cIiwgW1wic3BhY2UtYmV0d2VlblwiXV0sXHJcbiAgICAgICAgICAgIFtcInNwYWNlLWFyb3VuZFwiLCBbXCJzcGFjZS1hcm91bmRcIl1dLFxyXG4gICAgICAgICAgICBbXCJzcGFjZS1ldmVubHlcIiwgW1wic3BhY2UtZXZlbmx5XCJdXSxcclxuICAgICAgICAgICAgW1wic3RyZXRjaFwiLCBbXCJzdHJldGNoXCJdXSxcclxuICAgICAgICAgICAgW1wic2FmZS1jZW50ZXJcIiwgW1wic2FmZSBjZW50ZXJcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNhZmUtY2VudGVyXCIsIFtcInVuc2FmZSBjZW50ZXJcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmhlcml0XCIsIFtcImluaGVyaXRcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbml0aWFsXCIsIFtcImluaXRpYWxcIl1dLFxyXG4gICAgICAgICAgICBbXCJyZXZlcnRcIiwgW1wicmV2ZXJ0XCJdXSxcclxuICAgICAgICAgICAgW1widW5zZXRcIiwgW1widW5zZXRcIl1dXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImp1c3RpZnktY29udGVudFwiLCBbXCItby1qdXN0aWZ5LWNvbnRlbnRcIiwgXCItd2Via2l0LWp1c3RpZnktY29udGVudFwiLCBcImp1c3RpZnktY29udGVudFwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBKdXN0aWZ5Q29udGVudEdlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLkp1c3RpZnlDb250ZW50R2VuZXJhdG9yID0gSnVzdGlmeUNvbnRlbnRHZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5NYXJnaW5HZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgTWFyZ2luR2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKE1hcmdpbkdlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIE1hcmdpbkdlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcIjBcIiwgW1wiMHB4XCJdXSxcclxuICAgICAgICAgICAgW1wiMVwiLCBbXCI0cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCIyXCIsIFtcIjhweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjNcIiwgW1wiMTZweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjRcIiwgW1wiMzJweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjVcIiwgW1wiNjRweFwiXV0sXHJcbiAgICAgICAgICAgIFtcImF1dG9cIiwgW1wiYXV0b1wiXV0sXHJcbiAgICAgICAgICAgIFtcImluaGVyaXRcIiwgW1wiaW5oZXJpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaXRpYWxcIiwgW1wiaW5pdGlhbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJldmVydFwiLCBbXCJyZXZlcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNldFwiLCBbXCJ1bnNldFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwibVwiLCBbXCJtYXJnaW5cIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwibXRcIiwgW1wibWFyZ2luLXRvcFwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJtYlwiLCBbXCJtYXJnaW4tYm90dG9tXCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcIm1sXCIsIFtcIm1hcmdpbi1sZWZ0XCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcIm1yXCIsIFtcIm1hcmdpbi1yaWdodFwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJteFwiLCBbXCJtYXJnaW4tbGVmdFwiLCBcIm1hcmdpbi1yaWdodFwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJteVwiLCBbXCJtYXJnaW4tdG9wXCIsIFwibWFyZ2luLWJvdHRvbVwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWFyZ2luR2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuTWFyZ2luR2VuZXJhdG9yID0gTWFyZ2luR2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuUGFkZGluZ0dlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4vLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIFBhZGRpbmdHZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUGFkZGluZ0dlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFBhZGRpbmdHZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCIwXCIsIFtcIjBweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjFcIiwgW1wiNHB4XCJdXSxcclxuICAgICAgICAgICAgW1wiMlwiLCBbXCI4cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCIzXCIsIFtcIjE2cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCI0XCIsIFtcIjMycHhcIl1dLFxyXG4gICAgICAgICAgICBbXCI1XCIsIFtcIjY0cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmhlcml0XCIsIFtcImluaGVyaXRcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbml0aWFsXCIsIFtcImluaXRpYWxcIl1dLFxyXG4gICAgICAgICAgICBbXCJyZXZlcnRcIiwgW1wicmV2ZXJ0XCJdXSxcclxuICAgICAgICAgICAgW1widW5zZXRcIiwgW1widW5zZXRcIl1dXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcInBcIiwgW1wicGFkZGluZ1wiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJwdFwiLCBbXCJwYWRkaW5nLXRvcFwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJwYlwiLCBbXCJwYWRkaW5nLWJvdHRvbVwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJwbFwiLCBbXCJwYWRkaW5nLWxlZnRcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwicHJcIiwgW1wicGFkZGluZy1yaWdodFwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJweFwiLCBbXCJwYWRkaW5nLWxlZnRcIiwgXCJwYWRkaW5nLXJpZ2h0XCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcInB5XCIsIFtcInBhZGRpbmctdG9wXCIsIFwicGFkZGluZy1ib3R0b21cIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFBhZGRpbmdHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5QYWRkaW5nR2VuZXJhdG9yID0gUGFkZGluZ0dlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLlBvc2l0aW9uR2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIFBvc2l0aW9uR2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFBvc2l0aW9uR2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUG9zaXRpb25HZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCJzdGF0aWNcIiwgW1wic3RhdGljXCJdXSxcclxuICAgICAgICAgICAgW1wicmVsYXRpdmVcIiwgW1wicmVsYXRpdmVcIl1dLFxyXG4gICAgICAgICAgICBbXCJhYnNvbHV0ZVwiLCBbXCJhYnNvbHV0ZVwiXV0sXHJcbiAgICAgICAgICAgIFtcImZpeGVkXCIsIFtcImZpeGVkXCJdXSxcclxuICAgICAgICAgICAgW1wic3RpY2t5XCIsIFtcInN0aWNreVwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaGVyaXRcIiwgW1wiaW5oZXJpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaXRpYWxcIiwgW1wiaW5pdGlhbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJldmVydFwiLCBbXCJyZXZlcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNldFwiLCBbXCJ1bnNldFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwicG9zaXRpb25cIiwgW1wicG9zaXRpb25cIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFBvc2l0aW9uR2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuUG9zaXRpb25HZW5lcmF0b3IgPSBQb3NpdGlvbkdlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLlRleHRBbGlnbkdlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBUZXh0QWxpZ25HZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVGV4dEFsaWduR2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gVGV4dEFsaWduR2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1widW5kZXJsaW5lXCIsIFtcInVuZGVybGluZVwiXV0sXHJcbiAgICAgICAgICAgIFtcIm92ZXJsaW5lXCIsIFtcIm92ZXJsaW5lXCJdXSxcclxuICAgICAgICAgICAgW1wibm9uZVwiLCBbXCJub25lXCJdXSxcclxuICAgICAgICAgICAgW1wic3RhcnRcIiwgW1wic3RhcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJlbmRcIiwgW1wiZW5kXCJdXSxcclxuICAgICAgICAgICAgW1wibGVmdFwiLCBbXCJsZWZ0XCJdXSxcclxuICAgICAgICAgICAgW1wicmlnaHRcIiwgW1wicmlnaHRcIl1dLFxyXG4gICAgICAgICAgICBbXCJjZW50ZXJcIiwgW1wiY2VudGVyXCJdXSxcclxuICAgICAgICAgICAgW1wianVzdGlmeVwiLCBbXCJqdXN0aWZ5XCJdXSxcclxuICAgICAgICAgICAgW1wianVzdGlmeS1hbGxcIiwgW1wianVzdGlmeS1hbGxcIl1dLFxyXG4gICAgICAgICAgICBbXCJtYXRjaC1wYXJlbnRcIiwgW1wibWF0Y2gtcGFyZW50XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5oZXJpdFwiLCBbXCJpbmhlcml0XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5pdGlhbFwiLCBbXCJpbml0aWFsXCJdXSxcclxuICAgICAgICAgICAgW1wicmV2ZXJ0XCIsIFtcInJldmVydFwiXV0sXHJcbiAgICAgICAgICAgIFtcInVuc2V0XCIsIFtcInVuc2V0XCJdXVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJ0ZXh0LWFsaWduXCIsIFtcInRleHQtYWxpZ25cIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gVGV4dEFsaWduR2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuVGV4dEFsaWduR2VuZXJhdG9yID0gVGV4dEFsaWduR2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuVGV4dERlY29yYXRpb25HZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgVGV4dERlY29yYXRpb25HZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVGV4dERlY29yYXRpb25HZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUZXh0RGVjb3JhdGlvbkdlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcInVuZGVybGluZVwiLCBbXCJ1bmRlcmxpbmVcIl1dLFxyXG4gICAgICAgICAgICBbXCJvdmVybGluZVwiLCBbXCJvdmVybGluZVwiXV0sXHJcbiAgICAgICAgICAgIFtcIm5vbmVcIiwgW1wibm9uZVwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaGVyaXRcIiwgW1wiaW5oZXJpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaXRpYWxcIiwgW1wiaW5pdGlhbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJldmVydFwiLCBbXCJyZXZlcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNldFwiLCBbXCJ1bnNldFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwidGV4dC1kZWNvcmF0aW9uXCIsIFtcInRleHQtZGVjb3JhdGlvblwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBUZXh0RGVjb3JhdGlvbkdlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLlRleHREZWNvcmF0aW9uR2VuZXJhdG9yID0gVGV4dERlY29yYXRpb25HZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5XaGl0ZVNwYWNlR2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIFdoaXRlU3BhY2VHZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoV2hpdGVTcGFjZUdlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFdoaXRlU3BhY2VHZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCJub3JtYWxcIiwgW1wibm9ybWFsXCJdXSxcclxuICAgICAgICAgICAgW1wibm93cmFwXCIsIFtcIm5vd3JhcFwiXV0sXHJcbiAgICAgICAgICAgIFtcInByZVwiLCBbXCJwcmVcIl1dLFxyXG4gICAgICAgICAgICBbXCJwcmUtd3JhcFwiLCBbXCJwcmUtd3JhcFwiXV0sXHJcbiAgICAgICAgICAgIFtcInByZS1saW5lXCIsIFtcInByZS1saW5lXCJdXSxcclxuICAgICAgICAgICAgW1wiYnJlYWstc3BhY2VzXCIsIFtcImJyZWFrLXNwYWNlc1wiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwid2hpdGUtc3BhY2VcIiwgW1wid2hpdGUtc3BhY2VcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gV2hpdGVTcGFjZUdlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLldoaXRlU3BhY2VHZW5lcmF0b3IgPSBXaGl0ZVNwYWNlR2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuV2lkdGhHZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgV2lkdGhHZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoV2lkdGhHZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBXaWR0aEdlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcIm1heC1jb250ZW50XCIsIFtcIm1heC1jb250ZW50XCJdXSxcclxuICAgICAgICAgICAgW1wibWluLWNvbnRlbnRcIiwgW1wibWluLWNvbnRlbnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJmaXQtY29udGVudFwiLCBbXCJmaXQtY29udGVudFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjBcIiwgW1wiMCVcIl1dLFxyXG4gICAgICAgICAgICBbXCIxXCIsIFtcIjguMzMzJVwiXV0sXHJcbiAgICAgICAgICAgIFtcIjJcIiwgW1wiMTYuNjY2JVwiXV0sXHJcbiAgICAgICAgICAgIFtcIjNcIiwgW1wiMjUlXCJdXSxcclxuICAgICAgICAgICAgW1wiNFwiLCBbXCIzMy4zMzMlXCJdXSxcclxuICAgICAgICAgICAgW1wiNVwiLCBbXCI0MS42NjYlXCJdXSxcclxuICAgICAgICAgICAgW1wiNlwiLCBbXCI1MCVcIl1dLFxyXG4gICAgICAgICAgICBbXCI3XCIsIFtcIjU4LjMzMyVcIl1dLFxyXG4gICAgICAgICAgICBbXCI4XCIsIFtcIjY2LjY2NiVcIl1dLFxyXG4gICAgICAgICAgICBbXCI5XCIsIFtcIjc1JVwiXV0sXHJcbiAgICAgICAgICAgIFtcIjEwXCIsIFtcIjgzLjMzMyVcIl1dLFxyXG4gICAgICAgICAgICBbXCIxMVwiLCBbXCI5MS42NjYlXCJdXSxcclxuICAgICAgICAgICAgW1wiMTJcIiwgW1wiMTAwJVwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaGVyaXRcIiwgW1wiaW5oZXJpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaXRpYWxcIiwgW1wiaW5pdGlhbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJldmVydFwiLCBbXCJyZXZlcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNldFwiLCBbXCJ1bnNldFwiXV0sXHJcbiAgICAgICAgICAgIFtcInhzXCIsIFtcIjMyMHB4XCJdXSxcclxuICAgICAgICAgICAgW1wic21cIiwgW1wiNTQ0cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCJtZFwiLCBbXCI3NjhweFwiXV0sXHJcbiAgICAgICAgICAgIFtcImxnXCIsIFtcIjEwMTJweFwiXV0sXHJcbiAgICAgICAgICAgIFtcInhsXCIsIFtcIjEyODBweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjE2cHhcIiwgW1wiMTZweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjI0cHhcIiwgW1wiMjRweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjMycHhcIiwgW1wiMzJweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjQ4cHhcIiwgW1wiNDhweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjY0cHhcIiwgW1wiNjRweFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwid1wiLCBbXCJ3aWR0aFwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJtYXgtd1wiLCBbXCJtYXgtd2lkdGhcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwibWluLXdcIiwgW1wibWluLXdpZHRoXCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFdpZHRoR2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuV2lkdGhHZW5lcmF0b3IgPSBXaWR0aEdlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLldvcmRCcmVha0dlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBXb3JkQnJlYWtHZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoV29yZEJyZWFrR2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gV29yZEJyZWFrR2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1wibm9ybWFsXCIsIFtcIm5vcm1hbFwiXV0sXHJcbiAgICAgICAgICAgIFtcImJyZWFrLWFsbFwiLCBbXCJicmVhay1hbGxcIl1dLFxyXG4gICAgICAgICAgICBbXCJrZWVwLWFsbFwiLCBbXCJrZWVwLWFsbFwiXV0sXHJcbiAgICAgICAgICAgIFtcImJyZWFrLXdvcmRcIiwgW1wiYnJlYWstd29yZFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwid29yZC1icmVha1wiLCBbXCJ3b3JkLWJyZWFrXCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFdvcmRCcmVha0dlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLldvcmRCcmVha0dlbmVyYXRvciA9IFdvcmRCcmVha0dlbmVyYXRvcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbnZhciBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcclxudmFyIGNzc3ZpbGxlXzEgPSByZXF1aXJlKFwiLi9jc3N2aWxsZVwiKTtcclxudmFyIHBhdGhNb2R1bGUgPSByZXF1aXJlKFwicGF0aFwiKTtcclxuZnVuY3Rpb24gZ2V0RmlsZXMocGF0aERpcikge1xyXG4gICAgdmFyIGZpbGVzID0gW107XHJcbiAgICB2YXIgZGlycyA9IFtdO1xyXG4gICAgaWYgKHBhdGhEaXIuaW5kZXhPZignLCcpID4gLTEpIHtcclxuICAgICAgICBkaXJzLnB1c2guYXBwbHkoZGlycywgcGF0aERpci5zcGxpdCgnLCcpKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGRpcnMucHVzaChwYXRoRGlyKTtcclxuICAgIH1cclxuICAgIGZvciAodmFyIF9pID0gMCwgZGlyc18xID0gZGlyczsgX2kgPCBkaXJzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGRpcl8xID0gZGlyc18xW19pXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlYWRpbmcgZmlsZXMgZnJvbSBcIi5jb25jYXQoZGlyXzEpKTtcclxuICAgICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoZGlyXzEpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJEaXJlY3RvcnkgJ1wiLmNvbmNhdChwYXRoTW9kdWxlLnJlc29sdmUoZGlyXzEpLCBcIicgbm90IGZvdW5kIVwiKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmaWxlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBfYiA9IGZzLnJlYWRkaXJTeW5jKGRpcl8xKTsgX2EgPCBfYi5sZW5ndGg7IF9hKyspIHtcclxuICAgICAgICAgICAgdmFyIGZpbGUgPSBfYltfYV07XHJcbiAgICAgICAgICAgIHZhciBmdWxsUGF0aCA9IGRpcl8xICsgJy8nICsgZmlsZTtcclxuICAgICAgICAgICAgaWYgKGZzLmxzdGF0U3luYyhmdWxsUGF0aCkuaXNEaXJlY3RvcnkoKSlcclxuICAgICAgICAgICAgICAgIGdldEZpbGVzKGZ1bGxQYXRoKS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7IHJldHVybiBmaWxlcy5wdXNoKHgpOyB9KTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZmlsZXMucHVzaChmdWxsUGF0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZpbGVzO1xyXG59XHJcbnZhciBwYXRoID0gcHJvY2Vzcy5hcmd2WzJdO1xyXG52YXIgZGlyID0gcHJvY2Vzcy5hcmd2WzNdO1xyXG52YXIgZXh0ZW5zaW9ucyA9IHByb2Nlc3MuYXJndls0XTtcclxuaWYgKCFwYXRoKSB7XHJcbiAgICBwYXRoID0gXCJidWlsZC9jc3N2aWxsZS5jc3NcIjtcclxufVxyXG5pZiAoIWV4dGVuc2lvbnMpIHtcclxuICAgIHZhciBjc3MgPSBjc3N2aWxsZV8xLkNzc3ZpbGxlLmdldENzcygpO1xyXG4gICAgZnMud3JpdGVGaWxlKHBhdGgsIGNzcywgZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZyhcImRvbmU6IFwiICsgcGF0aCk7IH0pO1xyXG59XHJcbmVsc2Uge1xyXG4gICAgdmFyIGNsYXNzZXMgPSBbXTtcclxuICAgIHZhciBleEFycmF5ID0gZXh0ZW5zaW9ucy5zcGxpdChcIixcIik7XHJcbiAgICB2YXIgZmlsZXMgPSBnZXRGaWxlcyhkaXIpLmZpbHRlcihmdW5jdGlvbiAoZm4pIHsgcmV0dXJuIGV4QXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7IHJldHVybiBmbi5lbmRzV2l0aChlKTsgfSkubGVuZ3RoID4gMDsgfSk7XHJcbiAgICBmaWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XHJcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZSkudG9TdHJpbmcoKTtcclxuICAgICAgICB2YXIgZXh0ID0gcGF0aE1vZHVsZS5leHRuYW1lKGZpbGUpO1xyXG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBleHQgPT09IFwiLmpzeFwiIHx8IGV4dCA9PT0gXCIudHN4XCIgPyBcImNsYXNzTmFtZT1cIiA6IFwiY2xhc3M9XCI7XHJcbiAgICAgICAgdmFyIHBvcyA9IDA7XHJcbiAgICAgICAgdmFyIGNzc0NsYXNzZXMgPSBcIlwiO1xyXG4gICAgICAgIHdoaWxlIChjb250ZW50LmluZGV4T2YoY2xhc3NOYW1lLCBwb3MpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHBvcyA9IGNvbnRlbnQuaW5kZXhPZihjbGFzc05hbWUsIHBvcykgKyBjbGFzc05hbWUubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAoY29udGVudFtwb3NdID09PSAnXCInKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW5kID0gY29udGVudC5pbmRleE9mKCdcIicsIHBvcyArIDEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVuZCAtIHBvcyA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzc2VzID0gY29udGVudC5zdWJzdHJpbmcocG9zICsgMSwgZW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzc2VzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGFzc2VzLmluZGV4T2YoYykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLnB1c2goYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBvcyA9IGVuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgXCIuY29uY2F0KGZpbGUsIFwiIHByb2Nlc3NlZFwiKSk7XHJcbiAgICB9KTtcclxuICAgIHZhciBjc3MgPSBjc3N2aWxsZV8xLkNzc3ZpbGxlLmdldENzcyhjbGFzc2VzKTtcclxuICAgIGZzLndyaXRlRmlsZShwYXRoLCBjc3MsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRvbmU6ICdcIi5jb25jYXQocGF0aCwgXCInIHdpdGggcGF0dGVybiAnXCIpLmNvbmNhdChleHRlbnNpb25zLCBcIicgZm9yIGRpciAnXCIpLmNvbmNhdChkaXIsIFwiJ1wiKSk7XHJcbiAgICB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=