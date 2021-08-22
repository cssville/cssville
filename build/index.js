"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cssville = void 0;
var paddingGenerator_1 = require("./generators/paddingGenerator");
var marginGenerator_1 = require("./generators/marginGenerator");
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
    ];
    return Cssville;
}());
exports.Cssville = Cssville;
//# sourceMappingURL=index.js.map