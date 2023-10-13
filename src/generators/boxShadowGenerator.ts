import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";
import CssvilleShadow from "../vars/shadow";
import ThemeColors from "../vars/themeColors";

export class BoxShadowGenerator extends Generator {
    cssClassToValuesMap = new Map([
        ["xs", [`${CssvilleShadow.xs.var} ${ThemeColors.shadow.var}`]],
        ["sm", [`${CssvilleShadow.sm.var} ${ThemeColors.shadow.var}`]],
        ["md", [`${CssvilleShadow.md.var} ${ThemeColors.shadow.var}`]],
        ["lg", [`${CssvilleShadow.lg.var} ${ThemeColors.shadow.var}`]],
        ["xl", [`${CssvilleShadow.xl.var} ${ThemeColors.shadow.var}`]],
    ]);
    list = ["none"];
    cssData = [
        new CssClassData("box-shadow", ["box-shadow"], this.list, this.cssClassToValuesMap),
    ];
}