import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class HeightGenerator extends Generator {
    cssClassToValuesMap = new Map([
        ["100", ["100%"]],
    ]);
    list = ["auto", "max-content", "min-content", "100vh", "1px", "2px", "4px", "8px", "12px", "16px", "24px", "32px", "40px", "48px", "64px", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("h", ["height"], this.list, this.cssClassToValuesMap),
        new CssClassData("max-h", ["max-height"], this.list, this.cssClassToValuesMap),
        new CssClassData("min-h", ["min-height"], this.list, this.cssClassToValuesMap)
    ];
}