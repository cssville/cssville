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
    ]);
    list = ["inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("m", ["margin"], this.list, this.postfixValuesMap),
        new CssClassData("mt", ["margin-top"], this.list, this.postfixValuesMap),
        new CssClassData("mb", ["margin-bottom"], this.list, this.postfixValuesMap),
        new CssClassData("ml", ["margin-left"], this.list, this.postfixValuesMap),
        new CssClassData("mr", ["margin-right"], this.list, this.postfixValuesMap),
        new CssClassData("mx", ["margin-left", "margin-right"], this.list, this.postfixValuesMap),
        new CssClassData("my", ["margin-top", "margin-bottom"], this.list, this.postfixValuesMap),
    ];
}