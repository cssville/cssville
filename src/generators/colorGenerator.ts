import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class ColorGenerator extends GeneratorBase {
    list = ["black", "white", "transparent", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("color", ["color"], this.list)
    ];
}