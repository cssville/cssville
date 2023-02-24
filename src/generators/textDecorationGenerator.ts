import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class TextDecorationGenerator extends GeneratorBase {
    list = ["underline", "overline", "none", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("text-decoration", ["text-decoration"], this.list)
    ];
}