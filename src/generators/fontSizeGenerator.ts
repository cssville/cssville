import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class FontSizeGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["xxx-large", ["48px", "xxx-large"]],
        ["4x-large", ["64px"]],
    ]);
    list = ["smaller", "larger", "xx-small", "x-small", "small", "medium", "large",
        "x-large", "xx-large", "1rem", "2rem", "3rem", "4rem", "5rem", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("fs", ["font-size"], this.list, this.postfixValuesMap)
    ];
}