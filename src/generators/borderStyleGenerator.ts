import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class BorderStyleGenerator extends Generator {
    list = ["none", "hidden", "solid", "dotted", "dashed", "double", "groove", "ridge"];
    cssData = [
        new CssClassData("border-style", ["border-style"], this.list),
        new CssClassData("border-bottom-style", ["border-bottom-style"], this.list),
        new CssClassData("border-left-style", ["border-left-style"], this.list),
        new CssClassData("border-right-style", ["border-right-style"], this.list),
        new CssClassData("border-top-style", ["border-top-style"], this.list),
    ];
}