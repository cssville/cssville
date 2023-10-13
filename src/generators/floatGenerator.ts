import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class FloatGenerator extends Generator {
    list = ["left", "right", "none", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("float", ["float"], this.list)
    ];
}