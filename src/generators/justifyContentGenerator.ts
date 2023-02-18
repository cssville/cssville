import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class JustifyContentGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["center", ["center"]],
        ["start", ["start"]],
        ["flex-start", ["flex-start"]],
        ["end", ["end"]],
        ["flex-end", ["flex-end"]],
        ["normal", ["normal"]],
        ["space-between", ["space-between"]],
        ["space-around", ["space-around"]],
        ["space-evenly", ["space-evenly"]],
        ["stretch", ["stretch"]],
        ["safe-center", ["safe center"]],
        ["unsafe-center", ["unsafe center"]],
    ]);
    list = ["inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("justify-content", ["-o-justify-content", "-webkit-justify-content", "justify-content"], this.list, this.postfixValuesMap)
    ];
}