import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class FlexShrinkGenerator extends Generator {
    list = ["0", "1", "2", "3", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("flex-shrink", ["-o-flex-shrink", "-webkit-flex-shrink", "flex-shrink"], this.list)
    ];
}