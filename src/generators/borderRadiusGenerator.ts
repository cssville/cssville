import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class BorderRadiusGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["0", ["0px"]],
        ["1", ["4px"]],
        ["2", ["8px"]],
        ["3", ["16px"]],
        ["4", ["32px"]],
        ["5", ["64px"]],
        ["50p", ["50%"]],
        ["inherit", ["inherit"]],
        ["initial", ["initial"]],
        ["revert", ["revert"]],
        ["unset", ["unset"]]
    ]);
    cssData = [
        new CssClassData("br", ["-ms-border-radius", "border-radius"], this.postfixValuesMap),
        new CssClassData("br-top-left", ["-ms-border-top-left-radius", "border-top-left-radius"], this.postfixValuesMap),
        new CssClassData("br-top-right", ["-ms-border-top-right-radius", "border-top-right-radius"], this.postfixValuesMap),
        new CssClassData("br-bottom-right", ["-ms-border-bottom-right-radius", "border-bottom-right-radius"], this.postfixValuesMap),
        new CssClassData("br-bottom-left", ["-ms-border-bottom-left-radius", "border-bottom-left-radius"], this.postfixValuesMap)
    ];
}