import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class FlexShrinkGenerator extends GeneratorBase {
    postfixValueMap = new Map([
        ["0", ["0"]],
        ["1", ["1"]],
        ["2", ["2"]],
        ["3", ["3"]],
        ["inherit", ["inherit"]],
        ["initial", ["initial"]],
        ["revert", ["revert"]],
        ["unset", ["unset"]]
    ]);
    cssData = [
        new CssClassData("flex-shrink", ["flex-shrink"])
    ];
}