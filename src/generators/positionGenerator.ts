import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class PositionGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["static", ["static"]],
        ["relative", ["relative"]],
        ["absolute", ["absolute"]],
        ["fixed", ["fixed"]],
        ["sticky", ["sticky"]],
        ["inherit", ["inherit"]],
        ["initial", ["initial"]],
        ["revert", ["revert"]],
        ["unset", ["unset"]]
    ]);
    cssData = [
        new CssClassData("position", ["position"], this.postfixValuesMap),
    ];
}