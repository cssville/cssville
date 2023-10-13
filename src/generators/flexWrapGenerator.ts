import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class FlexWrapGenerator extends Generator {
    list = ["nowrap", "wrap", "wrap-reverse", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("flex-wrap", ["-moz-flex-wrap", "-ms-flex-wrap", "-o-flex-wrap", "-webkit-flex-wrap", "flex-wrap"], this.list)
    ];
}