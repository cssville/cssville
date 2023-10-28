import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class TextWrapGenerator extends Generator {
    list = ["wrap", "nowrap", "balance", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("text-wrap", ["text-wrap"], this.list, this.cssClassToValuesMap)
    ];
}