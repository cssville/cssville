import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";
import CssvilleColors from "../vars/colors";

export class ColorGenerator extends Generator {
  cssClassToValuesMap = new Map([
    ...CssvilleColors.colorsPalettePostfixValues,
  ]);
  list = ["black", "white", "transparent", "inherit", "initial", "revert", "unset"];
  cssData = [
    new CssClassData("color", ["color"], this.list, this.cssClassToValuesMap)
  ];
}