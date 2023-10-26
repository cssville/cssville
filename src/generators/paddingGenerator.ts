import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class PaddingGenerator extends Generator {
  cssClassToValuesMap = new Map([
    ["0", ["0px"]],
    ["1", ["2px"]],
    ["2", ["4px"]],
    ["3", ["8px"]],
    ["4", ["12px"]],
    ["5", ["16px"]],
    ["6", ["24px"]],
    ["7", ["32px"]],
    ["8", ["40px"]],
    ["9", ["48px"]],
    ["10", ["64px"]],
  ]);
  list = ["inherit"];
  cssData = [
    new CssClassData("p", ["padding"], this.list, this.cssClassToValuesMap),
    new CssClassData("pt", ["padding-top"], this.list, this.cssClassToValuesMap),
    new CssClassData("pb", ["padding-bottom"], this.list, this.cssClassToValuesMap),
    new CssClassData("pl", ["padding-left"], this.list, this.cssClassToValuesMap),
    new CssClassData("pr", ["padding-right"], this.list, this.cssClassToValuesMap),
    new CssClassData("px", ["padding-left", "padding-right"], this.list, this.cssClassToValuesMap),
    new CssClassData("py", ["padding-top", "padding-bottom"], this.list, this.cssClassToValuesMap),
  ];
}