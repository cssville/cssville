import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class BorderRadiusGenerator extends Generator {
    cssClassToValuesMap = new Map([
        ["0", ["0px"]],
        ["1", ["4px"]],
        ["2", ["8px"]],
        ["3", ["16px"]],
        ["4", ["32px"]],
        ["5", ["48px"]],
        ["6", ["64px"]],
    ]);
    list = ["inherit", "initial", "revert", "unset", "9999px"];
    cssData = [
        new CssClassData("br", ["-ms-border-radius", "border-radius"], this.list, this.cssClassToValuesMap),
        new CssClassData("br-top-left", ["-ms-border-top-left-radius", "border-top-left-radius"], this.list, this.cssClassToValuesMap),
        new CssClassData("br-top-right", ["-ms-border-top-right-radius", "border-top-right-radius"], this.list, this.cssClassToValuesMap),
        new CssClassData("br-bottom-right", ["-ms-border-bottom-right-radius", "border-bottom-right-radius"], this.list, this.cssClassToValuesMap),
        new CssClassData("br-bottom-left", ["-ms-border-bottom-left-radius", "border-bottom-left-radius"], this.list, this.cssClassToValuesMap)
    ];
}