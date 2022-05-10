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
            new cssClassData_1.CssClassData("h", ["height"], _this.postfixValuesMap)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0JBQXdCLGVBQWU7QUFDakk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL0dlbmVyYXRvckJhc2UudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvY3NzdmlsbGUudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZGF0YS9jc3NDbGFzc0RhdGEudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9hbGlnbkl0ZW1zR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvYmFja2dyb3VuZENvbG9yR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvYm9yZGVyUmFkaXVzR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvY29sb3JHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9jdXJzb3JHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9kaXNwbGF5R2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvZmxleERpcmVjdGlvbkdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL2ZsZXhHcm93R2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvZmxleFNocmlua0dlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL2ZsZXhXcmFwR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvZmxvYXRHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9mb250U2l6ZUdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL2ZvbnRXZWlnaHRHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9oZWlnaHRHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9qdXN0aWZ5Q29udGVudEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL21hcmdpbkdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL3BhZGRpbmdHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvLi9zcmMvZ2VuZXJhdG9ycy9wb3NpdGlvbkdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL3RleHRBbGlnbkdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0b3JzL3RleHREZWNvcmF0aW9uR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2Nzc3ZpbGxlLy4vc3JjL2dlbmVyYXRvcnMvd2lkdGhHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImZzXCIiLCJ3ZWJwYWNrOi8vY3NzdmlsbGUvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly9jc3N2aWxsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jc3N2aWxsZS8uL3NyYy9nZW5lcmF0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5HZW5lcmF0b3JCYXNlID0gdm9pZCAwO1xyXG52YXIgR2VuZXJhdG9yQmFzZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdlbmVyYXRvckJhc2UoKSB7XHJcbiAgICAgICAgdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuY3NzRGF0YSA9IFtdO1xyXG4gICAgfVxyXG4gICAgR2VuZXJhdG9yQmFzZS5wcm90b3R5cGUuZ2VuZXJhdGUgPSBmdW5jdGlvbiAocHJlZml4LCBjbGFzc2VzKSB7XHJcbiAgICAgICAgaWYgKHByZWZpeCA9PT0gdm9pZCAwKSB7IHByZWZpeCA9IFwiXCI7IH1cclxuICAgICAgICBpZiAoY2xhc3NlcyA9PT0gdm9pZCAwKSB7IGNsYXNzZXMgPSBbXTsgfVxyXG4gICAgICAgIHZhciBjc3NQYXJ0ID0gXCJcIjtcclxuICAgICAgICB0aGlzLmNzc0RhdGEuZm9yRWFjaChmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBjc3NQYXJ0ICs9IGRhdGEuZ2V0Q3NzKHByZWZpeCwgY2xhc3Nlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGNzc1BhcnQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdlbmVyYXRvckJhc2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuR2VuZXJhdG9yQmFzZSA9IEdlbmVyYXRvckJhc2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkNzc3ZpbGxlID0gdm9pZCAwO1xyXG52YXIgcGFkZGluZ0dlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy9wYWRkaW5nR2VuZXJhdG9yXCIpO1xyXG52YXIgbWFyZ2luR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL21hcmdpbkdlbmVyYXRvclwiKTtcclxudmFyIGRpc3BsYXlHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvZGlzcGxheUdlbmVyYXRvclwiKTtcclxudmFyIGZsZXhEaXJlY3Rpb25HZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvZmxleERpcmVjdGlvbkdlbmVyYXRvclwiKTtcclxudmFyIGZsZXhHcm93R2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2ZsZXhHcm93R2VuZXJhdG9yXCIpO1xyXG52YXIgZmxleFdyYXBHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvZmxleFdyYXBHZW5lcmF0b3JcIik7XHJcbnZhciBmbGV4U2hyaW5rR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2ZsZXhTaHJpbmtHZW5lcmF0b3JcIik7XHJcbnZhciBmbG9hdEdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy9mbG9hdEdlbmVyYXRvclwiKTtcclxudmFyIGZvbnRXZWlnaHRHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvZm9udFdlaWdodEdlbmVyYXRvclwiKTtcclxudmFyIHdpZHRoR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL3dpZHRoR2VuZXJhdG9yXCIpO1xyXG52YXIgZm9udFNpemVHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvZm9udFNpemVHZW5lcmF0b3JcIik7XHJcbnZhciBwb3NpdGlvbkdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy9wb3NpdGlvbkdlbmVyYXRvclwiKTtcclxudmFyIGFsaWduSXRlbXNHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvYWxpZ25JdGVtc0dlbmVyYXRvclwiKTtcclxudmFyIGp1c3RpZnlDb250ZW50R2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2p1c3RpZnlDb250ZW50R2VuZXJhdG9yXCIpO1xyXG52YXIgdGV4dERlY29yYXRpb25HZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvdGV4dERlY29yYXRpb25HZW5lcmF0b3JcIik7XHJcbnZhciBoZWlnaHRHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvaGVpZ2h0R2VuZXJhdG9yXCIpO1xyXG52YXIgY29sb3JHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvY29sb3JHZW5lcmF0b3JcIik7XHJcbnZhciBib3JkZXJSYWRpdXNHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvYm9yZGVyUmFkaXVzR2VuZXJhdG9yXCIpO1xyXG52YXIgY3Vyc29yR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2N1cnNvckdlbmVyYXRvclwiKTtcclxudmFyIGJhY2tncm91bmRDb2xvckdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy9iYWNrZ3JvdW5kQ29sb3JHZW5lcmF0b3JcIik7XHJcbnZhciB0ZXh0QWxpZ25HZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvdGV4dEFsaWduR2VuZXJhdG9yXCIpO1xyXG52YXIgQ3NzdmlsbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDc3N2aWxsZSgpIHtcclxuICAgIH1cclxuICAgIENzc3ZpbGxlLmdldENzcyA9IGZ1bmN0aW9uIChjbGFzc2VzKSB7XHJcbiAgICAgICAgaWYgKGNsYXNzZXMgPT09IHZvaWQgMCkgeyBjbGFzc2VzID0gW107IH1cclxuICAgICAgICB2YXIgY3NzID0gXCJcIjtcclxuICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IENzc3ZpbGxlLmdlbmVyYXRvcnMubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgdmFyIGcgPSBDc3N2aWxsZS5nZW5lcmF0b3JzW3hdO1xyXG4gICAgICAgICAgICB2YXIgY3NzUGFydCA9IGcuZ2VuZXJhdGUoXCJcIiwgY2xhc3Nlcyk7XHJcbiAgICAgICAgICAgIGNzcyArPSBjc3NQYXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByZWZpeFZhbHVlTWFwLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgdmFyIGlubmVyQ3NzID0gXCJcIjtcclxuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGtleTtcclxuICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBDc3N2aWxsZS5nZW5lcmF0b3JzLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZyA9IENzc3ZpbGxlLmdlbmVyYXRvcnNbeF07XHJcbiAgICAgICAgICAgICAgICB2YXIgY3NzUGFydEZvclByZWZpeCA9IGcuZ2VuZXJhdGUocHJlZml4LCBjbGFzc2VzKTtcclxuICAgICAgICAgICAgICAgIGlubmVyQ3NzICs9IGNzc1BhcnRGb3JQcmVmaXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3NzICs9IFwiQG1lZGlhIChtYXgtd2lkdGg6IFwiLmNvbmNhdCh2YWx1ZSwgXCIpIHsgXCIpLmNvbmNhdChpbm5lckNzcywgXCJ9IFwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gY3NzO1xyXG4gICAgfTtcclxuICAgIENzc3ZpbGxlLnByZWZpeFZhbHVlTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgW1wieGxcIiwgXCIxMjgwcHhcIl0sXHJcbiAgICAgICAgW1wibGdcIiwgXCIxMDEycHhcIl0sXHJcbiAgICAgICAgW1wibWRcIiwgXCI3NjhweFwiXSxcclxuICAgICAgICBbXCJzbVwiLCBcIjU0NHB4XCJdLFxyXG4gICAgICAgIFtcInhzXCIsIFwiMzIwcHhcIl0sXHJcbiAgICBdKTtcclxuICAgIENzc3ZpbGxlLmdlbmVyYXRvcnMgPSBbXHJcbiAgICAgICAgbmV3IGFsaWduSXRlbXNHZW5lcmF0b3JfMS5BbGlnbkl0ZW1zR2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IGJvcmRlclJhZGl1c0dlbmVyYXRvcl8xLkJvcmRlclJhZGl1c0dlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyBiYWNrZ3JvdW5kQ29sb3JHZW5lcmF0b3JfMS5CYWNrZ3JvdW5kQ29sb3JHZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgY29sb3JHZW5lcmF0b3JfMS5Db2xvckdlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyBjdXJzb3JHZW5lcmF0b3JfMS5DdXJzb3JHZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgcGFkZGluZ0dlbmVyYXRvcl8xLlBhZGRpbmdHZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgbWFyZ2luR2VuZXJhdG9yXzEuTWFyZ2luR2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IGRpc3BsYXlHZW5lcmF0b3JfMS5EaXNwbGF5R2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IGZsZXhEaXJlY3Rpb25HZW5lcmF0b3JfMS5GbGV4RGlyZWN0aW9uR2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IGZsZXhHcm93R2VuZXJhdG9yXzEuRmxleEdyb3dHZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgZmxleFNocmlua0dlbmVyYXRvcl8xLkZsZXhTaHJpbmtHZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgZmxleFdyYXBHZW5lcmF0b3JfMS5GbGV4V3JhcEdlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyBmbG9hdEdlbmVyYXRvcl8xLkZsb2F0R2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IGZvbnRTaXplR2VuZXJhdG9yXzEuRm9udFNpemVHZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgZm9udFdlaWdodEdlbmVyYXRvcl8xLkZvbnRXZWlnaHRHZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgaGVpZ2h0R2VuZXJhdG9yXzEuSGVpZ2h0R2VuZXJhdG9yKCksXHJcbiAgICAgICAgbmV3IGp1c3RpZnlDb250ZW50R2VuZXJhdG9yXzEuSnVzdGlmeUNvbnRlbnRHZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgd2lkdGhHZW5lcmF0b3JfMS5XaWR0aEdlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyB0ZXh0QWxpZ25HZW5lcmF0b3JfMS5UZXh0QWxpZ25HZW5lcmF0b3IoKSxcclxuICAgICAgICBuZXcgdGV4dERlY29yYXRpb25HZW5lcmF0b3JfMS5UZXh0RGVjb3JhdGlvbkdlbmVyYXRvcigpLFxyXG4gICAgICAgIG5ldyBwb3NpdGlvbkdlbmVyYXRvcl8xLlBvc2l0aW9uR2VuZXJhdG9yKCksXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIENzc3ZpbGxlO1xyXG59KCkpO1xyXG5leHBvcnRzLkNzc3ZpbGxlID0gQ3NzdmlsbGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkNzc0NsYXNzRGF0YSA9IHZvaWQgMDtcclxudmFyIENzc0NsYXNzRGF0YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENzc0NsYXNzRGF0YShjbGFzc05hbWUsIGNzc1Byb3BlcnRpZXMsIHBvc3RmaXhWYWx1ZXNNYXApIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgICAgIHRoaXMuY3NzUHJvcGVydGllcyA9IGNzc1Byb3BlcnRpZXM7XHJcbiAgICAgICAgdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gcG9zdGZpeFZhbHVlc01hcDtcclxuICAgICAgICB0aGlzLmNzc1BhcnRzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMucG9zdGZpeFZhbHVlc01hcC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBwb3N0Zml4ID0ga2V5O1xyXG4gICAgICAgICAgICB2YXIgaW5uZXJQcm9wZXJ0aWVzID0gXCJcIjtcclxuICAgICAgICAgICAgX3RoaXMuY3NzUHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uIChjc3NQcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyUHJvcGVydGllcyArPSBcIlwiLmNvbmNhdChjc3NQcm9wZXJ0eSwgXCI6IFwiKS5jb25jYXQodiwgXCI7IFwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgX3RoaXMuY3NzUGFydHMuc2V0KFwiXCIuY29uY2F0KF90aGlzLmNsYXNzTmFtZSwgXCItXCIpLmNvbmNhdChwb3N0Zml4KSwgaW5uZXJQcm9wZXJ0aWVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIENzc0NsYXNzRGF0YS5wcm90b3R5cGUuZ2V0Q3NzID0gZnVuY3Rpb24gKHByZWZpeCwgY2xhc3Nlcykge1xyXG4gICAgICAgIGlmIChwcmVmaXggPT09IHZvaWQgMCkgeyBwcmVmaXggPSBcIlwiOyB9XHJcbiAgICAgICAgdmFyIGNzcyA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jc3NQYXJ0cy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBjbGFzc05hbWUgPSBcIlwiLmNvbmNhdChwcmVmaXggPT09IFwiXCIgPyBcIlwiIDogXCJcIi5jb25jYXQocHJlZml4LCBcIi1cIikpLmNvbmNhdChrZXkpO1xyXG4gICAgICAgICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNzcyArPSBcIi5cIi5jb25jYXQoY2xhc3NOYW1lLCBcIiB7IFwiKS5jb25jYXQodmFsdWUsIFwifSBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCAmJiBjbGFzc2VzLmluZGV4T2YoY2xhc3NOYW1lKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjc3MgKz0gXCIuXCIuY29uY2F0KGNsYXNzTmFtZSwgXCIgeyBcIikuY29uY2F0KHZhbHVlLCBcIn0gXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGNzcztcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ3NzQ2xhc3NEYXRhO1xyXG59KCkpO1xyXG5leHBvcnRzLkNzc0NsYXNzRGF0YSA9IENzc0NsYXNzRGF0YTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkFsaWduSXRlbXNHZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgQWxpZ25JdGVtc0dlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhBbGlnbkl0ZW1zR2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQWxpZ25JdGVtc0dlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcIm5vcm1hbFwiLCBbXCJub3JtYWxcIl1dLFxyXG4gICAgICAgICAgICBbXCJzdHJldGNoXCIsIFtcInN0cmV0Y2hcIl1dLFxyXG4gICAgICAgICAgICBbXCJjZW50ZXJcIiwgW1wiY2VudGVyXCJdXSxcclxuICAgICAgICAgICAgW1wic3RhcnRcIiwgW1wic3RhcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJmbGV4LXN0YXJ0XCIsIFtcImZsZXgtc3RhcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJlbmRcIiwgW1wiZW5kXCJdXSxcclxuICAgICAgICAgICAgW1wiZmxleC1lbmRcIiwgW1wiZmxleC1lbmRcIl1dLFxyXG4gICAgICAgICAgICBbXCJiYXNlbGluZVwiLCBbXCJiYXNlbGluZVwiXV0sXHJcbiAgICAgICAgICAgIFtcImZpcnN0LWJhc2VsaW5lXCIsIFtcImZpcnN0IGJhc2VsaW5lXCJdXSxcclxuICAgICAgICAgICAgW1wibGFzdC1iYXNlbGluZVwiLCBbXCJsYXN0IGJhc2VsaW5lXCJdXSxcclxuICAgICAgICAgICAgW1wic2FmZS1jZW50ZXJcIiwgW1wic2FmZSBjZW50ZXJcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNhZmUtY2VudGVyXCIsIFtcInVuc2FmZSBjZW50ZXJcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmhlcml0XCIsIFtcImluaGVyaXRcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbml0aWFsXCIsIFtcImluaXRpYWxcIl1dLFxyXG4gICAgICAgICAgICBbXCJyZXZlcnRcIiwgW1wicmV2ZXJ0XCJdXSxcclxuICAgICAgICAgICAgW1widW5zZXRcIiwgW1widW5zZXRcIl1dXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImFsaWduLWl0ZW1zXCIsIFtcIi1tcy1hbGlnbi1pdGVtc1wiLCBcIi1vLWFsaWduLWl0ZW1zXCIsIFwiLXdlYmtpdC1hbGlnbi1pdGVtc1wiLCBcImFsaWduLWl0ZW1zXCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEFsaWduSXRlbXNHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5BbGlnbkl0ZW1zR2VuZXJhdG9yID0gQWxpZ25JdGVtc0dlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkJhY2tncm91bmRDb2xvckdlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBCYWNrZ3JvdW5kQ29sb3JHZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQmFja2dyb3VuZENvbG9yR2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQmFja2dyb3VuZENvbG9yR2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1wiYmxhY2tcIiwgW1wiYmxhY2tcIl1dLFxyXG4gICAgICAgICAgICBbXCJ3aGl0ZVwiLCBbXCJ3aGl0ZVwiXV0sXHJcbiAgICAgICAgICAgIFtcInRyYW5zcGFyZW50XCIsIFtcInRyYW5zcGFyZW50XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5oZXJpdFwiLCBbXCJpbmhlcml0XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5pdGlhbFwiLCBbXCJpbml0aWFsXCJdXSxcclxuICAgICAgICAgICAgW1wicmV2ZXJ0XCIsIFtcInJldmVydFwiXV0sXHJcbiAgICAgICAgICAgIFtcInVuc2V0XCIsIFtcInVuc2V0XCJdXVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJiZy1jb2xvclwiLCBbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEJhY2tncm91bmRDb2xvckdlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLkJhY2tncm91bmRDb2xvckdlbmVyYXRvciA9IEJhY2tncm91bmRDb2xvckdlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkJvcmRlclJhZGl1c0dlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBCb3JkZXJSYWRpdXNHZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQm9yZGVyUmFkaXVzR2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQm9yZGVyUmFkaXVzR2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1wiMFwiLCBbXCIwcHhcIl1dLFxyXG4gICAgICAgICAgICBbXCIxXCIsIFtcIjRweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjJcIiwgW1wiOHB4XCJdXSxcclxuICAgICAgICAgICAgW1wiM1wiLCBbXCIxNnB4XCJdXSxcclxuICAgICAgICAgICAgW1wiNFwiLCBbXCIzMnB4XCJdXSxcclxuICAgICAgICAgICAgW1wiNVwiLCBbXCI2NHB4XCJdXSxcclxuICAgICAgICAgICAgW1wiNTBwXCIsIFtcIjUwJVwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaGVyaXRcIiwgW1wiaW5oZXJpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaXRpYWxcIiwgW1wiaW5pdGlhbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJldmVydFwiLCBbXCJyZXZlcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNldFwiLCBbXCJ1bnNldFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiYnJcIiwgW1wiLW1zLWJvcmRlci1yYWRpdXNcIiwgXCJib3JkZXItcmFkaXVzXCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImJyLXRvcC1sZWZ0XCIsIFtcIi1tcy1ib3JkZXItdG9wLWxlZnQtcmFkaXVzXCIsIFwiYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c1wiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJici10b3AtcmlnaHRcIiwgW1wiLW1zLWJvcmRlci10b3AtcmlnaHQtcmFkaXVzXCIsIFwiYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiYnItYm90dG9tLXJpZ2h0XCIsIFtcIi1tcy1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c1wiLCBcImJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzXCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImJyLWJvdHRvbS1sZWZ0XCIsIFtcIi1tcy1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzXCIsIFwiYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c1wiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBCb3JkZXJSYWRpdXNHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5Cb3JkZXJSYWRpdXNHZW5lcmF0b3IgPSBCb3JkZXJSYWRpdXNHZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5Db2xvckdlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBDb2xvckdlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhDb2xvckdlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIENvbG9yR2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1wiYmxhY2tcIiwgW1wiYmxhY2tcIl1dLFxyXG4gICAgICAgICAgICBbXCJ3aGl0ZVwiLCBbXCJ3aGl0ZVwiXV0sXHJcbiAgICAgICAgICAgIFtcInRyYW5zcGFyZW50XCIsIFtcInRyYW5zcGFyZW50XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5oZXJpdFwiLCBbXCJpbmhlcml0XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5pdGlhbFwiLCBbXCJpbml0aWFsXCJdXSxcclxuICAgICAgICAgICAgW1wicmV2ZXJ0XCIsIFtcInJldmVydFwiXV0sXHJcbiAgICAgICAgICAgIFtcInVuc2V0XCIsIFtcInVuc2V0XCJdXVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJjb2xvclwiLCBbXCJjb2xvclwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBDb2xvckdlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLkNvbG9yR2VuZXJhdG9yID0gQ29sb3JHZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5DdXJzb3JHZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgQ3Vyc29yR2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEN1cnNvckdlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEN1cnNvckdlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcIndhaXRcIiwgW1wid2FpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcInBvaW50ZXJcIiwgW1wicG9pbnRlclwiXV0sXHJcbiAgICAgICAgICAgIFtcInByb2dyZXNzXCIsIFtcInByb2dyZXNzXCJdXSxcclxuICAgICAgICAgICAgW1wiZGVmYXVsdFwiLCBbXCJkZWZhdWx0XCJdXVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJjdXJzb3JcIiwgW1wiY3Vyc29yXCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEN1cnNvckdlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLkN1cnNvckdlbmVyYXRvciA9IEN1cnNvckdlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkRpc3BsYXlHZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgRGlzcGxheUdlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhEaXNwbGF5R2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRGlzcGxheUdlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcImJsb2NrXCIsIFtcImJsb2NrXCJdXSxcclxuICAgICAgICAgICAgW1wiaW5saW5lXCIsIFtcImlubGluZVwiXV0sXHJcbiAgICAgICAgICAgIFtcImlubGluZS1ibG9ja1wiLCBbXCJpbmxpbmUtYmxvY2tcIl1dLFxyXG4gICAgICAgICAgICBbXCJmbGV4XCIsIFtcImZsZXhcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmxpbmUtZmxleFwiLCBbXCJpbmxpbmUtZmxleFwiXV0sXHJcbiAgICAgICAgICAgIFtcImdyaWRcIiwgW1wiZ3JpZFwiXV0sXHJcbiAgICAgICAgICAgIFtcImlubGluZS1ncmlkXCIsIFtcImlubGluZS1ncmlkXCJdXSxcclxuICAgICAgICAgICAgW1wiZmxvdy1yb290XCIsIFtcImZsb3ctcm9vdFwiXV0sXHJcbiAgICAgICAgICAgIFtcIm5vbmVcIiwgW1wibm9uZVwiXV0sXHJcbiAgICAgICAgICAgIFtcImNvbnRlbnRzXCIsIFtcImNvbnRlbnRzXCJdXSxcclxuICAgICAgICAgICAgW1wiYmxvY2stZmxvd1wiLCBbXCJibG9jayBmbG93XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5saW5lLWZsb3dcIiwgW1wiaW5saW5lIGZsb3dcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmxpbmUtZmxvdy1yb290XCIsIFtcImlubGluZSBmbG93LXJvb3RcIl1dLFxyXG4gICAgICAgICAgICBbXCJibG9jay1mbGV4XCIsIFtcImJsb2NrIGZsZXhcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmxpbmUtZmxleFwiLCBbXCJpbmxpbmUgZmxleFwiXV0sXHJcbiAgICAgICAgICAgIFtcImJsb2NrLWdyaWRcIiwgW1wiYmxvY2sgZ3JpZFwiXV0sXHJcbiAgICAgICAgICAgIFtcImlubGluZS1ncmlkXCIsIFtcImlubGluZSBncmlkXCJdXSxcclxuICAgICAgICAgICAgW1wiYmxvY2stZmxvdy1yb290XCIsIFtcImJsb2NrIGZsb3ctcm9vdFwiXV0sXHJcbiAgICAgICAgICAgIFtcInRhYmxlXCIsIFtcInRhYmxlXCJdXSxcclxuICAgICAgICAgICAgW1widGFibGUtcm93XCIsIFtcInRhYmxlLXJvd1wiXV0sXHJcbiAgICAgICAgICAgIFtcInRhYmxlLWNvbHVtblwiLCBbXCJ0YWJsZS1jb2x1bW5cIl1dLFxyXG4gICAgICAgICAgICBbXCJ0YWJsZS1jZWxsXCIsIFtcInRhYmxlLWNlbGxcIl1dLFxyXG4gICAgICAgICAgICBbXCJsaXN0LWl0ZW1cIiwgW1wibGlzdC1pdGVtXCJdXSxcclxuICAgICAgICAgICAgW1wiaW5oZXJpdFwiLCBbXCJpbmhlcml0XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5pdGlhbFwiLCBbXCJpbml0aWFsXCJdXSxcclxuICAgICAgICAgICAgW1wicmV2ZXJ0XCIsIFtcInJldmVydFwiXV0sXHJcbiAgICAgICAgICAgIFtcInVuc2V0XCIsIFtcInVuc2V0XCJdXVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJkXCIsIFtcImRpc3BsYXlcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRGlzcGxheUdlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLkRpc3BsYXlHZW5lcmF0b3IgPSBEaXNwbGF5R2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuRmxleERpcmVjdGlvbkdlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBGbGV4RGlyZWN0aW9uR2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZsZXhEaXJlY3Rpb25HZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGbGV4RGlyZWN0aW9uR2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1wicm93XCIsIFtcInJvd1wiXV0sXHJcbiAgICAgICAgICAgIFtcInJvdy1yZXZlcnNlXCIsIFtcInJvdy1yZXZlcnNlXCJdXSxcclxuICAgICAgICAgICAgW1wiY29sdW1uXCIsIFtcImNvbHVtblwiXV0sXHJcbiAgICAgICAgICAgIFtcImNvbHVtbi1yZXZlcnNlXCIsIFtcImNvbHVtbi1yZXZlcnNlXCJdXSxcclxuICAgICAgICAgICAgW1wiaW5oZXJpdFwiLCBbXCJpbmhlcml0XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5pdGlhbFwiLCBbXCJpbml0aWFsXCJdXSxcclxuICAgICAgICAgICAgW1wicmV2ZXJ0XCIsIFtcInJldmVydFwiXV0sXHJcbiAgICAgICAgICAgIFtcInVuc2V0XCIsIFtcInVuc2V0XCJdXVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJmbGV4LWRpcmVjdGlvblwiLCBbXCJmbGV4LWRpcmVjdGlvblwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBGbGV4RGlyZWN0aW9uR2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuRmxleERpcmVjdGlvbkdlbmVyYXRvciA9IEZsZXhEaXJlY3Rpb25HZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5GbGV4R3Jvd0dlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBGbGV4R3Jvd0dlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhGbGV4R3Jvd0dlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEZsZXhHcm93R2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1wiMFwiLCBbXCIwXCJdXSxcclxuICAgICAgICAgICAgW1wiMVwiLCBbXCIxXCJdXSxcclxuICAgICAgICAgICAgW1wiMlwiLCBbXCIyXCJdXSxcclxuICAgICAgICAgICAgW1wiM1wiLCBbXCIzXCJdXSxcclxuICAgICAgICAgICAgW1wiaW5oZXJpdFwiLCBbXCJpbmhlcml0XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5pdGlhbFwiLCBbXCJpbml0aWFsXCJdXSxcclxuICAgICAgICAgICAgW1wicmV2ZXJ0XCIsIFtcInJldmVydFwiXV0sXHJcbiAgICAgICAgICAgIFtcInVuc2V0XCIsIFtcInVuc2V0XCJdXVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJmbGV4LWdyb3dcIiwgW1wiLW8tZmxleC1ncm93XCIsIFwiLXdlYmtpdC1mbGV4LWdyb3dcIiwgXCJmbGV4LWdyb3dcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRmxleEdyb3dHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5GbGV4R3Jvd0dlbmVyYXRvciA9IEZsZXhHcm93R2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuRmxleFNocmlua0dlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBGbGV4U2hyaW5rR2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZsZXhTaHJpbmtHZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGbGV4U2hyaW5rR2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1wiMFwiLCBbXCIwXCJdXSxcclxuICAgICAgICAgICAgW1wiMVwiLCBbXCIxXCJdXSxcclxuICAgICAgICAgICAgW1wiMlwiLCBbXCIyXCJdXSxcclxuICAgICAgICAgICAgW1wiM1wiLCBbXCIzXCJdXSxcclxuICAgICAgICAgICAgW1wiaW5oZXJpdFwiLCBbXCJpbmhlcml0XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5pdGlhbFwiLCBbXCJpbml0aWFsXCJdXSxcclxuICAgICAgICAgICAgW1wicmV2ZXJ0XCIsIFtcInJldmVydFwiXV0sXHJcbiAgICAgICAgICAgIFtcInVuc2V0XCIsIFtcInVuc2V0XCJdXVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJmbGV4LXNocmlua1wiLCBbXCItby1mbGV4LXNocmlua1wiLCBcIi13ZWJraXQtZmxleC1zaHJpbmtcIiwgXCJmbGV4LXNocmlua1wiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBGbGV4U2hyaW5rR2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuRmxleFNocmlua0dlbmVyYXRvciA9IEZsZXhTaHJpbmtHZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5GbGV4V3JhcEdlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBGbGV4V3JhcEdlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhGbGV4V3JhcEdlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEZsZXhXcmFwR2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1wibm93cmFwXCIsIFtcIm5vd3JhcFwiXV0sXHJcbiAgICAgICAgICAgIFtcIndyYXBcIiwgW1wid3JhcFwiXV0sXHJcbiAgICAgICAgICAgIFtcIndyYXAtcmV2ZXJzZVwiLCBbXCJ3cmFwLXJldmVyc2VcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmhlcml0XCIsIFtcImluaGVyaXRcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbml0aWFsXCIsIFtcImluaXRpYWxcIl1dLFxyXG4gICAgICAgICAgICBbXCJyZXZlcnRcIiwgW1wicmV2ZXJ0XCJdXSxcclxuICAgICAgICAgICAgW1widW5zZXRcIiwgW1widW5zZXRcIl1dXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImZsZXgtd3JhcFwiLCBbXCItbW96LWZsZXgtd3JhcFwiLCBcIi1tcy1mbGV4LXdyYXBcIiwgXCItby1mbGV4LXdyYXBcIiwgXCItd2Via2l0LWZsZXgtd3JhcFwiLCBcImZsZXgtd3JhcFwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBGbGV4V3JhcEdlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLkZsZXhXcmFwR2VuZXJhdG9yID0gRmxleFdyYXBHZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5GbG9hdEdlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBGbG9hdEdlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhGbG9hdEdlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEZsb2F0R2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1wibGVmdFwiLCBbXCJsZWZ0XCJdXSxcclxuICAgICAgICAgICAgW1wicmlnaHRcIiwgW1wicmlnaHRcIl1dLFxyXG4gICAgICAgICAgICBbXCJub25lXCIsIFtcIm5vbmVcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmhlcml0XCIsIFtcImluaGVyaXRcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbml0aWFsXCIsIFtcImluaXRpYWxcIl1dLFxyXG4gICAgICAgICAgICBbXCJyZXZlcnRcIiwgW1wicmV2ZXJ0XCJdXSxcclxuICAgICAgICAgICAgW1widW5zZXRcIiwgW1widW5zZXRcIl1dXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImZsb2F0XCIsIFtcImZsb2F0XCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEZsb2F0R2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuRmxvYXRHZW5lcmF0b3IgPSBGbG9hdEdlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkZvbnRTaXplR2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIEZvbnRTaXplR2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZvbnRTaXplR2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRm9udFNpemVHZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCJ4eC1zbWFsbFwiLCBbXCJ4eC1zbWFsbFwiXV0sXHJcbiAgICAgICAgICAgIFtcIngtc21hbGxcIiwgW1wieC1zbWFsbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInNtYWxsXCIsIFtcInNtYWxsXCJdXSxcclxuICAgICAgICAgICAgW1wibWVkaXVtXCIsIFtcIm1lZGl1bVwiXV0sXHJcbiAgICAgICAgICAgIFtcImxhcmdlXCIsIFtcImxhcmdlXCJdXSxcclxuICAgICAgICAgICAgW1wieC1sYXJnZVwiLCBbXCJ4LWxhcmdlXCJdXSxcclxuICAgICAgICAgICAgW1wieHgtbGFyZ2VcIiwgW1wieHgtbGFyZ2VcIl1dLFxyXG4gICAgICAgICAgICBbXCJ4eHgtbGFyZ2VcIiwgW1wiNDhweFwiLCBcInh4eC1sYXJnZVwiXV0sXHJcbiAgICAgICAgICAgIFtcInNtYWxsZXJcIiwgW1wic21hbGxlclwiXV0sXHJcbiAgICAgICAgICAgIFtcImxhcmdlclwiLCBbXCJsYXJnZXJcIl1dLFxyXG4gICAgICAgICAgICBbXCIxcmVtXCIsIFtcIjFyZW1cIl1dLFxyXG4gICAgICAgICAgICBbXCIycmVtXCIsIFtcIjJyZW1cIl1dLFxyXG4gICAgICAgICAgICBbXCIzcmVtXCIsIFtcIjNyZW1cIl1dLFxyXG4gICAgICAgICAgICBbXCI0cmVtXCIsIFtcIjRyZW1cIl1dLFxyXG4gICAgICAgICAgICBbXCI1cmVtXCIsIFtcIjVyZW1cIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmhlcml0XCIsIFtcImluaGVyaXRcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbml0aWFsXCIsIFtcImluaXRpYWxcIl1dLFxyXG4gICAgICAgICAgICBbXCJyZXZlcnRcIiwgW1wicmV2ZXJ0XCJdXSxcclxuICAgICAgICAgICAgW1widW5zZXRcIiwgW1widW5zZXRcIl1dXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImZzXCIsIFtcImZvbnQtc2l6ZVwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBGb250U2l6ZUdlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLkZvbnRTaXplR2VuZXJhdG9yID0gRm9udFNpemVHZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5Gb250V2VpZ2h0R2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIEZvbnRXZWlnaHRHZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRm9udFdlaWdodEdlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEZvbnRXZWlnaHRHZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCJub3JtYWxcIiwgW1wibm9ybWFsXCJdXSxcclxuICAgICAgICAgICAgW1wiYm9sZFwiLCBbXCJib2xkXCJdXSxcclxuICAgICAgICAgICAgW1wibGlnaHRlclwiLCBbXCJsaWdodGVyXCJdXSxcclxuICAgICAgICAgICAgW1wiYm9sZGVyXCIsIFtcImJvbGRlclwiXV0sXHJcbiAgICAgICAgICAgIFtcIjEwMFwiLCBbXCIxMDBcIl1dLFxyXG4gICAgICAgICAgICBbXCIyMDBcIiwgW1wiMjAwXCJdXSxcclxuICAgICAgICAgICAgW1wiMzAwXCIsIFtcIjMwMFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjQwMFwiLCBbXCI0MDBcIl1dLFxyXG4gICAgICAgICAgICBbXCI1MDBcIiwgW1wiNTAwXCJdXSxcclxuICAgICAgICAgICAgW1wiNjAwXCIsIFtcIjYwMFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjcwMFwiLCBbXCI3MDBcIl1dLFxyXG4gICAgICAgICAgICBbXCI4MDBcIiwgW1wiODAwXCJdXSxcclxuICAgICAgICAgICAgW1wiOTAwXCIsIFtcIjkwMFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaGVyaXRcIiwgW1wiaW5oZXJpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaXRpYWxcIiwgW1wiaW5pdGlhbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJldmVydFwiLCBbXCJyZXZlcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNldFwiLCBbXCJ1bnNldFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwiZndcIiwgW1wiZm9udC13ZWlnaHRcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRm9udFdlaWdodEdlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLkZvbnRXZWlnaHRHZW5lcmF0b3IgPSBGb250V2VpZ2h0R2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuSGVpZ2h0R2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIEhlaWdodEdlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhIZWlnaHRHZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBIZWlnaHRHZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCJhdXRvXCIsIFtcImF1dG9cIl1dLFxyXG4gICAgICAgICAgICBbXCJtYXgtY29udGVudFwiLCBbXCJtYXgtY29udGVudFwiXV0sXHJcbiAgICAgICAgICAgIFtcIm1pbi1jb250ZW50XCIsIFtcIm1pbi1jb250ZW50XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5oZXJpdFwiLCBbXCJpbmhlcml0XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5pdGlhbFwiLCBbXCJpbml0aWFsXCJdXSxcclxuICAgICAgICAgICAgW1wicmV2ZXJ0XCIsIFtcInJldmVydFwiXV0sXHJcbiAgICAgICAgICAgIFtcInVuc2V0XCIsIFtcInVuc2V0XCJdXSxcclxuICAgICAgICAgICAgW1wiMTZweFwiLCBbXCIxNnB4XCJdXSxcclxuICAgICAgICAgICAgW1wiMjRweFwiLCBbXCIyNHB4XCJdXSxcclxuICAgICAgICAgICAgW1wiMzJweFwiLCBbXCIzMnB4XCJdXSxcclxuICAgICAgICAgICAgW1wiNDhweFwiLCBbXCI0OHB4XCJdXSxcclxuICAgICAgICAgICAgW1wiNjRweFwiLCBbXCI2NHB4XCJdXSxcclxuICAgICAgICAgICAgW1wiMTAwXCIsIFtcIjEwMCVcIl1dLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJoXCIsIFtcImhlaWdodFwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBIZWlnaHRHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5IZWlnaHRHZW5lcmF0b3IgPSBIZWlnaHRHZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5KdXN0aWZ5Q29udGVudEdlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBKdXN0aWZ5Q29udGVudEdlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhKdXN0aWZ5Q29udGVudEdlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEp1c3RpZnlDb250ZW50R2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1wiY2VudGVyXCIsIFtcImNlbnRlclwiXV0sXHJcbiAgICAgICAgICAgIFtcInN0YXJ0XCIsIFtcInN0YXJ0XCJdXSxcclxuICAgICAgICAgICAgW1wiZmxleC1zdGFydFwiLCBbXCJmbGV4LXN0YXJ0XCJdXSxcclxuICAgICAgICAgICAgW1wiZW5kXCIsIFtcImVuZFwiXV0sXHJcbiAgICAgICAgICAgIFtcImZsZXgtZW5kXCIsIFtcImZsZXgtZW5kXCJdXSxcclxuICAgICAgICAgICAgW1wibm9ybWFsXCIsIFtcIm5vcm1hbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInNwYWNlLWJldHdlZW5cIiwgW1wic3BhY2UtYmV0d2VlblwiXV0sXHJcbiAgICAgICAgICAgIFtcInNwYWNlLWFyb3VuZFwiLCBbXCJzcGFjZS1hcm91bmRcIl1dLFxyXG4gICAgICAgICAgICBbXCJzcGFjZS1ldmVubHlcIiwgW1wic3BhY2UtZXZlbmx5XCJdXSxcclxuICAgICAgICAgICAgW1wic3RyZXRjaFwiLCBbXCJzdHJldGNoXCJdXSxcclxuICAgICAgICAgICAgW1wic2FmZS1jZW50ZXJcIiwgW1wic2FmZSBjZW50ZXJcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNhZmUtY2VudGVyXCIsIFtcInVuc2FmZSBjZW50ZXJcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmhlcml0XCIsIFtcImluaGVyaXRcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbml0aWFsXCIsIFtcImluaXRpYWxcIl1dLFxyXG4gICAgICAgICAgICBbXCJyZXZlcnRcIiwgW1wicmV2ZXJ0XCJdXSxcclxuICAgICAgICAgICAgW1widW5zZXRcIiwgW1widW5zZXRcIl1dXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcImp1c3RpZnktY29udGVudFwiLCBbXCItby1qdXN0aWZ5LWNvbnRlbnRcIiwgXCItd2Via2l0LWp1c3RpZnktY29udGVudFwiLCBcImp1c3RpZnktY29udGVudFwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBKdXN0aWZ5Q29udGVudEdlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLkp1c3RpZnlDb250ZW50R2VuZXJhdG9yID0gSnVzdGlmeUNvbnRlbnRHZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5NYXJnaW5HZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgTWFyZ2luR2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKE1hcmdpbkdlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIE1hcmdpbkdlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcIjBcIiwgW1wiMHB4XCJdXSxcclxuICAgICAgICAgICAgW1wiMVwiLCBbXCI0cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCIyXCIsIFtcIjhweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjNcIiwgW1wiMTZweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjRcIiwgW1wiMzJweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjVcIiwgW1wiNjRweFwiXV0sXHJcbiAgICAgICAgICAgIFtcImF1dG9cIiwgW1wiYXV0b1wiXV0sXHJcbiAgICAgICAgICAgIFtcImluaGVyaXRcIiwgW1wiaW5oZXJpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaXRpYWxcIiwgW1wiaW5pdGlhbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJldmVydFwiLCBbXCJyZXZlcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNldFwiLCBbXCJ1bnNldFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwibVwiLCBbXCJtYXJnaW5cIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwibXRcIiwgW1wibWFyZ2luLXRvcFwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJtYlwiLCBbXCJtYXJnaW4tYm90dG9tXCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcIm1sXCIsIFtcIm1hcmdpbi1sZWZ0XCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcIm1yXCIsIFtcIm1hcmdpbi1yaWdodFwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJteFwiLCBbXCJtYXJnaW4tbGVmdFwiLCBcIm1hcmdpbi1yaWdodFwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJteVwiLCBbXCJtYXJnaW4tdG9wXCIsIFwibWFyZ2luLWJvdHRvbVwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWFyZ2luR2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuTWFyZ2luR2VuZXJhdG9yID0gTWFyZ2luR2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuUGFkZGluZ0dlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4vLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIFBhZGRpbmdHZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUGFkZGluZ0dlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFBhZGRpbmdHZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCIwXCIsIFtcIjBweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIjFcIiwgW1wiNHB4XCJdXSxcclxuICAgICAgICAgICAgW1wiMlwiLCBbXCI4cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCIzXCIsIFtcIjE2cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCI0XCIsIFtcIjMycHhcIl1dLFxyXG4gICAgICAgICAgICBbXCI1XCIsIFtcIjY0cHhcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbmhlcml0XCIsIFtcImluaGVyaXRcIl1dLFxyXG4gICAgICAgICAgICBbXCJpbml0aWFsXCIsIFtcImluaXRpYWxcIl1dLFxyXG4gICAgICAgICAgICBbXCJyZXZlcnRcIiwgW1wicmV2ZXJ0XCJdXSxcclxuICAgICAgICAgICAgW1widW5zZXRcIiwgW1widW5zZXRcIl1dXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMuY3NzRGF0YSA9IFtcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcInBcIiwgW1wicGFkZGluZ1wiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJwdFwiLCBbXCJwYWRkaW5nLXRvcFwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJwYlwiLCBbXCJwYWRkaW5nLWJvdHRvbVwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJwbFwiLCBbXCJwYWRkaW5nLWxlZnRcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwicHJcIiwgW1wicGFkZGluZy1yaWdodFwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJweFwiLCBbXCJwYWRkaW5nLWxlZnRcIiwgXCJwYWRkaW5nLXJpZ2h0XCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcInB5XCIsIFtcInBhZGRpbmctdG9wXCIsIFwicGFkZGluZy1ib3R0b21cIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFBhZGRpbmdHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5QYWRkaW5nR2VuZXJhdG9yID0gUGFkZGluZ0dlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLlBvc2l0aW9uR2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgY3NzQ2xhc3NEYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YS9jc3NDbGFzc0RhdGFcIik7XHJcbnZhciBHZW5lcmF0b3JCYXNlXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9yQmFzZVwiKTtcclxudmFyIFBvc2l0aW9uR2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFBvc2l0aW9uR2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUG9zaXRpb25HZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9zdGZpeFZhbHVlc01hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbXCJzdGF0aWNcIiwgW1wic3RhdGljXCJdXSxcclxuICAgICAgICAgICAgW1wicmVsYXRpdmVcIiwgW1wicmVsYXRpdmVcIl1dLFxyXG4gICAgICAgICAgICBbXCJhYnNvbHV0ZVwiLCBbXCJhYnNvbHV0ZVwiXV0sXHJcbiAgICAgICAgICAgIFtcImZpeGVkXCIsIFtcImZpeGVkXCJdXSxcclxuICAgICAgICAgICAgW1wic3RpY2t5XCIsIFtcInN0aWNreVwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaGVyaXRcIiwgW1wiaW5oZXJpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaXRpYWxcIiwgW1wiaW5pdGlhbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJldmVydFwiLCBbXCJyZXZlcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNldFwiLCBbXCJ1bnNldFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwicG9zaXRpb25cIiwgW1wicG9zaXRpb25cIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFBvc2l0aW9uR2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuUG9zaXRpb25HZW5lcmF0b3IgPSBQb3NpdGlvbkdlbmVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLlRleHRBbGlnbkdlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBUZXh0QWxpZ25HZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVGV4dEFsaWduR2VuZXJhdG9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gVGV4dEFsaWduR2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1widW5kZXJsaW5lXCIsIFtcInVuZGVybGluZVwiXV0sXHJcbiAgICAgICAgICAgIFtcIm92ZXJsaW5lXCIsIFtcIm92ZXJsaW5lXCJdXSxcclxuICAgICAgICAgICAgW1wibm9uZVwiLCBbXCJub25lXCJdXSxcclxuICAgICAgICAgICAgW1wic3RhcnRcIiwgW1wic3RhcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJlbmRcIiwgW1wiZW5kXCJdXSxcclxuICAgICAgICAgICAgW1wibGVmdFwiLCBbXCJsZWZ0XCJdXSxcclxuICAgICAgICAgICAgW1wicmlnaHRcIiwgW1wicmlnaHRcIl1dLFxyXG4gICAgICAgICAgICBbXCJjZW50ZXJcIiwgW1wiY2VudGVyXCJdXSxcclxuICAgICAgICAgICAgW1wianVzdGlmeVwiLCBbXCJqdXN0aWZ5XCJdXSxcclxuICAgICAgICAgICAgW1wianVzdGlmeS1hbGxcIiwgW1wianVzdGlmeS1hbGxcIl1dLFxyXG4gICAgICAgICAgICBbXCJtYXRjaC1wYXJlbnRcIiwgW1wibWF0Y2gtcGFyZW50XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5oZXJpdFwiLCBbXCJpbmhlcml0XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5pdGlhbFwiLCBbXCJpbml0aWFsXCJdXSxcclxuICAgICAgICAgICAgW1wicmV2ZXJ0XCIsIFtcInJldmVydFwiXV0sXHJcbiAgICAgICAgICAgIFtcInVuc2V0XCIsIFtcInVuc2V0XCJdXVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJ0ZXh0LWFsaWduXCIsIFtcInRleHQtYWxpZ25cIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gVGV4dEFsaWduR2VuZXJhdG9yO1xyXG59KEdlbmVyYXRvckJhc2VfMS5HZW5lcmF0b3JCYXNlKSk7XHJcbmV4cG9ydHMuVGV4dEFsaWduR2VuZXJhdG9yID0gVGV4dEFsaWduR2VuZXJhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuVGV4dERlY29yYXRpb25HZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBjc3NDbGFzc0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL2Nzc0NsYXNzRGF0YVwiKTtcclxudmFyIEdlbmVyYXRvckJhc2VfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JCYXNlXCIpO1xyXG52YXIgVGV4dERlY29yYXRpb25HZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVGV4dERlY29yYXRpb25HZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUZXh0RGVjb3JhdGlvbkdlbmVyYXRvcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcInVuZGVybGluZVwiLCBbXCJ1bmRlcmxpbmVcIl1dLFxyXG4gICAgICAgICAgICBbXCJvdmVybGluZVwiLCBbXCJvdmVybGluZVwiXV0sXHJcbiAgICAgICAgICAgIFtcIm5vbmVcIiwgW1wibm9uZVwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaGVyaXRcIiwgW1wiaW5oZXJpdFwiXV0sXHJcbiAgICAgICAgICAgIFtcImluaXRpYWxcIiwgW1wiaW5pdGlhbFwiXV0sXHJcbiAgICAgICAgICAgIFtcInJldmVydFwiLCBbXCJyZXZlcnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJ1bnNldFwiLCBbXCJ1bnNldFwiXV1cclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5jc3NEYXRhID0gW1xyXG4gICAgICAgICAgICBuZXcgY3NzQ2xhc3NEYXRhXzEuQ3NzQ2xhc3NEYXRhKFwidGV4dC1kZWNvcmF0aW9uXCIsIFtcInRleHQtZGVjb3JhdGlvblwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBUZXh0RGVjb3JhdGlvbkdlbmVyYXRvcjtcclxufShHZW5lcmF0b3JCYXNlXzEuR2VuZXJhdG9yQmFzZSkpO1xyXG5leHBvcnRzLlRleHREZWNvcmF0aW9uR2VuZXJhdG9yID0gVGV4dERlY29yYXRpb25HZW5lcmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5XaWR0aEdlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIGNzc0NsYXNzRGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGEvY3NzQ2xhc3NEYXRhXCIpO1xyXG52YXIgR2VuZXJhdG9yQmFzZV8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvckJhc2VcIik7XHJcbnZhciBXaWR0aEdlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhXaWR0aEdlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFdpZHRoR2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1wibWF4LWNvbnRlbnRcIiwgW1wibWF4LWNvbnRlbnRcIl1dLFxyXG4gICAgICAgICAgICBbXCJtaW4tY29udGVudFwiLCBbXCJtaW4tY29udGVudFwiXV0sXHJcbiAgICAgICAgICAgIFtcImZpdC1jb250ZW50XCIsIFtcImZpdC1jb250ZW50XCJdXSxcclxuICAgICAgICAgICAgW1wiMFwiLCBbXCIwJVwiXV0sXHJcbiAgICAgICAgICAgIFtcIjFcIiwgW1wiOC4zMzMlXCJdXSxcclxuICAgICAgICAgICAgW1wiMlwiLCBbXCIxNi42NjYlXCJdXSxcclxuICAgICAgICAgICAgW1wiM1wiLCBbXCIyNSVcIl1dLFxyXG4gICAgICAgICAgICBbXCI0XCIsIFtcIjMzLjMzMyVcIl1dLFxyXG4gICAgICAgICAgICBbXCI1XCIsIFtcIjQxLjY2NiVcIl1dLFxyXG4gICAgICAgICAgICBbXCI2XCIsIFtcIjUwJVwiXV0sXHJcbiAgICAgICAgICAgIFtcIjdcIiwgW1wiNTguMzMzJVwiXV0sXHJcbiAgICAgICAgICAgIFtcIjhcIiwgW1wiNjYuNjY2JVwiXV0sXHJcbiAgICAgICAgICAgIFtcIjlcIiwgW1wiNzUlXCJdXSxcclxuICAgICAgICAgICAgW1wiMTBcIiwgW1wiODMuMzMzJVwiXV0sXHJcbiAgICAgICAgICAgIFtcIjExXCIsIFtcIjkxLjY2NiVcIl1dLFxyXG4gICAgICAgICAgICBbXCIxMlwiLCBbXCIxMDAlXCJdXSxcclxuICAgICAgICAgICAgW1wiaW5oZXJpdFwiLCBbXCJpbmhlcml0XCJdXSxcclxuICAgICAgICAgICAgW1wiaW5pdGlhbFwiLCBbXCJpbml0aWFsXCJdXSxcclxuICAgICAgICAgICAgW1wicmV2ZXJ0XCIsIFtcInJldmVydFwiXV0sXHJcbiAgICAgICAgICAgIFtcInVuc2V0XCIsIFtcInVuc2V0XCJdXSxcclxuICAgICAgICAgICAgW1wieHNcIiwgW1wiMzIwcHhcIl1dLFxyXG4gICAgICAgICAgICBbXCJzbVwiLCBbXCI1NDRweFwiXV0sXHJcbiAgICAgICAgICAgIFtcIm1kXCIsIFtcIjc2OHB4XCJdXSxcclxuICAgICAgICAgICAgW1wibGdcIiwgW1wiMTAxMnB4XCJdXSxcclxuICAgICAgICAgICAgW1wieGxcIiwgW1wiMTI4MHB4XCJdXSxcclxuICAgICAgICAgICAgW1wiMTZweFwiLCBbXCIxNnB4XCJdXSxcclxuICAgICAgICAgICAgW1wiMjRweFwiLCBbXCIyNHB4XCJdXSxcclxuICAgICAgICAgICAgW1wiMzJweFwiLCBbXCIzMnB4XCJdXSxcclxuICAgICAgICAgICAgW1wiNDhweFwiLCBbXCI0OHB4XCJdXSxcclxuICAgICAgICAgICAgW1wiNjRweFwiLCBbXCI2NHB4XCJdXVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmNzc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJ3XCIsIFtcIndpZHRoXCJdLCBfdGhpcy5wb3N0Zml4VmFsdWVzTWFwKSxcclxuICAgICAgICAgICAgbmV3IGNzc0NsYXNzRGF0YV8xLkNzc0NsYXNzRGF0YShcIm1heC13XCIsIFtcIm1heC13aWR0aFwiXSwgX3RoaXMucG9zdGZpeFZhbHVlc01hcCksXHJcbiAgICAgICAgICAgIG5ldyBjc3NDbGFzc0RhdGFfMS5Dc3NDbGFzc0RhdGEoXCJtaW4td1wiLCBbXCJtaW4td2lkdGhcIl0sIF90aGlzLnBvc3RmaXhWYWx1ZXNNYXApXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gV2lkdGhHZW5lcmF0b3I7XHJcbn0oR2VuZXJhdG9yQmFzZV8xLkdlbmVyYXRvckJhc2UpKTtcclxuZXhwb3J0cy5XaWR0aEdlbmVyYXRvciA9IFdpZHRoR2VuZXJhdG9yO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG52YXIgY3NzdmlsbGVfMSA9IHJlcXVpcmUoXCIuL2Nzc3ZpbGxlXCIpO1xyXG52YXIgcGF0aE1vZHVsZSA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG5mdW5jdGlvbiBnZXRGaWxlcyhwYXRoRGlyKSB7XHJcbiAgICB2YXIgZmlsZXMgPSBbXTtcclxuICAgIGlmICghZnMuZXhpc3RzU3luYyhwYXRoRGlyKSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJEaXJlY3RvcnkgJ1wiLmNvbmNhdChwYXRoTW9kdWxlLnJlc29sdmUocGF0aERpciksIFwiJyBub3QgZm91bmQhXCIpKTtcclxuICAgICAgICByZXR1cm4gZmlsZXM7XHJcbiAgICB9XHJcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChmaWxlKSB7XHJcbiAgICAgICAgdmFyIGZ1bGxQYXRoID0gcGF0aERpciArICcvJyArIGZpbGU7XHJcbiAgICAgICAgaWYgKGZzLmxzdGF0U3luYyhmdWxsUGF0aCkuaXNEaXJlY3RvcnkoKSlcclxuICAgICAgICAgICAgZ2V0RmlsZXMoZnVsbFBhdGgpLmZvckVhY2goZnVuY3Rpb24gKHgpIHsgcmV0dXJuIGZpbGVzLnB1c2goZmlsZSArICcvJyArIHgpOyB9KTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGZpbGVzLnB1c2goZmlsZSk7XHJcbiAgICB9O1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IGZzLnJlYWRkaXJTeW5jKHBhdGhEaXIpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBmaWxlID0gX2FbX2ldO1xyXG4gICAgICAgIF9sb29wXzEoZmlsZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmlsZXM7XHJcbn1cclxudmFyIHBhdGggPSBwcm9jZXNzLmFyZ3ZbMl07XHJcbnZhciBkaXIgPSBwcm9jZXNzLmFyZ3ZbM107XHJcbnZhciBleHRlbnNpb25zID0gcHJvY2Vzcy5hcmd2WzRdO1xyXG5pZiAoIXBhdGgpIHtcclxuICAgIHBhdGggPSBcImJ1aWxkL2Nzc3ZpbGxlLmNzc1wiO1xyXG59XHJcbmlmICghZXh0ZW5zaW9ucykge1xyXG4gICAgdmFyIGNzcyA9IGNzc3ZpbGxlXzEuQ3NzdmlsbGUuZ2V0Q3NzKCk7XHJcbiAgICBmcy53cml0ZUZpbGUocGF0aCwgY3NzLCBmdW5jdGlvbiAoKSB7IGNvbnNvbGUubG9nKFwiZG9uZTogXCIgKyBwYXRoKTsgfSk7XHJcbn1cclxuZWxzZSB7XHJcbiAgICB2YXIgY2xhc3NlcyA9IFtdO1xyXG4gICAgdmFyIGV4QXJyYXkgPSBleHRlbnNpb25zLnNwbGl0KFwiLFwiKTtcclxuICAgIHZhciBmaWxlcyA9IGdldEZpbGVzKGRpcikuZmlsdGVyKGZ1bmN0aW9uIChmbikgeyByZXR1cm4gZXhBcnJheS5maWx0ZXIoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGZuLmVuZHNXaXRoKGUpOyB9KS5sZW5ndGggPiAwOyB9KTtcclxuICAgIGZpbGVzLmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcclxuICAgICAgICBmaWxlID0gZGlyICsgJy8nICsgZmlsZTtcclxuICAgICAgICB2YXIgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlKS50b1N0cmluZygpO1xyXG4gICAgICAgIHZhciBleHQgPSBwYXRoTW9kdWxlLmV4dG5hbWUoZmlsZSk7XHJcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IGV4dCA9PT0gXCIuanN4XCIgPyBcImNsYXNzTmFtZT1cIiA6IFwiY2xhc3M9XCI7XHJcbiAgICAgICAgdmFyIHBvcyA9IDA7XHJcbiAgICAgICAgdmFyIGNzc0NsYXNzZXMgPSBcIlwiO1xyXG4gICAgICAgIHdoaWxlIChjb250ZW50LmluZGV4T2YoY2xhc3NOYW1lLCBwb3MpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHBvcyA9IGNvbnRlbnQuaW5kZXhPZihjbGFzc05hbWUsIHBvcykgKyBjbGFzc05hbWUubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAoY29udGVudFtwb3NdID09PSAnXCInKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW5kID0gY29udGVudC5pbmRleE9mKCdcIicsIHBvcyArIDEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVuZCAtIHBvcyA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzc2VzID0gY29udGVudC5zdWJzdHJpbmcocG9zICsgMSwgZW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzc2VzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGFzc2VzLmluZGV4T2YoYykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLnB1c2goYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBvcyA9IGVuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgXCIuY29uY2F0KGZpbGUsIFwiIHByb2Nlc3NlZFwiKSk7XHJcbiAgICB9KTtcclxuICAgIHZhciBjc3MgPSBjc3N2aWxsZV8xLkNzc3ZpbGxlLmdldENzcyhjbGFzc2VzKTtcclxuICAgIGZzLndyaXRlRmlsZShwYXRoLCBjc3MsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRvbmU6ICdcIi5jb25jYXQocGF0aCwgXCInIHdpdGggcGF0dGVybiAnXCIpLmNvbmNhdChleHRlbnNpb25zLCBcIicgZm9yIGRpciAnXCIpLmNvbmNhdChkaXIsIFwiJ1wiKSk7XHJcbiAgICB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=