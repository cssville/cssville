import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";
import CssvilleShadow from "../vars/shadow";
import UiColors from "../vars/ui";

export class BoxShadowGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["xs", [`${CssvilleShadow.xs.var} ${UiColors.shadow.var}`]],
        ["sm", [`${CssvilleShadow.sm.var} ${UiColors.shadow.var}`]],
        ["md", [`${CssvilleShadow.md.var} ${UiColors.shadow.var}`]],
        ["lg", [`${CssvilleShadow.lg.var} ${UiColors.shadow.var}`]],
        ["xl", [`${CssvilleShadow.xl.var} ${UiColors.shadow.var}`]],
    ]);
    list = ["none"];
    cssData = [
        new CssClassData("box-shadow", ["box-shadow"], this.list, this.postfixValuesMap),
    ];
}