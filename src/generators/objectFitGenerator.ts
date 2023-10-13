import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class ObjectFitGenerator extends Generator {
    list = ["contain", "cover", "fill", "none", "scale-down", "inherit", "initial", "revert", "revert-layer", "unset"];
    cssData = [
        new CssClassData("object-fit", ["object-fit"], this.list),
    ];
}