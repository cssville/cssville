import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class FloatGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["left", ["left"]],
        ["right", ["right"]],
        ["none", ["none"]],
        ["inherit", ["inherit"]],
        ["initial", ["initial"]],
        ["revert", ["revert"]],
        ["unset", ["unset"]]
    ]);
    cssData = [
        new CssClassData("float", ["float"], this.postfixValuesMap)
    ];
}