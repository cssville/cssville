import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class FontWeightGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["normal", ["normal"]],
        ["bold", ["bold"]],
        ["lighter", ["lighter"]],
        ["bolder", ["bolder"]],
        ["100", ["100"]],
        ["200", ["200"]],
        ["300", ["300"]],
        ["400", ["400"]],
        ["500", ["500"]],
        ["600", ["600"]],
        ["700", ["700"]],
        ["800", ["800"]],
        ["900", ["900"]],
        ["inherit", ["inherit"]],
        ["initial", ["initial"]],
        ["revert", ["revert"]],
        ["unset", ["unset"]]
    ]);
    cssData = [
        new CssClassData("fw", ["font-weight"], this.postfixValuesMap)
    ];
}