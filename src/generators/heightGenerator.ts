import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class HeightGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["100", ["100%"]],
    ]);
    list = ["auto", "max-content", "min-content", "16px", "24px", "32px", "48px", "64px", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("h", ["height"], this.list, this.postfixValuesMap),
        new CssClassData("max-h", ["max-height"], this.list, this.postfixValuesMap),
        new CssClassData("min-h", ["min-height"], this.list, this.postfixValuesMap)
    ];
}