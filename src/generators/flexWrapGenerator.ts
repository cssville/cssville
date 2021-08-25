import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class FlexWrapGenerator extends GeneratorBase {
    postfixValueMap = new Map([
        ["nowrap", "nowrap"],
        ["wrap", "wrap"],
        ["wrap-reverse", "wrap-reverse"],
        ["inherit", "inherit"],
        ["initial", "initial"],
        ["revert", "revert"],
        ["unset", "unset"]
    ]);
    cssData = [
        new CssClassData("flex-wrap", ["flex-wrap"])
    ];
}