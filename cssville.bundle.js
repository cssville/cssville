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
    function CssClassData(className, cssProperties, postfixValuesMap) {
        var _this = this;
        this.className = className;
        this.cssProperties = cssProperties;
        this.postfixValuesMap = postfixValuesMap;
        this.cssParts = new Map();
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
                css += ".".concat(className, " { ").concat(value, "} ");
            }
            if (classes.length > 0 && classes.indexOf(className) >= 0) {
                css += ".".concat(className, " { ").concat(value, "} ");
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
            ["black", ["black"]],
            ["white", ["white"]],
            ["transparent", ["transparent"]],
            ["inherit", ["inherit"]],
            ["initial", ["initial"]],
            ["revert", ["revert"]],
            ["unset", ["unset"]]
        ]);
        _this.cssData = [
            new cssClassData_1.CssClassData("bg-color", ["background-color"], _this.postfixValuesMap)
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
            ["wait", ["wait"]],
            ["pointer", ["pointer"]],
            ["progress", ["progress"]],
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
    if (!fs.existsSync(pathDir)) {
        console.error("Directory '".concat(pathModule.resolve(pathDir), "' not found!"));
        return files;
    }
    var _loop_1 = function (file) {
        var fullPath = pathDir + '/' + file;
        if (fs.lstatSync(fullPath).isDirectory())
            getFiles(fullPath).forEach(function (x) { return files.push(file + '/' + x); });
        else
            files.push(file);
    };
    for (var _i = 0, _a = fs.readdirSync(pathDir); _i < _a.length; _i++) {
        var file = _a[_i];
        _loop_1(file);
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
        file = dir + '/' + file;
        var content = fs.readFileSync(file).toString();
        var ext = pathModule.extname(file);
        var className = ext === ".jsx" ? "className=" : "class=";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUQscUNBQXFDLHdCQUF3QixlQUFlO0FBQ2pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9HZW5lcmF0b3JCYXNlLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2Nzc3ZpbGxlLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2RhdGEvY3NzQ2xhc3NEYXRhLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvYWxpZ25JdGVtc0dlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL2JhY2tncm91bmRDb2xvckdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL2JvcmRlclJhZGl1c0dlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL2NvbG9yR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvY3Vyc29yR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvZGlzcGxheUdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL2ZsZXhEaXJlY3Rpb25HZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9mbGV4R3Jvd0dlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL2ZsZXhTaHJpbmtHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9mbGV4V3JhcEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL2Zsb2F0R2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvZm9udFNpemVHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9mb250V2VpZ2h0R2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvaGVpZ2h0R2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvanVzdGlmeUNvbnRlbnRHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9tYXJnaW5HZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9wYWRkaW5nR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvcG9zaXRpb25HZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy90ZXh0QWxpZ25HZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy90ZXh0RGVjb3JhdGlvbkdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL3dpZHRoR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJmc1wiIiwid2VicGFjazovL2Nzc3ZpbGxlL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuR2VuZXJhdG9yQmFzZSA9IHZvaWQgMDtcclxudmFyIEdlbmVyYXRvckJhc2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHZW5lcmF0b3JCYXNlKCkge1xyXG4gICAgICAgIHRoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmNzc0RhdGEgPSBbXTtcclxuICAgIH1cclxuICAgIEdlbmVyYXRvckJhc2UucHJvdG90eXBlLmdlbmVyYXRlID0gZnVuY3Rpb24gKHByZWZpeCwgY2xhc3Nlcykge1xyXG4gICAgICAgIGlmIChwcmVmaXggPT09IHZvaWQgMCkgeyBwcmVmaXggPSBcIlwiOyB9XHJcbiAgICAgICAgaWYgKGNsYXNzZXMgPT09IHZvaWQgMCkgeyBjbGFzc2VzID0gW107IH1cclxuICAgICAgICB2YXIgY3NzUGFydCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jc3NEYXRhLmZvckVhY2goZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgY3NzUGFydCArPSBkYXRhLmdldENzcyhwcmVmaXgsIGNsYXNzZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBjc3NQYXJ0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHZW5lcmF0b3JCYXNlO1xyXG59KCkpO1xyXG5leHBvcnRzLkdlbmVyYXRvckJhc2UgPSBHZW5lcmF0b3JCYXNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5Dc3N2aWxsZSA9IHZvaWQgMDtcclxudmFyIHBhZGRpbmdHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvcGFkZGluZ0dlbmVyYXRvclwiKTtcclxudmFyIG1hcmdpbkdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy9tYXJnaW5HZW5lcmF0b3JcIik7XHJcbnZhciBkaXNwbGF5R2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2Rpc3BsYXlHZW5lcmF0b3JcIik7XHJcbnZhciBmbGV4RGlyZWN0aW9uR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2ZsZXhEaXJlY3Rpb25HZW5lcmF0b3JcIik7XHJcbnZhciBmbGV4R3Jvd0dlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy9mbGV4R3Jvd0dlbmVyYXRvclwiKTtcclxudmFyIGZsZXhXcmFwR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2ZsZXhXcmFwR2VuZXJhdG9yXCIpO1xyXG52YXIgZmxleFNocmlua0dlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy9mbGV4U2hyaW5rR2VuZXJhdG9yXCIpO1xyXG52YXIgZmxvYXRHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvZmxvYXRHZW5lcmF0b3JcIik7XHJcbnZhciBmb250V2VpZ2h0R2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2ZvbnRXZWlnaHRHZW5lcmF0b3JcIik7XHJcbnZhciB3aWR0aEdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy93aWR0aEdlbmVyYXRvclwiKTtcclxudmFyIGZvbnRTaXplR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2ZvbnRTaXplR2VuZXJhdG9yXCIpO1xyXG52YXIgcG9zaXRpb25HZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvcG9zaXRpb25HZW5lcmF0b3JcIik7XHJcbnZhciBhbGlnbkl0ZW1zR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2FsaWduSXRlbXNHZW5lcmF0b3JcIik7XHJcbnZhciBqdXN0aWZ5Q29udGVudEdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy9qdXN0aWZ5Q29udGVudEdlbmVyYXRvclwiKTtcclxudmFyIHRleHREZWNvcmF0aW9uR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL3RleHREZWNvcmF0aW9uR2VuZXJhdG9yXCIpO1xyXG52YXIgaGVpZ2h0R2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2hlaWdodEdlbmVyYXRvclwiKTtcclxudmFyIGNvbG9yR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2NvbG9yR2VuZXJhdG9yXCIpO1xyXG52YXIgYm9yZGVyUmFkaXVzR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2JvcmRlclJhZGl1c0dlbmVyYXRvclwiKTtcclxudmFyIGN1cnNvckdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy9jdXJzb3JHZW5lcmF0b3JcIik7XHJcbnZhciBiYWNrZ3JvdW5kQ29sb3JHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvYmFja2dyb3VuZENvbG9yR2VuZXJhdG9yXCIpO1xyXG52YXIgdGV4dEFsaWduR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL3RleHRBbGlnbkdlbmVyYXRvclwiKTtcclxudmFyIENzc3ZpbGxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ3NzdmlsbGUoKSB7XHJcbiAgICB9XHJcbiAgICBDc3N2aWxsZS5nZXRDc3MgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xyXG4gICAgICAgIGlmIChjbGFzc2VzID09PSB2b2lkIDApIHsgY2xhc3NlcyA9IFtdOyB9XHJcbiAgICAgICAgdmFyIGNzcyA9IFwiXCI7XHJcbiAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBDc3N2aWxsZS5nZW5lcmF0b3JzLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIHZhciBnID0gQ3NzdmlsbGUuZ2VuZXJhdG9yc1t4XTtcclxuICAgICAgICAgICAgdmFyIGNzc1BhcnQgPSBnLmdlbmVyYXRlKFwiXCIsIGNsYXNzZXMpO1xyXG4gICAgICAgICAgICBjc3MgKz0gY3NzUGFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcmVmaXhWYWx1ZU1hcC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBpbm5lckNzcyA9IFwiXCI7XHJcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBrZXk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgQ3NzdmlsbGUuZ2VuZXJhdG9ycy5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGcgPSBDc3N2aWxsZS5nZW5lcmF0b3JzW3hdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNzc1BhcnRGb3JQcmVmaXggPSBnLmdlbmVyYXRlKHByZWZpeCwgY2xhc3Nlcyk7XHJcbiAgICAgICAgICAgICAgICBpbm5lckNzcyArPSBjc3NQYXJ0Rm9yUHJlZml4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNzcyArPSBcIkBtZWRpYSAobWF4LXdpZHRoOiBcIi5jb25jYXQodmFsdWUsIFwiKSB7IFwiKS5jb25jYXQoaW5uZXJDc3MsIFwifSBcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGNzcztcclxuICAgIH07XHJcbiAgICBDc3N2aWxsZS5wcmVmaXhWYWx1ZU1hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgIFtcInhsXCIsIFwiMTI4MHB4XCJdLFxyXG4gICAgICAgIFtcImxnXCIsIFwiMTAxMnB4XCJdLFxyXG4gICAgICAgIFtcIm1kXCIsIFwiNzY4cHhcIl0sXHJcbiAgICAgICAgW1wic21cIiwgXCI1NDRweFwiXSxcclxuICAgICAgICBbXCJ4c1wiLCBcIjMyMHB4XCJdLFxyXG4gICAgXSk7XHJcbiAgICBDc3N2aWxsZS5nZW5lcmF0b3JzID0gW1xyXG4gICAgICAgIG5ldyBhbGlnbkl0ZW1zR2VuZXJhdG9yXzEuQWxpZ25JdGVtc0dlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyBib3JkZXJSYWRpdXNHZW5lcmF0b3JfMS5Cb3JkZXJSYWRpdXNHZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgYmFja2dyb3VuZENvbG9yR2VuZXJhdG9yXzEuQmFja2dyb3VuZENvbG9yR2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IGNvbG9yR2VuZXJhdG9yXzEuQ29sb3JHZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgY3Vyc29yR2VuZXJhdG9yXzEuQ3Vyc29yR2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IHBhZGRpbmdHZW5lcmF0b3JfMS5QYWRkaW5nR2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IG1hcmdpbkdlbmVyYXRvcl8xLk1hcmdpbkdlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyBkaXNwbGF5R2VuZXJhdG9yXzEuRGlzcGxheUdlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyBmbGV4RGlyZWN0aW9uR2VuZXJhdG9yXzEuRmxleERpcmVjdGlvbkdlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyBmbGV4R3Jvd0dlbmVyYXRvcl8xLkZsZXhHcm93R2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IGZsZXhTaHJpbmtHZW5lcmF0b3JfMS5GbGV4U2hyaW5rR2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IGZsZXhXcmFwR2VuZXJhdG9yXzEuRmxleFdyYXBHZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgZmxvYXRHZW5lcmF0b3JfMS5GbG9hdEdlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyBmb250U2l6ZUdlbmVyYXRvcl8xLkZvbnRTaXplR2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IGZvbnRXZWlnaHRHZW5lcmF0b3JfMS5Gb250V2VpZ2h0R2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IGhlaWdodEdlbmVyYXRvcl8xLkhlaWdodEdlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyBqdXN0aWZ5Q29udGVudEdlbmVyYXRvcl8xLkp1c3RpZnlDb250ZW50R2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IHdpZHRoR2VuZXJhdG9yXzEuV2lkdGhHZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgdGV4dEFsaWduR2VuZXJhdG9yXzEuVGV4dEFsaWduR2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IHRleHREZWNvcmF0aW9uR2VuZXJhdG9yXzEuVGV4dERlY29yYXRpb25HZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgcG9zaXRpb25HZW5lcmF0b3JfMS5Qb3NpdGlvbkdlbmVyYXRvcigpLFxyXG4gICAgXTtcclxuICAgIHJldHVybiBDc3N2aWxsZTtcclxufSgpKTtcclxuZXhwb3J0cy5Dc3N2aWxsZSA9IENzc3ZpbGxlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5Dc3NDbGFzc0RhdGEgPSB2b2lkIDA7XHJcbnZhciBDc3NDbGFzc0RhdGEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDc3NDbGFzc0RhdGEoY2xhc3NOYW1lLCBjc3NQcm9wZXJ0aWVzLCBwb3N0Zml4VmFsdWVzTWFwKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgICAgICB0aGlzLmNzc1Byb3BlcnRpZXMgPSBjc3NQcm9wZXJ0aWVzO1xyXG4gICAgICAgIHRoaXMucG9zdGZpeFZhbHVlc01hcCA9IHBvc3RmaXhWYWx1ZXNNYXA7XHJcbiAgICAgICAgdGhpcy5jc3NQYXJ0cyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLnBvc3RmaXhWYWx1ZXNNYXAuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICB2YXIgcG9zdGZpeCA9IGtleTtcclxuICAgICAgICAgICAgdmFyIGlubmVyUHJvcGVydGllcyA9IFwiXCI7XHJcbiAgICAgICAgICAgIF90aGlzLmNzc1Byb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiAoY3NzUHJvcGVydHkpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbm5lclByb3BlcnRpZXMgKz0gXCJcIi5jb25jYXQoY3NzUHJvcGVydHksIFwiOiBcIikuY29uY2F0KHYsIFwiOyBcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLmNzc1BhcnRzLnNldChcIlwiLmNvbmNhdChfdGhpcy5jbGFzc05hbWUsIFwiLVwiKS5jb25jYXQocG9zdGZpeCksIGlubmVyUHJvcGVydGllcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBDc3NDbGFzc0RhdGEucHJvdG90eXBlLmdldENzcyA9IGZ1bmN0aW9uIChwcmVmaXgsIGNsYXNzZXMpIHtcclxuICAgICAgICBpZiAocHJlZml4ID09PSB2b2lkIDApIHsgcHJlZml4ID0gXCJcIjsgfVxyXG4gICAgICAgIHZhciBjc3MgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuY3NzUGFydHMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gXCJcIi5jb25jYXQocHJlZml4ID09PSBcIlwiID8gXCJcIiA6IFwiXCIuY29uY2F0KHByZWZpeCwgXCItXCIpKS5jb25jYXQoa2V5KTtcclxuICAgICAgICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjc3MgKz0gXCIuXCIuY29uY2F0KGNsYXNzTmFtZSwgXCIgeyBcIikuY29uY2F0KHZhbHVlLCBcIn0gXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDAgJiYgY2xhc3Nlcy5pbmRleE9mKGNsYXNzTmFtZSkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgY3NzICs9IFwiLlwiLmNvbmNhdChjbGFzc05hbWUsIFwiIHsgXCIpLmNvbmNhdCh2YWx1ZSwgXCJ9IFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBjc3M7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENzc0NsYXNzRGF0YTtcclxufSgpKTtcclxuZXhwb3J0cy5Dc3NDbGFzc0RhdGEgPSBDc3NDbGFzc0RhdGE7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5BbGlnbkl0ZW1zR2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIEFsaWduSXRlbXNHZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQWxpZ25JdGVtc0dlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEFsaWduSXRlbXNHZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCJub3JtYWxcIiwgW1wibm9ybWFsXCJdXSxcclxuICAgICAgICAgICAgW1wic3RyZXRjaFwiLCBbXCJzdHJldGNoXCJdXSxcclxuICAgICAgICAgICAgW1wiY2VudGVyXCIsIFtcImNlbnRlclwiXV0sXHJcbiAgICAgICAgICAgIFtcInN0YXJ0XCIsIFtcInN0YXJ0XCJdXSxcclxuICAgICAgICAgICAgW1wiZmxleC1zdGFydFwiLCBbXCJmbGV4LXN0YXJ0XCJdXSxcclxuICAgICAgICAgICAgW1wiZW5kXCIsIFtcImVuZFwiXV0sXHJcbiAgICAgICAgICAgIFtcImZsZXgtZW5kXCIsIFtcImZsZXgtZW5kXCJdXSxcclxuICAgICAgICAgICAgW1wiYmFzZWxpbmVcIiwgW1wiYmFzZWxpbmVcIl1dLFxyXG4gICAgICAgICAgICBbXCJmaXJzdC1iYXNlbGluZVwiLCBbXCJmaXJzdCBiYXNlbGluZVwiXV0sXHJcbiAgICAgICAgICAgIFtcImxhc3QtYmFzZWxpbmVcIiwgW1wibGFzdCBiYXNlbGluZVwiXV0sXHJcbiAgICAgICAgICAgIFtcInNhZmUtY2VudGVyXCIsIFtcInNhZmUgY2VudGVyXCJdXSxcclxuICAgICAgICAgICAgW1widW5zYWZlLWNlbnRlclwiLCBbXCJ1bnNhZmUgY2VudGVyXCJdXSxcclxuICAgICAgICAgICAgW1wiaW5oZXJpdFwiLCBbXCJpbmhlcml0XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5pdGlhbFwiLCBbXCJpbml0aWFsXCJdXSxcclxuICAgICAgICAgICAgW1wicmV2ZXJ0XCIsIFtcInJldmVydFwiXV0sXHJcbiAgICAgICAgICAgIFtcInVuc2V0XCIsIFtcInVuc2V0XCJdXVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJhbGlnbi1pdGVtc1wiLCBbXCItbXMtYWxpZ24taXRlbXNcIiwgXCItby1hbGlnbi1pdGVtc1wiLCBcIi13ZWJraXQtYWxpZ24taXRlbXNcIiwgXCJhbGlnbi1pdGVtc1wiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBBbGlnbkl0ZW1zR2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuQWxpZ25JdGVtc0dlbmVyYXRvciA9IEFsaWduSXRlbXNHZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5CYWNrZ3JvdW5kQ29sb3JHZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgQmFja2dyb3VuZENvbG9yR2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEJhY2tncm91bmRDb2xvckdlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEJhY2tncm91bmRDb2xvckdlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcImJsYWNrXCIsIFtcImJsYWNrXCJdXSxcclxuICAgICAgICAgICAgW1wid2hpdGVcIiwgW1wid2hpdGVcIl1dLFxyXG4gICAgICAgICAgICBbXCJ0cmFuc3BhcmVudFwiLCBbXCJ0cmFuc3BhcmVudFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaGVyaXRcIiwgW1wiaW5oZXJpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaXRpYWxcIiwgW1wiaW5pdGlhbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJldmVydFwiLCBbXCJyZXZlcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNldFwiLCBbXCJ1bnNldFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiYmctY29sb3JcIiwgW1wiYmFja2dyb3VuZC1jb2xvclwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBCYWNrZ3JvdW5kQ29sb3JHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5CYWNrZ3JvdW5kQ29sb3JHZW5lcmF0b3IgPSBCYWNrZ3JvdW5kQ29sb3JHZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5Cb3JkZXJSYWRpdXNHZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgQm9yZGVyUmFkaXVzR2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEJvcmRlclJhZGl1c0dlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEJvcmRlclJhZGl1c0dlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcIjBcIiwgW1wiMHB4XCJdXSxcclxuICAgICAgICAgICAgW1wiMVwiLCBbXCI0cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCIyXCIsIFtcIjhweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjNcIiwgW1wiMTZweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjRcIiwgW1wiMzJweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjVcIiwgW1wiNjRweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjUwcFwiLCBbXCI1MCVcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmhlcml0XCIsIFtcImluaGVyaXRcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbml0aWFsXCIsIFtcImluaXRpYWxcIl1dLFxyXG4gICAgICAgICAgICBbXCJyZXZlcnRcIiwgW1wicmV2ZXJ0XCJdXSxcclxuICAgICAgICAgICAgW1widW5zZXRcIiwgW1widW5zZXRcIl1dXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImJyXCIsIFtcIi1tcy1ib3JkZXItcmFkaXVzXCIsIFwiYm9yZGVyLXJhZGl1c1wiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJici10b3AtbGVmdFwiLCBbXCItbXMtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c1wiLCBcImJvcmRlci10b3AtbGVmdC1yYWRpdXNcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiYnItdG9wLXJpZ2h0XCIsIFtcIi1tcy1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1c1wiLCBcImJvcmRlci10b3AtcmlnaHQtcmFkaXVzXCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImJyLWJvdHRvbS1yaWdodFwiLCBbXCItbXMtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNcIiwgXCJib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c1wiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJici1ib3R0b20tbGVmdFwiLCBbXCItbXMtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c1wiLCBcImJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQm9yZGVyUmFkaXVzR2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuQm9yZGVyUmFkaXVzR2VuZXJhdG9yID0gQm9yZGVyUmFkaXVzR2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuQ29sb3JHZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgQ29sb3JHZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQ29sb3JHZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBDb2xvckdlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcImJsYWNrXCIsIFtcImJsYWNrXCJdXSxcclxuICAgICAgICAgICAgW1wid2hpdGVcIiwgW1wid2hpdGVcIl1dLFxyXG4gICAgICAgICAgICBbXCJ0cmFuc3BhcmVudFwiLCBbXCJ0cmFuc3BhcmVudFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaGVyaXRcIiwgW1wiaW5oZXJpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaXRpYWxcIiwgW1wiaW5pdGlhbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJldmVydFwiLCBbXCJyZXZlcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNldFwiLCBbXCJ1bnNldFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiY29sb3JcIiwgW1wiY29sb3JcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ29sb3JHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5Db2xvckdlbmVyYXRvciA9IENvbG9yR2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuQ3Vyc29yR2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIEN1cnNvckdlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhDdXJzb3JHZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBDdXJzb3JHZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCJ3YWl0XCIsIFtcIndhaXRcIl1dLFxyXG4gICAgICAgICAgICBbXCJwb2ludGVyXCIsIFtcInBvaW50ZXJcIl1dLFxyXG4gICAgICAgICAgICBbXCJwcm9ncmVzc1wiLCBbXCJwcm9ncmVzc1wiXV0sXHJcbiAgICAgICAgICAgIFtcImRlZmF1bHRcIiwgW1wiZGVmYXVsdFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiY3Vyc29yXCIsIFtcImN1cnNvclwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBDdXJzb3JHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5DdXJzb3JHZW5lcmF0b3IgPSBDdXJzb3JHZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5EaXNwbGF5R2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIERpc3BsYXlHZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRGlzcGxheUdlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIERpc3BsYXlHZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCJibG9ja1wiLCBbXCJibG9ja1wiXV0sXHJcbiAgICAgICAgICAgIFtcImlubGluZVwiLCBbXCJpbmxpbmVcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmxpbmUtYmxvY2tcIiwgW1wiaW5saW5lLWJsb2NrXCJdXSxcclxuICAgICAgICAgICAgW1wiZmxleFwiLCBbXCJmbGV4XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5saW5lLWZsZXhcIiwgW1wiaW5saW5lLWZsZXhcIl1dLFxyXG4gICAgICAgICAgICBbXCJncmlkXCIsIFtcImdyaWRcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmxpbmUtZ3JpZFwiLCBbXCJpbmxpbmUtZ3JpZFwiXV0sXHJcbiAgICAgICAgICAgIFtcImZsb3ctcm9vdFwiLCBbXCJmbG93LXJvb3RcIl1dLFxyXG4gICAgICAgICAgICBbXCJub25lXCIsIFtcIm5vbmVcIl1dLFxyXG4gICAgICAgICAgICBbXCJjb250ZW50c1wiLCBbXCJjb250ZW50c1wiXV0sXHJcbiAgICAgICAgICAgIFtcImJsb2NrLWZsb3dcIiwgW1wiYmxvY2sgZmxvd1wiXV0sXHJcbiAgICAgICAgICAgIFtcImlubGluZS1mbG93XCIsIFtcImlubGluZSBmbG93XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5saW5lLWZsb3ctcm9vdFwiLCBbXCJpbmxpbmUgZmxvdy1yb290XCJdXSxcclxuICAgICAgICAgICAgW1wiYmxvY2stZmxleFwiLCBbXCJibG9jayBmbGV4XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5saW5lLWZsZXhcIiwgW1wiaW5saW5lIGZsZXhcIl1dLFxyXG4gICAgICAgICAgICBbXCJibG9jay1ncmlkXCIsIFtcImJsb2NrIGdyaWRcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmxpbmUtZ3JpZFwiLCBbXCJpbmxpbmUgZ3JpZFwiXV0sXHJcbiAgICAgICAgICAgIFtcImJsb2NrLWZsb3ctcm9vdFwiLCBbXCJibG9jayBmbG93LXJvb3RcIl1dLFxyXG4gICAgICAgICAgICBbXCJ0YWJsZVwiLCBbXCJ0YWJsZVwiXV0sXHJcbiAgICAgICAgICAgIFtcInRhYmxlLXJvd1wiLCBbXCJ0YWJsZS1yb3dcIl1dLFxyXG4gICAgICAgICAgICBbXCJ0YWJsZS1jb2x1bW5cIiwgW1widGFibGUtY29sdW1uXCJdXSxcclxuICAgICAgICAgICAgW1widGFibGUtY2VsbFwiLCBbXCJ0YWJsZS1jZWxsXCJdXSxcclxuICAgICAgICAgICAgW1wibGlzdC1pdGVtXCIsIFtcImxpc3QtaXRlbVwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaGVyaXRcIiwgW1wiaW5oZXJpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaXRpYWxcIiwgW1wiaW5pdGlhbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJldmVydFwiLCBbXCJyZXZlcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNldFwiLCBbXCJ1bnNldFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiZFwiLCBbXCJkaXNwbGF5XCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIERpc3BsYXlHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5EaXNwbGF5R2VuZXJhdG9yID0gRGlzcGxheUdlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkZsZXhEaXJlY3Rpb25HZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgRmxleERpcmVjdGlvbkdlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhGbGV4RGlyZWN0aW9uR2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRmxleERpcmVjdGlvbkdlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcInJvd1wiLCBbXCJyb3dcIl1dLFxyXG4gICAgICAgICAgICBbXCJyb3ctcmV2ZXJzZVwiLCBbXCJyb3ctcmV2ZXJzZVwiXV0sXHJcbiAgICAgICAgICAgIFtcImNvbHVtblwiLCBbXCJjb2x1bW5cIl1dLFxyXG4gICAgICAgICAgICBbXCJjb2x1bW4tcmV2ZXJzZVwiLCBbXCJjb2x1bW4tcmV2ZXJzZVwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaGVyaXRcIiwgW1wiaW5oZXJpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaXRpYWxcIiwgW1wiaW5pdGlhbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJldmVydFwiLCBbXCJyZXZlcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNldFwiLCBbXCJ1bnNldFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiZmxleC1kaXJlY3Rpb25cIiwgW1wiZmxleC1kaXJlY3Rpb25cIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRmxleERpcmVjdGlvbkdlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLkZsZXhEaXJlY3Rpb25HZW5lcmF0b3IgPSBGbGV4RGlyZWN0aW9uR2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuRmxleEdyb3dHZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgRmxleEdyb3dHZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRmxleEdyb3dHZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGbGV4R3Jvd0dlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcIjBcIiwgW1wiMFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjFcIiwgW1wiMVwiXV0sXHJcbiAgICAgICAgICAgIFtcIjJcIiwgW1wiMlwiXV0sXHJcbiAgICAgICAgICAgIFtcIjNcIiwgW1wiM1wiXV0sXHJcbiAgICAgICAgICAgIFtcImluaGVyaXRcIiwgW1wiaW5oZXJpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaXRpYWxcIiwgW1wiaW5pdGlhbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJldmVydFwiLCBbXCJyZXZlcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNldFwiLCBbXCJ1bnNldFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiZmxleC1ncm93XCIsIFtcIi1vLWZsZXgtZ3Jvd1wiLCBcIi13ZWJraXQtZmxleC1ncm93XCIsIFwiZmxleC1ncm93XCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEZsZXhHcm93R2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuRmxleEdyb3dHZW5lcmF0b3IgPSBGbGV4R3Jvd0dlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkZsZXhTaHJpbmtHZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgRmxleFNocmlua0dlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhGbGV4U2hyaW5rR2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRmxleFNocmlua0dlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcIjBcIiwgW1wiMFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjFcIiwgW1wiMVwiXV0sXHJcbiAgICAgICAgICAgIFtcIjJcIiwgW1wiMlwiXV0sXHJcbiAgICAgICAgICAgIFtcIjNcIiwgW1wiM1wiXV0sXHJcbiAgICAgICAgICAgIFtcImluaGVyaXRcIiwgW1wiaW5oZXJpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaXRpYWxcIiwgW1wiaW5pdGlhbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJldmVydFwiLCBbXCJyZXZlcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNldFwiLCBbXCJ1bnNldFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiZmxleC1zaHJpbmtcIiwgW1wiLW8tZmxleC1zaHJpbmtcIiwgXCItd2Via2l0LWZsZXgtc2hyaW5rXCIsIFwiZmxleC1zaHJpbmtcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRmxleFNocmlua0dlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLkZsZXhTaHJpbmtHZW5lcmF0b3IgPSBGbGV4U2hyaW5rR2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuRmxleFdyYXBHZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgRmxleFdyYXBHZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRmxleFdyYXBHZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGbGV4V3JhcEdlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcIm5vd3JhcFwiLCBbXCJub3dyYXBcIl1dLFxyXG4gICAgICAgICAgICBbXCJ3cmFwXCIsIFtcIndyYXBcIl1dLFxyXG4gICAgICAgICAgICBbXCJ3cmFwLXJldmVyc2VcIiwgW1wid3JhcC1yZXZlcnNlXCJdXSxcclxuICAgICAgICAgICAgW1wiaW5oZXJpdFwiLCBbXCJpbmhlcml0XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5pdGlhbFwiLCBbXCJpbml0aWFsXCJdXSxcclxuICAgICAgICAgICAgW1wicmV2ZXJ0XCIsIFtcInJldmVydFwiXV0sXHJcbiAgICAgICAgICAgIFtcInVuc2V0XCIsIFtcInVuc2V0XCJdXVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJmbGV4LXdyYXBcIiwgW1wiLW1vei1mbGV4LXdyYXBcIiwgXCItbXMtZmxleC13cmFwXCIsIFwiLW8tZmxleC13cmFwXCIsIFwiLXdlYmtpdC1mbGV4LXdyYXBcIiwgXCJmbGV4LXdyYXBcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRmxleFdyYXBHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5GbGV4V3JhcEdlbmVyYXRvciA9IEZsZXhXcmFwR2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuRmxvYXRHZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgRmxvYXRHZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRmxvYXRHZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGbG9hdEdlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcImxlZnRcIiwgW1wibGVmdFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJpZ2h0XCIsIFtcInJpZ2h0XCJdXSxcclxuICAgICAgICAgICAgW1wibm9uZVwiLCBbXCJub25lXCJdXSxcclxuICAgICAgICAgICAgW1wiaW5oZXJpdFwiLCBbXCJpbmhlcml0XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5pdGlhbFwiLCBbXCJpbml0aWFsXCJdXSxcclxuICAgICAgICAgICAgW1wicmV2ZXJ0XCIsIFtcInJldmVydFwiXV0sXHJcbiAgICAgICAgICAgIFtcInVuc2V0XCIsIFtcInVuc2V0XCJdXVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJmbG9hdFwiLCBbXCJmbG9hdFwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBGbG9hdEdlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLkZsb2F0R2VuZXJhdG9yID0gRmxvYXRHZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5Gb250U2l6ZUdlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBGb250U2l6ZUdlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhGb250U2l6ZUdlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEZvbnRTaXplR2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1wieHgtc21hbGxcIiwgW1wieHgtc21hbGxcIl1dLFxyXG4gICAgICAgICAgICBbXCJ4LXNtYWxsXCIsIFtcIngtc21hbGxcIl1dLFxyXG4gICAgICAgICAgICBbXCJzbWFsbFwiLCBbXCJzbWFsbFwiXV0sXHJcbiAgICAgICAgICAgIFtcIm1lZGl1bVwiLCBbXCJtZWRpdW1cIl1dLFxyXG4gICAgICAgICAgICBbXCJsYXJnZVwiLCBbXCJsYXJnZVwiXV0sXHJcbiAgICAgICAgICAgIFtcIngtbGFyZ2VcIiwgW1wieC1sYXJnZVwiXV0sXHJcbiAgICAgICAgICAgIFtcInh4LWxhcmdlXCIsIFtcInh4LWxhcmdlXCJdXSxcclxuICAgICAgICAgICAgW1wieHh4LWxhcmdlXCIsIFtcIjQ4cHhcIiwgXCJ4eHgtbGFyZ2VcIl1dLFxyXG4gICAgICAgICAgICBbXCJzbWFsbGVyXCIsIFtcInNtYWxsZXJcIl1dLFxyXG4gICAgICAgICAgICBbXCJsYXJnZXJcIiwgW1wibGFyZ2VyXCJdXSxcclxuICAgICAgICAgICAgW1wiMXJlbVwiLCBbXCIxcmVtXCJdXSxcclxuICAgICAgICAgICAgW1wiMnJlbVwiLCBbXCIycmVtXCJdXSxcclxuICAgICAgICAgICAgW1wiM3JlbVwiLCBbXCIzcmVtXCJdXSxcclxuICAgICAgICAgICAgW1wiNHJlbVwiLCBbXCI0cmVtXCJdXSxcclxuICAgICAgICAgICAgW1wiNXJlbVwiLCBbXCI1cmVtXCJdXSxcclxuICAgICAgICAgICAgW1wiaW5oZXJpdFwiLCBbXCJpbmhlcml0XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5pdGlhbFwiLCBbXCJpbml0aWFsXCJdXSxcclxuICAgICAgICAgICAgW1wicmV2ZXJ0XCIsIFtcInJldmVydFwiXV0sXHJcbiAgICAgICAgICAgIFtcInVuc2V0XCIsIFtcInVuc2V0XCJdXVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJmc1wiLCBbXCJmb250LXNpemVcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRm9udFNpemVHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5Gb250U2l6ZUdlbmVyYXRvciA9IEZvbnRTaXplR2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuRm9udFdlaWdodEdlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBGb250V2VpZ2h0R2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZvbnRXZWlnaHRHZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGb250V2VpZ2h0R2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1wibm9ybWFsXCIsIFtcIm5vcm1hbFwiXV0sXHJcbiAgICAgICAgICAgIFtcImJvbGRcIiwgW1wiYm9sZFwiXV0sXHJcbiAgICAgICAgICAgIFtcImxpZ2h0ZXJcIiwgW1wibGlnaHRlclwiXV0sXHJcbiAgICAgICAgICAgIFtcImJvbGRlclwiLCBbXCJib2xkZXJcIl1dLFxyXG4gICAgICAgICAgICBbXCIxMDBcIiwgW1wiMTAwXCJdXSxcclxuICAgICAgICAgICAgW1wiMjAwXCIsIFtcIjIwMFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjMwMFwiLCBbXCIzMDBcIl1dLFxyXG4gICAgICAgICAgICBbXCI0MDBcIiwgW1wiNDAwXCJdXSxcclxuICAgICAgICAgICAgW1wiNTAwXCIsIFtcIjUwMFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjYwMFwiLCBbXCI2MDBcIl1dLFxyXG4gICAgICAgICAgICBbXCI3MDBcIiwgW1wiNzAwXCJdXSxcclxuICAgICAgICAgICAgW1wiODAwXCIsIFtcIjgwMFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjkwMFwiLCBbXCI5MDBcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmhlcml0XCIsIFtcImluaGVyaXRcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbml0aWFsXCIsIFtcImluaXRpYWxcIl1dLFxyXG4gICAgICAgICAgICBbXCJyZXZlcnRcIiwgW1wicmV2ZXJ0XCJdXSxcclxuICAgICAgICAgICAgW1widW5zZXRcIiwgW1widW5zZXRcIl1dXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImZ3XCIsIFtcImZvbnQtd2VpZ2h0XCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEZvbnRXZWlnaHRHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5Gb250V2VpZ2h0R2VuZXJhdG9yID0gRm9udFdlaWdodEdlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkhlaWdodEdlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBIZWlnaHRHZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoSGVpZ2h0R2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gSGVpZ2h0R2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1wiYXV0b1wiLCBbXCJhdXRvXCJdXSxcclxuICAgICAgICAgICAgW1wibWF4LWNvbnRlbnRcIiwgW1wibWF4LWNvbnRlbnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJtaW4tY29udGVudFwiLCBbXCJtaW4tY29udGVudFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaGVyaXRcIiwgW1wiaW5oZXJpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaXRpYWxcIiwgW1wiaW5pdGlhbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJldmVydFwiLCBbXCJyZXZlcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNldFwiLCBbXCJ1bnNldFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjE2cHhcIiwgW1wiMTZweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjI0cHhcIiwgW1wiMjRweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjMycHhcIiwgW1wiMzJweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjQ4cHhcIiwgW1wiNDhweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjY0cHhcIiwgW1wiNjRweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjEwMFwiLCBbXCIxMDAlXCJdXSxcclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiaFwiLCBbXCJoZWlnaHRcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwibWF4LWhcIiwgW1wibWF4LWhlaWdodFwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJtaW4taFwiLCBbXCJtaW4taGVpZ2h0XCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEhlaWdodEdlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLkhlaWdodEdlbmVyYXRvciA9IEhlaWdodEdlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkp1c3RpZnlDb250ZW50R2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIEp1c3RpZnlDb250ZW50R2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEp1c3RpZnlDb250ZW50R2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gSnVzdGlmeUNvbnRlbnRHZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCJjZW50ZXJcIiwgW1wiY2VudGVyXCJdXSxcclxuICAgICAgICAgICAgW1wic3RhcnRcIiwgW1wic3RhcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJmbGV4LXN0YXJ0XCIsIFtcImZsZXgtc3RhcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJlbmRcIiwgW1wiZW5kXCJdXSxcclxuICAgICAgICAgICAgW1wiZmxleC1lbmRcIiwgW1wiZmxleC1lbmRcIl1dLFxyXG4gICAgICAgICAgICBbXCJub3JtYWxcIiwgW1wibm9ybWFsXCJdXSxcclxuICAgICAgICAgICAgW1wic3BhY2UtYmV0d2VlblwiLCBbXCJzcGFjZS1iZXR3ZWVuXCJdXSxcclxuICAgICAgICAgICAgW1wic3BhY2UtYXJvdW5kXCIsIFtcInNwYWNlLWFyb3VuZFwiXV0sXHJcbiAgICAgICAgICAgIFtcInNwYWNlLWV2ZW5seVwiLCBbXCJzcGFjZS1ldmVubHlcIl1dLFxyXG4gICAgICAgICAgICBbXCJzdHJldGNoXCIsIFtcInN0cmV0Y2hcIl1dLFxyXG4gICAgICAgICAgICBbXCJzYWZlLWNlbnRlclwiLCBbXCJzYWZlIGNlbnRlclwiXV0sXHJcbiAgICAgICAgICAgIFtcInVuc2FmZS1jZW50ZXJcIiwgW1widW5zYWZlIGNlbnRlclwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaGVyaXRcIiwgW1wiaW5oZXJpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaXRpYWxcIiwgW1wiaW5pdGlhbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJldmVydFwiLCBbXCJyZXZlcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNldFwiLCBbXCJ1bnNldFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwianVzdGlmeS1jb250ZW50XCIsIFtcIi1vLWp1c3RpZnktY29udGVudFwiLCBcIi13ZWJraXQtanVzdGlmeS1jb250ZW50XCIsIFwianVzdGlmeS1jb250ZW50XCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEp1c3RpZnlDb250ZW50R2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuSnVzdGlmeUNvbnRlbnRHZW5lcmF0b3IgPSBKdXN0aWZ5Q29udGVudEdlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLk1hcmdpbkdlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBNYXJnaW5HZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoTWFyZ2luR2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gTWFyZ2luR2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1wiMFwiLCBbXCIwcHhcIl1dLFxyXG4gICAgICAgICAgICBbXCIxXCIsIFtcIjRweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjJcIiwgW1wiOHB4XCJdXSxcclxuICAgICAgICAgICAgW1wiM1wiLCBbXCIxNnB4XCJdXSxcclxuICAgICAgICAgICAgW1wiNFwiLCBbXCIzMnB4XCJdXSxcclxuICAgICAgICAgICAgW1wiNVwiLCBbXCI2NHB4XCJdXSxcclxuICAgICAgICAgICAgW1wiYXV0b1wiLCBbXCJhdXRvXCJdXSxcclxuICAgICAgICAgICAgW1wiaW5oZXJpdFwiLCBbXCJpbmhlcml0XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5pdGlhbFwiLCBbXCJpbml0aWFsXCJdXSxcclxuICAgICAgICAgICAgW1wicmV2ZXJ0XCIsIFtcInJldmVydFwiXV0sXHJcbiAgICAgICAgICAgIFtcInVuc2V0XCIsIFtcInVuc2V0XCJdXVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJtXCIsIFtcIm1hcmdpblwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJtdFwiLCBbXCJtYXJnaW4tdG9wXCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcIm1iXCIsIFtcIm1hcmdpbi1ib3R0b21cIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwibWxcIiwgW1wibWFyZ2luLWxlZnRcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwibXJcIiwgW1wibWFyZ2luLXJpZ2h0XCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcIm14XCIsIFtcIm1hcmdpbi1sZWZ0XCIsIFwibWFyZ2luLXJpZ2h0XCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcIm15XCIsIFtcIm1hcmdpbi10b3BcIiwgXCJtYXJnaW4tYm90dG9tXCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBNYXJnaW5HZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5NYXJnaW5HZW5lcmF0b3IgPSBNYXJnaW5HZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5QYWRkaW5nR2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi8uLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgUGFkZGluZ0dlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhQYWRkaW5nR2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUGFkZGluZ0dlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcIjBcIiwgW1wiMHB4XCJdXSxcclxuICAgICAgICAgICAgW1wiMVwiLCBbXCI0cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCIyXCIsIFtcIjhweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjNcIiwgW1wiMTZweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjRcIiwgW1wiMzJweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjVcIiwgW1wiNjRweFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaGVyaXRcIiwgW1wiaW5oZXJpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaXRpYWxcIiwgW1wiaW5pdGlhbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJldmVydFwiLCBbXCJyZXZlcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNldFwiLCBbXCJ1bnNldFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwicFwiLCBbXCJwYWRkaW5nXCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcInB0XCIsIFtcInBhZGRpbmctdG9wXCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcInBiXCIsIFtcInBhZGRpbmctYm90dG9tXCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcInBsXCIsIFtcInBhZGRpbmctbGVmdFwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJwclwiLCBbXCJwYWRkaW5nLXJpZ2h0XCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcInB4XCIsIFtcInBhZGRpbmctbGVmdFwiLCBcInBhZGRpbmctcmlnaHRcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwicHlcIiwgW1wicGFkZGluZy10b3BcIiwgXCJwYWRkaW5nLWJvdHRvbVwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUGFkZGluZ0dlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLlBhZGRpbmdHZW5lcmF0b3IgPSBQYWRkaW5nR2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuUG9zaXRpb25HZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgUG9zaXRpb25HZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUG9zaXRpb25HZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBQb3NpdGlvbkdlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcInN0YXRpY1wiLCBbXCJzdGF0aWNcIl1dLFxyXG4gICAgICAgICAgICBbXCJyZWxhdGl2ZVwiLCBbXCJyZWxhdGl2ZVwiXV0sXHJcbiAgICAgICAgICAgIFtcImFic29sdXRlXCIsIFtcImFic29sdXRlXCJdXSxcclxuICAgICAgICAgICAgW1wiZml4ZWRcIiwgW1wiZml4ZWRcIl1dLFxyXG4gICAgICAgICAgICBbXCJzdGlja3lcIiwgW1wic3RpY2t5XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5oZXJpdFwiLCBbXCJpbmhlcml0XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5pdGlhbFwiLCBbXCJpbml0aWFsXCJdXSxcclxuICAgICAgICAgICAgW1wicmV2ZXJ0XCIsIFtcInJldmVydFwiXV0sXHJcbiAgICAgICAgICAgIFtcInVuc2V0XCIsIFtcInVuc2V0XCJdXVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJwb3NpdGlvblwiLCBbXCJwb3NpdGlvblwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUG9zaXRpb25HZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5Qb3NpdGlvbkdlbmVyYXRvciA9IFBvc2l0aW9uR2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuVGV4dEFsaWduR2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIFRleHRBbGlnbkdlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUZXh0QWxpZ25HZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUZXh0QWxpZ25HZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCJ1bmRlcmxpbmVcIiwgW1widW5kZXJsaW5lXCJdXSxcclxuICAgICAgICAgICAgW1wib3ZlcmxpbmVcIiwgW1wib3ZlcmxpbmVcIl1dLFxyXG4gICAgICAgICAgICBbXCJub25lXCIsIFtcIm5vbmVcIl1dLFxyXG4gICAgICAgICAgICBbXCJzdGFydFwiLCBbXCJzdGFydFwiXV0sXHJcbiAgICAgICAgICAgIFtcImVuZFwiLCBbXCJlbmRcIl1dLFxyXG4gICAgICAgICAgICBbXCJsZWZ0XCIsIFtcImxlZnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJyaWdodFwiLCBbXCJyaWdodFwiXV0sXHJcbiAgICAgICAgICAgIFtcImNlbnRlclwiLCBbXCJjZW50ZXJcIl1dLFxyXG4gICAgICAgICAgICBbXCJqdXN0aWZ5XCIsIFtcImp1c3RpZnlcIl1dLFxyXG4gICAgICAgICAgICBbXCJqdXN0aWZ5LWFsbFwiLCBbXCJqdXN0aWZ5LWFsbFwiXV0sXHJcbiAgICAgICAgICAgIFtcIm1hdGNoLXBhcmVudFwiLCBbXCJtYXRjaC1wYXJlbnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmhlcml0XCIsIFtcImluaGVyaXRcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbml0aWFsXCIsIFtcImluaXRpYWxcIl1dLFxyXG4gICAgICAgICAgICBbXCJyZXZlcnRcIiwgW1wicmV2ZXJ0XCJdXSxcclxuICAgICAgICAgICAgW1widW5zZXRcIiwgW1widW5zZXRcIl1dXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcInRleHQtYWxpZ25cIiwgW1widGV4dC1hbGlnblwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBUZXh0QWxpZ25HZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5UZXh0QWxpZ25HZW5lcmF0b3IgPSBUZXh0QWxpZ25HZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5UZXh0RGVjb3JhdGlvbkdlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBUZXh0RGVjb3JhdGlvbkdlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUZXh0RGVjb3JhdGlvbkdlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFRleHREZWNvcmF0aW9uR2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1widW5kZXJsaW5lXCIsIFtcInVuZGVybGluZVwiXV0sXHJcbiAgICAgICAgICAgIFtcIm92ZXJsaW5lXCIsIFtcIm92ZXJsaW5lXCJdXSxcclxuICAgICAgICAgICAgW1wibm9uZVwiLCBbXCJub25lXCJdXSxcclxuICAgICAgICAgICAgW1wiaW5oZXJpdFwiLCBbXCJpbmhlcml0XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5pdGlhbFwiLCBbXCJpbml0aWFsXCJdXSxcclxuICAgICAgICAgICAgW1wicmV2ZXJ0XCIsIFtcInJldmVydFwiXV0sXHJcbiAgICAgICAgICAgIFtcInVuc2V0XCIsIFtcInVuc2V0XCJdXVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJ0ZXh0LWRlY29yYXRpb25cIiwgW1widGV4dC1kZWNvcmF0aW9uXCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFRleHREZWNvcmF0aW9uR2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuVGV4dERlY29yYXRpb25HZW5lcmF0b3IgPSBUZXh0RGVjb3JhdGlvbkdlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLldpZHRoR2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIFdpZHRoR2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFdpZHRoR2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gV2lkdGhHZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCJtYXgtY29udGVudFwiLCBbXCJtYXgtY29udGVudFwiXV0sXHJcbiAgICAgICAgICAgIFtcIm1pbi1jb250ZW50XCIsIFtcIm1pbi1jb250ZW50XCJdXSxcclxuICAgICAgICAgICAgW1wiZml0LWNvbnRlbnRcIiwgW1wiZml0LWNvbnRlbnRcIl1dLFxyXG4gICAgICAgICAgICBbXCIwXCIsIFtcIjAlXCJdXSxcclxuICAgICAgICAgICAgW1wiMVwiLCBbXCI4LjMzMyVcIl1dLFxyXG4gICAgICAgICAgICBbXCIyXCIsIFtcIjE2LjY2NiVcIl1dLFxyXG4gICAgICAgICAgICBbXCIzXCIsIFtcIjI1JVwiXV0sXHJcbiAgICAgICAgICAgIFtcIjRcIiwgW1wiMzMuMzMzJVwiXV0sXHJcbiAgICAgICAgICAgIFtcIjVcIiwgW1wiNDEuNjY2JVwiXV0sXHJcbiAgICAgICAgICAgIFtcIjZcIiwgW1wiNTAlXCJdXSxcclxuICAgICAgICAgICAgW1wiN1wiLCBbXCI1OC4zMzMlXCJdXSxcclxuICAgICAgICAgICAgW1wiOFwiLCBbXCI2Ni42NjYlXCJdXSxcclxuICAgICAgICAgICAgW1wiOVwiLCBbXCI3NSVcIl1dLFxyXG4gICAgICAgICAgICBbXCIxMFwiLCBbXCI4My4zMzMlXCJdXSxcclxuICAgICAgICAgICAgW1wiMTFcIiwgW1wiOTEuNjY2JVwiXV0sXHJcbiAgICAgICAgICAgIFtcIjEyXCIsIFtcIjEwMCVcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmhlcml0XCIsIFtcImluaGVyaXRcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbml0aWFsXCIsIFtcImluaXRpYWxcIl1dLFxyXG4gICAgICAgICAgICBbXCJyZXZlcnRcIiwgW1wicmV2ZXJ0XCJdXSxcclxuICAgICAgICAgICAgW1widW5zZXRcIiwgW1widW5zZXRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ4c1wiLCBbXCIzMjBweFwiXV0sXHJcbiAgICAgICAgICAgIFtcInNtXCIsIFtcIjU0NHB4XCJdXSxcclxuICAgICAgICAgICAgW1wibWRcIiwgW1wiNzY4cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCJsZ1wiLCBbXCIxMDEycHhcIl1dLFxyXG4gICAgICAgICAgICBbXCJ4bFwiLCBbXCIxMjgwcHhcIl1dLFxyXG4gICAgICAgICAgICBbXCIxNnB4XCIsIFtcIjE2cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCIyNHB4XCIsIFtcIjI0cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCIzMnB4XCIsIFtcIjMycHhcIl1dLFxyXG4gICAgICAgICAgICBbXCI0OHB4XCIsIFtcIjQ4cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCI2NHB4XCIsIFtcIjY0cHhcIl1dXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcIndcIiwgW1wid2lkdGhcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwibWF4LXdcIiwgW1wibWF4LXdpZHRoXCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcIm1pbi13XCIsIFtcIm1pbi13aWR0aFwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBXaWR0aEdlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLldpZHRoR2VuZXJhdG9yID0gV2lkdGhHZW5lcmF0b3I7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG52YXIgZnMgPSByZXF1aXJlKFwiZnNcIik7XHJcbnZhciBjc3N2aWxsZV8xID0gcmVxdWlyZShcIi4vY3NzdmlsbGVcIik7XHJcbnZhciBwYXRoTW9kdWxlID0gcmVxdWlyZShcInBhdGhcIik7XHJcbmZ1bmN0aW9uIGdldEZpbGVzKHBhdGhEaXIpIHtcclxuICAgIHZhciBmaWxlcyA9IFtdO1xyXG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKHBhdGhEaXIpKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRpcmVjdG9yeSAnXCIuY29uY2F0KHBhdGhNb2R1bGUucmVzb2x2ZShwYXRoRGlyKSwgXCInIG5vdCBmb3VuZCFcIikpO1xyXG4gICAgICAgIHJldHVybiBmaWxlcztcclxuICAgIH1cclxuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGZpbGUpIHtcclxuICAgICAgICB2YXIgZnVsbFBhdGggPSBwYXRoRGlyICsgJy8nICsgZmlsZTtcclxuICAgICAgICBpZiAoZnMubHN0YXRTeW5jKGZ1bGxQYXRoKS5pc0RpcmVjdG9yeSgpKVxyXG4gICAgICAgICAgICBnZXRGaWxlcyhmdWxsUGF0aCkuZm9yRWFjaChmdW5jdGlvbiAoeCkgeyByZXR1cm4gZmlsZXMucHVzaChmaWxlICsgJy8nICsgeCk7IH0pO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgZmlsZXMucHVzaChmaWxlKTtcclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gZnMucmVhZGRpclN5bmMocGF0aERpcik7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGZpbGUgPSBfYVtfaV07XHJcbiAgICAgICAgX2xvb3BfMShmaWxlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmaWxlcztcclxufVxyXG52YXIgcGF0aCA9IHByb2Nlc3MuYXJndlsyXTtcclxudmFyIGRpciA9IHByb2Nlc3MuYXJndlszXTtcclxudmFyIGV4dGVuc2lvbnMgPSBwcm9jZXNzLmFyZ3ZbNF07XHJcbmlmICghcGF0aCkge1xyXG4gICAgcGF0aCA9IFwiYnVpbGQvY3NzdmlsbGUuY3NzXCI7XHJcbn1cclxuaWYgKCFleHRlbnNpb25zKSB7XHJcbiAgICB2YXIgY3NzID0gY3NzdmlsbGVfMS5Dc3N2aWxsZS5nZXRDc3MoKTtcclxuICAgIGZzLndyaXRlRmlsZShwYXRoLCBjc3MsIGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coXCJkb25lOiBcIiArIHBhdGgpOyB9KTtcclxufVxyXG5lbHNlIHtcclxuICAgIHZhciBjbGFzc2VzID0gW107XHJcbiAgICB2YXIgZXhBcnJheSA9IGV4dGVuc2lvbnMuc3BsaXQoXCIsXCIpO1xyXG4gICAgdmFyIGZpbGVzID0gZ2V0RmlsZXMoZGlyKS5maWx0ZXIoZnVuY3Rpb24gKGZuKSB7IHJldHVybiBleEFycmF5LmZpbHRlcihmdW5jdGlvbiAoZSkgeyByZXR1cm4gZm4uZW5kc1dpdGgoZSk7IH0pLmxlbmd0aCA+IDA7IH0pO1xyXG4gICAgZmlsZXMuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xyXG4gICAgICAgIGZpbGUgPSBkaXIgKyAnLycgKyBmaWxlO1xyXG4gICAgICAgIHZhciBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGUpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdmFyIGV4dCA9IHBhdGhNb2R1bGUuZXh0bmFtZShmaWxlKTtcclxuICAgICAgICB2YXIgY2xhc3NOYW1lID0gZXh0ID09PSBcIi5qc3hcIiA/IFwiY2xhc3NOYW1lPVwiIDogXCJjbGFzcz1cIjtcclxuICAgICAgICB2YXIgcG9zID0gMDtcclxuICAgICAgICB2YXIgY3NzQ2xhc3NlcyA9IFwiXCI7XHJcbiAgICAgICAgd2hpbGUgKGNvbnRlbnQuaW5kZXhPZihjbGFzc05hbWUsIHBvcykgIT0gLTEpIHtcclxuICAgICAgICAgICAgcG9zID0gY29udGVudC5pbmRleE9mKGNsYXNzTmFtZSwgcG9zKSArIGNsYXNzTmFtZS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChjb250ZW50W3Bvc10gPT09ICdcIicpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbmQgPSBjb250ZW50LmluZGV4T2YoJ1wiJywgcG9zICsgMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW5kIC0gcG9zID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzZXMgPSBjb250ZW50LnN1YnN0cmluZyhwb3MgKyAxLCBlbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzZXMuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsYXNzZXMuaW5kZXhPZihjKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMucHVzaChjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcG9zID0gZW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSBcIi5jb25jYXQoZmlsZSwgXCIgcHJvY2Vzc2VkXCIpKTtcclxuICAgIH0pO1xyXG4gICAgdmFyIGNzcyA9IGNzc3ZpbGxlXzEuQ3NzdmlsbGUuZ2V0Q3NzKGNsYXNzZXMpO1xyXG4gICAgZnMud3JpdGVGaWxlKHBhdGgsIGNzcywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRG9uZTogJ1wiLmNvbmNhdChwYXRoLCBcIicgd2l0aCBwYXR0ZXJuICdcIikuY29uY2F0KGV4dGVuc2lvbnMsIFwiJyBmb3IgZGlyICdcIikuY29uY2F0KGRpciwgXCInXCIpKTtcclxuICAgIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==