import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class FontSizeGenerator extends Generator {
    cssClassToValuesMap = new Map([
        ["2xs", ["11px"]],
        ["xs", ["12px"]],
        ["sm", ["14px"]],
        ["md", ["16px"]],
        ["lg", ["18px"]],
        ["xl", ["22px"]],
        ["2xl", ["24px"]],
        ["3xl", ["28px"]],
        ["4xl", ["32px"]],
        ["5xl", ["36px"]],
        ["6xl", ["45px"]],
        ["7xl", ["57px"]],
        ["8xl", ["69px"]],
        ["9xl", ["80px"]],
        ["xxx-large", ["48px", "xxx-large"]],
    ]);
    list = ["smaller", "larger", "xx-small", "x-small", "small", "medium", "large",
        "x-large", "xx-large"];
    cssData = [
        new CssClassData("fs", ["font-size"], this.list, this.cssClassToValuesMap)
    ];
}