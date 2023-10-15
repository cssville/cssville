import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class LineHeightGenerator extends Generator {
    cssClassToValuesMap = new Map([
        ["2xs", ["14px"]],
        ["xs", ["16px"]],
        ["sm", ["20px"]],
        ["md", ["24px"]],
        ["lg", ["28px"]],
        ["xl", ["32px"]],
        ["2xl", ["36px"]],
        ["3xl", ["40px"]],
        ["4xl", ["44px"]],
        ["5xl", ["52px"]],
        ["6xl", ["64px"]],
        ["7xl", ["76px"]],
        ["8xl", ["88px"]],
    ]);
    cssData = [
        new CssClassData("fs", ["font-size"], [], this.cssClassToValuesMap)
    ];
}