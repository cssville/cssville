import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class AlignContentGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["first-baseline", ["first baseline"]],
        ["last-baseline", ["last baseline"]],
        ["safe-center", ["safe center"]],
        ["unsafe-center", ["unsafe center"]],
    ]);
    list = ["center", "start", "end", "flex-start", "flex-end", "normal",
        "baseline", "space-between", "space-around", "space-evenly", "stretch", "inherit", "initial",
        "revert", "revert-layer", "unset"];
    cssData = [
        new CssClassData("align-content", ["-ms-align-items", "-o-align-items", "-webkit-align-items", "align-items"], this.list, this.postfixValuesMap)
    ];
}