import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class MarginGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
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
    cssData = [
        new CssClassData("m", ["margin"], this.postfixValuesMap),
        new CssClassData("mt", ["margin-top"], this.postfixValuesMap),
        new CssClassData("mb", ["margin-bottom"], this.postfixValuesMap),
        new CssClassData("ml", ["margin-left"], this.postfixValuesMap),
        new CssClassData("mr", ["margin-right"], this.postfixValuesMap),
        new CssClassData("mx", ["margin-left", "margin-right"], this.postfixValuesMap),
        new CssClassData("my", ["margin-top", "margin-bottom"], this.postfixValuesMap),
    ];
}