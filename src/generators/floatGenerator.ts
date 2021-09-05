import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class FloatGenerator extends GeneratorBase {
    postfixValueMap = new Map([
        ["left", ["left"]],
        ["right", ["right"]],
        ["none", ["none"]],
        ["inline-start", ["inline-start"]],
        ["inline-end", ["inline-end"]],
        ["inherit", ["inherit"]],
        ["initial", ["initial"]],
        ["revert", ["revert"]],
        ["unset", ["unset"]]
    ]);
    cssData = [
        new CssClassData("float", ["float"])
    ];
}