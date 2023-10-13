import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class JustifyContentGenerator extends Generator {
    cssClassToValuesMap = new Map([
        ["safe-center", ["safe center"]],
        ["unsafe-center", ["unsafe center"]],
    ]);
    list = ["center", "start", "flex-start", "end", "flex-end", "normal", "space-between", "space-around", "space-evenly", 
      "stretch", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("justify-content", ["-o-justify-content", "-webkit-justify-content", "justify-content"], this.list, this.cssClassToValuesMap)
    ];
}