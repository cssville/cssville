import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "./../GeneratorBase";

export class PaddingGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["0", ["0px"]],
        ["1", ["4px"]],
        ["2", ["8px"]],
        ["3", ["16px"]],
        ["4", ["32px"]],
        ["5", ["64px"]],
    ]);
    list = ["inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("p", ["padding"], this.list, this.postfixValuesMap),
        new CssClassData("pt", ["padding-top"], this.list, this.postfixValuesMap),
        new CssClassData("pb", ["padding-bottom"], this.list, this.postfixValuesMap),
        new CssClassData("pl", ["padding-left"], this.list, this.postfixValuesMap),
        new CssClassData("pr", ["padding-right"], this.list, this.postfixValuesMap),
        new CssClassData("px", ["padding-left", "padding-right"], this.list, this.postfixValuesMap),
        new CssClassData("py", ["padding-top", "padding-bottom"], this.list, this.postfixValuesMap),
    ];
}