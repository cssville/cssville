import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class AlignItemsGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["first-baseline", ["first baseline"]],
        ["last-baseline", ["last baseline"]],
        ["safe-center", ["safe center"]],
        ["unsafe-center", ["unsafe center"]],
    ]);
    list = ["normal", "stretch", "center", "start", "flex-start", "end", "flex-end", "baseline", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("align-items", ["-ms-align-items", "-o-align-items", "-webkit-align-items", "align-items"], this.list, this.postfixValuesMap)
    ];
}