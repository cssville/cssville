import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class FlexDirectionGenerator extends GeneratorBase {
    postfixValueMap = new Map([
        ["row", ["row"]],
        ["row-reverse", ["row-reverse"]],
        ["column", ["column"]],
        ["column-reverse", ["column-reverse"]],
        ["inherit", ["inherit"]],
        ["initial", ["initial"]],
        ["revert", ["revert"]],
        ["unset", ["unset"]]
    ]);
    cssData = [
        new CssClassData("flex-direction", ["flex-direction"])
    ];
}