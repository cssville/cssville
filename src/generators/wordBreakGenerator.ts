import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class WordBreakGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["normal", ["normal"]],
        ["break-all", ["break-all"]],
        ["keep-all", ["keep-all"]],
        ["break-word", ["break-word"]]
    ]);
    cssData = [
        new CssClassData("word-break", ["word-break"], this.postfixValuesMap)
    ];
}