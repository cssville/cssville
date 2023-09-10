import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";
import { IVar } from "../IVar";
import CssvilleColors from "./../vars/colors";

export class BackgroundColorGenerator extends GeneratorBase {
  postfixValuesMap = new Map([
    ...CssvilleColors.colorsPalettePostfixValues,
  ]);
  flatValues = ["black", "white", "transparent", "inherit", "initial", "revert", "unset"];
  cssData = [
    new CssClassData("bg-color", ["background-color"], this.flatValues, this.postfixValuesMap)
  ];
}