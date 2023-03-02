import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class FontWeightGenerator extends GeneratorBase {
    list = ["normal", "bold", "lighter", "bolder", "100", "200", "300", "400", "500", 
      "600", "700", "800", "900", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("fw", ["font-weight"], this.list)
    ];
}