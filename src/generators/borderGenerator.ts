import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";
import CssvilleBorder from "../vars/border";
import UiColors from "../vars/ui";

export class BorderGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["1", [`${CssvilleBorder.width.var} solid ${UiColors.border.var}`]],
    ]);
    list = ["none"];
    cssData = [
        new CssClassData("border", ["border"], this.list, this.postfixValuesMap),
        new CssClassData("border-top", ["border-top"], this.list, this.postfixValuesMap),
        new CssClassData("border-bottom", ["border-bottom"], this.list, this.postfixValuesMap),
        new CssClassData("border-left", ["border-left"], this.list, this.postfixValuesMap),
        new CssClassData("border-right", ["border-right"], this.list, this.postfixValuesMap),
    ];
}