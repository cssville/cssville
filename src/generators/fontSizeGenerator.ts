import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class FontSizeGenerator extends Generator {
    cssClassToValuesMap = new Map([
        ["2xs", ["11px"]],
        ["xs", ["12px"]],
        ["sm", ["14px"]],
        ["md", ["16px"]],
        ["lg", ["22px"]],
        ["xl", ["24px"]],
        ["2xl", ["28px"]],
        ["3xl", ["32px"]],
        ["4xl", ["36px"]],
        ["5xl", ["45px"]],
        ["6xl", ["57px"]],
        ["7xl", ["69px"]],
        ["8xl", ["80px"]],
        ["xxx-large", ["48px", "xxx-large"]],
    ]);
    list = ["smaller", "larger", "xx-small", "x-small", "small", "medium", "large",
        "x-large", "xx-large"];
    cssData = [
        new CssClassData("fs", ["font-size"], this.list, this.cssClassToValuesMap)
    ];
}