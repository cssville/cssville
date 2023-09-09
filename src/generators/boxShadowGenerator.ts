import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";
import CssvilleBorder from "../vars/border";
import CssvilleColors from "../vars/colors";
import CssvilleShadow from "../vars/shadow";

export class BoxShadowGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["xs", [`${CssvilleShadow.xs.var} ${CssvilleColors.shadow.var}`]],
        ["sm", [`${CssvilleShadow.sm.var} ${CssvilleColors.shadow.var}`]],
        ["md", [`${CssvilleShadow.md.var} ${CssvilleColors.shadow.var}`]],
        ["lg", [`${CssvilleShadow.lg.var} ${CssvilleColors.shadow.var}`]],
        ["xl", [`${CssvilleShadow.xl.var} ${CssvilleColors.shadow.var}`]],
    ]);
    list = ["none"];
    cssData = [
        new CssClassData("box-shadow", ["box-shadow"], this.list, this.postfixValuesMap),
    ];
}