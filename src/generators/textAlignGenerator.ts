import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class TextAlignGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["underline", ["underline"]],
        ["overline", ["overline"]],
        ["none", ["none"]],
        ["start", ["start"]],
        ["end", ["end"]],
        ["left", ["left"]],
        ["right", ["right"]],
        ["center", ["center"]],
        ["justify", ["justify"]],
        ["justify-all", ["justify-all"]],
        ["match-parent", ["match-parent"]],
        ["inherit", ["inherit"]],
        ["initial", ["initial"]],
        ["revert", ["revert"]],
        ["unset", ["unset"]]
    ]);
    cssData = [
        new CssClassData("text-align", ["text-align"])
    ];
}