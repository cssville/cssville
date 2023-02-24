import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class WordBreakGenerator extends GeneratorBase {
    list = ["break-all", "keep-all", "break-word", "normal"];
    cssData = [
        new CssClassData("word-break", ["word-break"], this.list)
    ];
}