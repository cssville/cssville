import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class AlignItemsGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["normal", ["normal"]],
        ["stretch", ["stretch"]],
        ["center", ["center"]],
        ["start", ["start"]],
        ["flex-start", ["flex-start"]],
        ["end", ["end"]],
        ["flex-end", ["flex-end"]],
        ["baseline", ["baseline"]],
        ["first-baseline", ["first baseline"]],
        ["last-baseline", ["last baseline"]],
        ["safe-center", ["safe center"]],
        ["unsafe-center", ["unsafe center"]],
        ["inherit", ["inherit"]],
        ["initial", ["initial"]],
        ["revert", ["revert"]],
        ["unset", ["unset"]]
    ]);
    cssData = [
        new CssClassData("align-items", ["-ms-align-items", "-o-align-items", "-webkit-align-items", "align-items"], this.postfixValuesMap)
    ];
}