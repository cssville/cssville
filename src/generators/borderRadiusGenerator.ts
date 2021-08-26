import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class BorderRadiusGenerator extends GeneratorBase {
    postfixValueMap = new Map([
        ["0", "0px"],
        ["1", "4px"],
        ["2", "8px"],
        ["3", "16px"],
        ["4", "32px"],
        ["5", "64px"],
        ["inherit", "inherit"],
        ["initial", "initial"],
        ["revert", "revert"],
        ["unset", "unset"]
    ]);
    cssData = [
        new CssClassData("br", ["border-radius"]),
        new CssClassData("br-top-left", ["border-top-left-radius"]),
        new CssClassData("br-top-right", ["border-top-right-radius"]),
        new CssClassData("br-bottom-right", ["border-bottom-right-radius"]),
        new CssClassData("br-bottom-left", ["border-bottom-left-radius"])
    ];
}