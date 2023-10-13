import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class OverflowGenerator extends Generator {
    list = ["visible", "hidden", "scroll", "auto"];
    cssData = [
        new CssClassData("overflow", ["overflow"], this.list),
        new CssClassData("overflow-x", ["overflow-x"], this.list),
        new CssClassData("overflow-y", ["overflow-y"], this.list),
    ];
}