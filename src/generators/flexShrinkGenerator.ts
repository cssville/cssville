import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class FlexShrinkGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["0", ["0"]],
        ["1", ["1"]],
        ["2", ["2"]],
        ["3", ["3"]],
    ]);
    list = ["inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("flex-shrink", ["-o-flex-shrink", "-webkit-flex-shrink", "flex-shrink"], this.list, this.postfixValuesMap)
    ];
}