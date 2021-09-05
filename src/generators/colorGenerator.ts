import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class ColorGenerator extends GeneratorBase {
    postfixValueMap = new Map([
        ["black", ["black"]],
        ["white", ["white"]],
        ["transparent", ["transparent"]],
        ["inherit", ["inherit"]],
        ["initial", ["initial"]],
        ["revert", ["revert"]],
        ["unset", ["unset"]]
    ]);
    cssData = [
        new CssClassData("color", ["color"])
    ];
}