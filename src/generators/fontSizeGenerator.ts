import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class FontSizeGenerator extends GeneratorBase {
    postfixValueMap = new Map([
        ["xx-small", "xx-small"],
        ["x-small", "x-small"],
        ["small", "small"],
        ["medium", "medium"],
        ["large", "large"],
        ["x-large", "x-large"],
        ["xx-large", "xx-large"],
        ["xxx-large", "xxx-large"],
        ["smaller", "smaller"],
        ["larger", "larger"],
        ["1rem", "1rem"],
        ["2rem", "2rem"],
        ["3rem", "3rem"],
        ["4rem", "4rem"],
        ["5rem", "5rem"],
        ["inherit", "inherit"],
        ["initial", "initial"],
        ["revert", "revert"],
        ["unset", "unset"]
    ]);
    cssData = [
        new CssClassData("fs", ["font-size"])
    ];
}