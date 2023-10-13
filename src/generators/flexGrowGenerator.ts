import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class FlexGrowGenerator extends Generator {
    list = ["0", "1", "2", "3", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("flex-grow", ["-o-flex-grow", "-webkit-flex-grow", "flex-grow"], this.list, this.cssClassToValuesMap)
    ];
}