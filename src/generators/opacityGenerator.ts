import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class OpacityGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["00", ["0.0"]],
        ["01", ["0.1"]],
        ["02", ["0.2"]],
        ["03", ["0.3"]],
        ["04", ["0.4"]],
        ["05", ["0.5"]],
        ["06", ["0.6"]],
        ["07", ["0.7"]],
        ["08", ["0.8"]],
        ["09", ["0.9"]],
        ["10", ["1.0"]],
    ]);
    list = ["inherit", "initial", "revert", "revert-layer", "unset"];
    cssData = [
        new CssClassData("opacity", ["opacity"], this.list, this.postfixValuesMap),
    ];
}