import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";
import CssvilleBreakpoints from "../vars/breakpoints";

export class WidthGenerator extends Generator {
  cssClassToValuesMap = new Map([
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
    ["xs", [CssvilleBreakpoints.xs.var]],
    ["sm", [CssvilleBreakpoints.sm.var]],
    ["md", [CssvilleBreakpoints.md.var]],
    ["lg", [CssvilleBreakpoints.lg.var]],
    ["xl", [CssvilleBreakpoints.xl.var]],
  ]);
  list = ["max-content", "min-content", "fit-content", "1px", "2px", "4px", "8px", "12px", "16px", "24px", "32px", "40px", "48px", "64px", "inherit", "initial", "revert", "unset"];
  cssData = [
    new CssClassData("w", ["width"], this.list, this.cssClassToValuesMap),
    new CssClassData("max-w", ["max-width"], this.list, this.cssClassToValuesMap),
    new CssClassData("min-w", ["min-width"], this.list, this.cssClassToValuesMap)
  ];
}