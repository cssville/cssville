import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class BorderWidthGenerator extends Generator {
    list = ["0px", "1px", "thin", "medium", "thick"];
    cssData = [
        new CssClassData("border-width", ["border-width"], this.list),
        new CssClassData("border-bottom-width", ["border-bottom-width"], this.list),
        new CssClassData("border-left-width", ["border-left-width"], this.list),
        new CssClassData("border-right-width", ["border-right-width"], this.list),
        new CssClassData("border-top-width", ["border-top-width"], this.list),
    ];
}