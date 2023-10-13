import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class PositionGenerator extends Generator {
    list = ["static", "relative", "absolute", "fixed", "sticky", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("position", ["position"], this.list),
    ];
}