import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class FloatGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["left", ["left"]],
        ["right", ["right"]],
        ["none", ["none"]],
    ]);
    list = ["inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("float", ["float"], this.list, this.postfixValuesMap)
    ];
}