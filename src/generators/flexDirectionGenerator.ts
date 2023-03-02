import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class FlexDirectionGenerator extends GeneratorBase {
    list = ["row", "row-reverse", "column", "column-reverse", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("flex-direction", ["flex-direction"], this.list)
    ];
}