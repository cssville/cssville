import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class HeightGenerator extends GeneratorBase {
    list = ["auto", "max-content", "min-content", "16px", "24px", "32px", "48px", "64px", "100", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("h", ["height"], this.list),
        new CssClassData("max-h", ["max-height"], this.list),
        new CssClassData("min-h", ["min-height"], this.list)
    ];
}