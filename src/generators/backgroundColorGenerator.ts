import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class BackgroundColorGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["black", ["black"]],
        ["white", ["white"]],
        ["transparent", ["transparent"]],
        ["inherit", ["inherit"]],
        ["initial", ["initial"]],
        ["revert", ["revert"]],
        ["unset", ["unset"]]
    ]);
    cssData = [
        new CssClassData("bg-color", ["background-color"], this.postfixValuesMap)
    ];
}