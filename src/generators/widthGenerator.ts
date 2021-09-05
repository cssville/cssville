import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class WidthGenerator extends GeneratorBase {
    postfixValueMap = new Map([
        ["auto", ["auto"]],
        ["max-content", ["max-content"]],
        ["min-content", ["min-content"]],
        ["fit-content", ["fit-content"]],
        ["0", ["0%"]],
        ["1", ["8.333%"]],
        ["2", ["16.666%"]],
        ["3", ["25%"]],
        ["4", ["33.333%"]],
        ["5", ["41.666%"]],
        ["6", ["50%"]],
        ["7", ["58.333%"]],
        ["8", ["66.666%"]],
        ["9", ["75%"]],
        ["10", ["83.333%"]],
        ["11", ["91.666%"]],
        ["12", ["100%"]],
        ["inherit", ["inherit"]],
        ["initial", ["initial"]],
        ["revert", ["revert"]],
        ["unset", ["unset"]],
        ["xs", ["320px"]],
        ["sm", ["544px"]],
        ["md", ["768px"]],
        ["lg", ["1012px"]],
        ["xl", ["1280px"]],
        ["16px", ["16px"]],
        ["24px", ["24px"]],
        ["32px", ["32px"]],
        ["48px", ["48px"]],
        ["64px", ["64px"]]
    ]);
    cssData = [
        new CssClassData("w", ["width"]),
        new CssClassData("max-w", ["max-width"]),
        new CssClassData("min-w", ["min-width"])
    ];
}