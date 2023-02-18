import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class FlexGrowGenerator extends GeneratorBase {
    list = ["0", "1", "2", "3", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("flex-grow", ["-o-flex-grow", "-webkit-flex-grow", "flex-grow"], this.list, this.postfixValuesMap)
    ];
}