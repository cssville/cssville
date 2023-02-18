import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class WhiteSpaceGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["nowrap", ["nowrap"]],
        ["pre", ["pre"]],
        ["pre-wrap", ["pre-wrap"]],
        ["pre-line", ["pre-line"]],
        ["break-spaces", ["break-spaces"]]
    ]);
    list = ["normal"];
    cssData = [
        new CssClassData("white-space", ["white-space"], this.list, this.postfixValuesMap)
    ];
}