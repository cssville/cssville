"use strict";
exports.__esModule = true;
exports.Cssville = void 0;
var paddingGenerator_1 = require("./generators/paddingGenerator");
var marginGenerator_1 = require("./generators/marginGenerator");
var displayGenerator_1 = require("./generators/displayGenerator");
var flexDirectionGenerator_1 = require("./generators/flexDirectionGenerator");
var flexGrowGenerator_1 = require("./generators/flexGrowGenerator");
var flexWrapGenerator_1 = require("./generators/flexWrapGenerator");
var flexShrinkGenerator_1 = require("./generators/flexShrinkGenerator");
var floatGenerator_1 = require("./generators/floatGenerator");
var fontWeightGenerator_1 = require("./generators/fontWeightGenerator");
var widthGenerator_1 = require("./generators/widthGenerator");
var fontSizeGenerator_1 = require("./generators/fontSizeGenerator");
var positionGenerator_1 = require("./generators/positionGenerator");
var alignItemsGenerator_1 = require("./generators/alignItemsGenerator");
var justifyContentGenerator_1 = require("./generators/justifyContentGenerator");
var textDecorationGenerator_1 = require("./generators/textDecorationGenerator");
var heightGenerator_1 = require("./generators/heightGenerator");
var colorGenerator_1 = require("./generators/colorGenerator");
var borderRadiusGenerator_1 = require("./generators/borderRadiusGenerator");
var cursorGenerator_1 = require("./generators/cursorGenerator");
var backgroundColorGenerator_1 = require("./generators/backgroundColorGenerator");
var textAlignGenerator_1 = require("./generators/textAlignGenerator");
var wordBreakGenerator_1 = require("./generators/wordBreakGenerator");
var whiteSpaceGenerator_1 = require("./generators/whiteSpaceGenerator");
var objectFitGenerator_1 = require("./generators/objectFitGenerator");
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
        new objectFitGenerator_1.ObjectFitGenerator(),
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
