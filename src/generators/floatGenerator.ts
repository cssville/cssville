import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class FloatGenerator extends GeneratorBase {
    list = ["left", "right", "none", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("float", ["float"], this.list)
    ];
}