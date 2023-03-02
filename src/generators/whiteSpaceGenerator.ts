import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class WhiteSpaceGenerator extends GeneratorBase {
    list = ["nowrap", "pre", "pre-wrap", "pre-line", "break-spaces", "normal"];
    cssData = [
        new CssClassData("white-space", ["white-space"], this.list)
    ];
}