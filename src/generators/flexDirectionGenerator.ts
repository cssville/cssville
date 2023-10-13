import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class FlexDirectionGenerator extends Generator {
    list = ["row", "row-reverse", "column", "column-reverse", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("flex-direction", ["flex-direction"], this.list)
    ];
}