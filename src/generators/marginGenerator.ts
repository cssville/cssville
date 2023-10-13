import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class MarginGenerator extends Generator {
    cssClassToValuesMap = new Map([
        ["0", ["0px"]],
        ["1", ["4px"]],
        ["2", ["8px"]],
        ["3", ["16px"]],
        ["4", ["32px"]],
        ["5", ["64px"]],
        ["-1", ["-4px"]],
        ["-2", ["-8px"]],
        ["-3", ["-16px"]],
        ["-4", ["-32px"]],
        ["-5", ["-64px"]],
    ]);
    list = ["auto", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("m", ["margin"], this.list, this.cssClassToValuesMap),
        new CssClassData("mt", ["margin-top"], this.list, this.cssClassToValuesMap),
        new CssClassData("mb", ["margin-bottom"], this.list, this.cssClassToValuesMap),
        new CssClassData("ml", ["margin-left"], this.list, this.cssClassToValuesMap),
        new CssClassData("mr", ["margin-right"], this.list, this.cssClassToValuesMap),
        new CssClassData("mx", ["margin-left", "margin-right"], this.list, this.cssClassToValuesMap),
        new CssClassData("my", ["margin-top", "margin-bottom"], this.list, this.cssClassToValuesMap),
    ];
}