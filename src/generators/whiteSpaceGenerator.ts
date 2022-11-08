import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class WhiteSpaceGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["normal", ["normal"]],
        ["nowrap", ["nowrap"]],
        ["pre", ["pre"]],
        ["pre-wrap", ["pre-wrap"]],
        ["pre-line", ["pre-line"]],
        ["break-spaces", ["break-spaces"]]
    ]);
    cssData = [
        new CssClassData("white-space", ["white-space"], this.postfixValuesMap)
    ];
}