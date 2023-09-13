import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";
import CssvilleColors from "../vars/colors";

export class ColorGenerator extends GeneratorBase {
  postfixValuesMap = new Map([
    ...CssvilleColors.colorsPalettePostfixValues,
  ]);
  list = ["black", "white", "transparent", "inherit", "initial", "revert", "unset"];
  cssData = [
    new CssClassData("color", ["color"], this.list, this.postfixValuesMap)
  ];
}