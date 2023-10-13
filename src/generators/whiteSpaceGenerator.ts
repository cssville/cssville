import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class WhiteSpaceGenerator extends Generator {
    list = ["nowrap", "pre", "pre-wrap", "pre-line", "break-spaces", "normal"];
    cssData = [
        new CssClassData("white-space", ["white-space"], this.list)
    ];
}