import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class FontSizeGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["xx-small", ["xx-small"]],
        ["x-small", ["x-small"]],
        ["small", ["small"]],
        ["medium", ["medium"]],
        ["large", ["large"]],
        ["x-large", ["x-large"]],
        ["xx-large", ["xx-large"]],
        ["xxx-large", ["48px", "xxx-large"]],
        ["smaller", ["smaller"]],
        ["larger", ["larger"]],
    ]);
    list = ["smaller", "larger", "1rem", "2rem", "3rem", "4rem", "5rem", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("fs", ["font-size"], this.list, this.postfixValuesMap)
    ];
}