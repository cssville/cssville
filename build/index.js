"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var Cssville = /** @class */ (function () {
    function Cssville() {
    }
    Cssville.css = function () {
        var css = "";
        var prefixValueMap = new Map([
            ["xs", "320px"],
            ["sm", "544px"],
            ["md", "768px"],
            ["lg", "1012px"],
            ["xl", "1280px"]
        ]);
        for (var x = 0; x < Cssville.generators.length; x++) {
            var g = Cssville.generators[x];
            css += g.generate("");
        }
        prefixValueMap.forEach(function (value, key) {
            var innerCss = "";
            var prefix = key;
            for (var x = 0; x < Cssville.generators.length; x++) {
                var g = Cssville.generators[x];
                innerCss += g.generate(prefix);
            }
            css += "@media (min-width: " + value + ") { " + innerCss + "} ";
        });
        return css;
    };
    Cssville.generators = [
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
        new widthGenerator_1.WidthGenerator(),
    ];
    return Cssville;
}());
exports.Cssville = Cssville;
//# sourceMappingURL=index.js.map