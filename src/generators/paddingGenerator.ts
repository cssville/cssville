import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class PaddingGenerator extends Generator {
    cssClassToValuesMap = new Map([
        ["0", ["0px"]],
        ["1", ["4px"]],
        ["2", ["8px"]],
        ["3", ["16px"]],
        ["4", ["32px"]],
        ["5", ["64px"]],
    ]);
    list = ["inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("p", ["padding"], this.list, this.cssClassToValuesMap),
        new CssClassData("pt", ["padding-top"], this.list, this.cssClassToValuesMap),
        new CssClassData("pb", ["padding-bottom"], this.list, this.cssClassToValuesMap),
        new CssClassData("pl", ["padding-left"], this.list, this.cssClassToValuesMap),
        new CssClassData("pr", ["padding-right"], this.list, this.cssClassToValuesMap),
        new CssClassData("px", ["padding-left", "padding-right"], this.list, this.cssClassToValuesMap),
        new CssClassData("py", ["padding-top", "padding-bottom"], this.list, this.cssClassToValuesMap),
    ];
}