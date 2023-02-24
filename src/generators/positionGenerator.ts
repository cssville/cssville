import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class PositionGenerator extends GeneratorBase {
    list = ["static", "relative", "absolute", "fixed", "sticky", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("position", ["position"], this.list),
    ];
}