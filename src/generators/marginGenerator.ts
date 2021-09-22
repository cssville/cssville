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
        new CssClassData("m", ["margin"]),
        new CssClassData("mt", ["margin-top"]),
        new CssClassData("mb", ["margin-bottom"]),
        new CssClassData("ml", ["margin-left"]),
        new CssClassData("mr", ["margin-right"]),
        new CssClassData("mx", ["margin-left", "margin-right"]),
        new CssClassData("my", ["margin-top", "margin-bottom"]),
    ];
}