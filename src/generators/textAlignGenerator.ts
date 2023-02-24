import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class TextAlignGenerator extends GeneratorBase {
    list = ["underline", "overline", "none", "start", "end", "left", "right", "center", 
      "justify", "justify-all", "match-parent", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("text-align", ["text-align"], this.list, this.postfixValuesMap)
    ];
}