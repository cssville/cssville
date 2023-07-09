import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class OverflowGenerator extends GeneratorBase {
    list = ["visible", "hidden", "scroll", "auto"];
    cssData = [
        new CssClassData("overflow", ["overflow"], this.list),
        new CssClassData("overflow-x", ["overflow-x"], this.list),
        new CssClassData("overflow-y", ["overflow-y"], this.list),
    ];
}