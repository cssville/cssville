import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class ObjectFitGenerator extends GeneratorBase {
    list = ["contain", "cover", "fill", "none", "scale-down", "inherit", "initial", "revert", "revert-layer", "unset"];
    cssData = [
        new CssClassData("object-fit", ["object-fit"], this.list),
    ];
}