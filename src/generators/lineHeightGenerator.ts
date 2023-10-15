import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class LineHeightGenerator extends Generator {
    cssClassToValuesMap = new Map([
        ["2xs", ["14px"]],
        ["xs", ["16px"]],
        ["sm", ["20px"]],
        ["md", ["24px"]],
        ["lg", ["26px"]],
        ["xl", ["28px"]],
        ["2xl", ["32px"]],
        ["3xl", ["36px"]],
        ["4xl", ["40px"]],
        ["5xl", ["44px"]],
        ["6xl", ["52px"]],
        ["7xl", ["64px"]],
        ["8xl", ["76px"]],
        ["9xl", ["88px"]],
    ]);
    cssData = [
        new CssClassData("lh", ["line-height"], [], this.cssClassToValuesMap)
    ];
}