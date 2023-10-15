import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class MarginGenerator extends Generator {
  cssClassToValuesMap = new Map([
    ["0", ["0px"]],
    ["1", ["2px"]],
    ["2", ["4px"]],
    ["3", ["8px"]],
    ["4", ["12px"]],
    ["5", ["16px"]],
    ["6", ["32px"]],
    ["7", ["48px"]],
    ["8", ["64px"]],
    ["-1", ["-2px"]],
    ["-2", ["-4px"]],
    ["-3", ["-8px"]],
    ["-4", ["-12px"]],
    ["-5", ["-16px"]],
    ["-6", ["-32px"]],
    ["-7", ["-48px"]],
    ["-8", ["-64px"]],
  ]);
  list = ["auto", "inherit"];
  cssData = [
    new CssClassData("m", ["margin"], this.list, this.cssClassToValuesMap),
    new CssClassData("mt", ["margin-top"], this.list, this.cssClassToValuesMap),
    new CssClassData("mb", ["margin-bottom"], this.list, this.cssClassToValuesMap),
    new CssClassData("ml", ["margin-left"], this.list, this.cssClassToValuesMap),
    new CssClassData("mr", ["margin-right"], this.list, this.cssClassToValuesMap),
    new CssClassData("mx", ["margin-left", "margin-right"], this.list, this.cssClassToValuesMap),
    new CssClassData("my", ["margin-top", "margin-bottom"], this.list, this.cssClassToValuesMap),
  ];
}