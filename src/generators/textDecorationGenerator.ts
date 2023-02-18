import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class TextDecorationGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["underline", ["underline"]],
        ["overline", ["overline"]],
        ["none", ["none"]],
    ]);
    list = ["inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("text-decoration", ["text-decoration"], this.list, this.postfixValuesMap)
    ];
}