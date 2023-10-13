import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class TextDecorationGenerator extends Generator {
    list = ["underline", "overline", "none", "inherit", "initial", "revert", "unset"];
    cssData = [
        new CssClassData("text-decoration", ["text-decoration"], this.list)
    ];
}