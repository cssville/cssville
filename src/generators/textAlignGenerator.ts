import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class TextAlignGenerator extends Generator {
    list = ["underline", "overline", "none", "start", "end", "left", "right", "center", 
      "justify", "justify-all", "match-parent", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("text-align", ["text-align"], this.list, this.cssClassToValuesMap)
    ];
}