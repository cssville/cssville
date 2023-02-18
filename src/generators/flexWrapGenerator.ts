import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class FlexWrapGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["nowrap", ["nowrap"]],
        ["wrap", ["wrap"]],
        ["wrap-reverse", ["wrap-reverse"]],
    ]);
    list = ["inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("flex-wrap", ["-moz-flex-wrap", "-ms-flex-wrap", "-o-flex-wrap", "-webkit-flex-wrap", "flex-wrap"], this.list, this.postfixValuesMap)
    ];
}