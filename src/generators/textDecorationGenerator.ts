import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class TextDecorationGenerator extends GeneratorBase {
    postfixValueMap = new Map([
        ["underline", "underline"],
        ["overline", "overline"],
        ["none", "none"],
        ["inherit", "inherit"],
        ["initial", "initial"],
        ["revert", "revert"],
        ["unset", "unset"]
    ]);
    cssData = [
        new CssClassData("text-decoration", ["text-decoration"])
    ];
}