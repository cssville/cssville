import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class BackgroundColorGenerator extends GeneratorBase {
    flatValues = ["black", "white", "transparent", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("bg-color", ["background-color"], this.flatValues)
    ];
}