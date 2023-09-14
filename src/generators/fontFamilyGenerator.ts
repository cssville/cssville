import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";
import CssvilleBorder from "../vars/border";
import CssvilleColors from "../vars/colors";
import CssvilleFontFamily from "../vars/fontFamily";

export class FontFamilyGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["primary", [`${CssvilleFontFamily.primary.var}`]],
        ["secondary", [`${CssvilleFontFamily.secondary.var}`]],
        ["code", [`${CssvilleFontFamily.code.var}`]],
    ]);
    cssData = [
        new CssClassData("font-family", ["font-family"], [], this.postfixValuesMap),
    ];
}