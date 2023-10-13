import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";
import CssvilleBorder from "../vars/border";
import ThemeColors from "../vars/themeColors";

export class BorderGenerator extends Generator {
    cssClassToValuesMap = new Map([
        ["1", [`${CssvilleBorder.width.var} solid ${ThemeColors.border.var}`]],
    ]);
    list = ["none"];
    cssData = [
        new CssClassData("border", ["border"], this.list, this.cssClassToValuesMap),
        new CssClassData("border-top", ["border-top"], this.list, this.cssClassToValuesMap),
        new CssClassData("border-bottom", ["border-bottom"], this.list, this.cssClassToValuesMap),
        new CssClassData("border-left", ["border-left"], this.list, this.cssClassToValuesMap),
        new CssClassData("border-right", ["border-right"], this.list, this.cssClassToValuesMap),
    ];
}