import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class FlexShrinkGenerator extends GeneratorBase {
    list = ["0", "1", "2", "3", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("flex-shrink", ["-o-flex-shrink", "-webkit-flex-shrink", "flex-shrink"], this.list)
    ];
}