import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";
import CssvilleColors from "../vars/colors";

export class BorderColorGenerator extends Generator {
    cssClassToValuesMap = new Map([
        ...CssvilleColors.colorsPalettePostfixValues,
    ]);
    list = ["transparent"];
    cssData = [
        new CssClassData("border-color", ["border-color"], this.list, this.cssClassToValuesMap),
        new CssClassData("border-bottom-color", ["border-bottom-color"], this.list, this.cssClassToValuesMap),
        new CssClassData("border-left-color", ["border-left-color"], this.list, this.cssClassToValuesMap),
        new CssClassData("border-right-color", ["border-right-color"], this.list, this.cssClassToValuesMap),
        new CssClassData("border-top-color", ["border-top-color"], this.list, this.cssClassToValuesMap),
    ];
}