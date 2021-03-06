import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class HeightGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
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
    cssData = [
        new CssClassData("h", ["height"], this.postfixValuesMap),
        new CssClassData("max-h", ["max-height"], this.postfixValuesMap),
        new CssClassData("min-h", ["min-height"], this.postfixValuesMap)
    ];
}