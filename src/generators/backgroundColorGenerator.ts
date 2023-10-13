import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";
import { IVar } from "../IVar";
import CssvilleColors from "./../vars/colors";

export class BackgroundColorGenerator extends Generator {
  cssClassToValuesMap = new Map([
    ...CssvilleColors.colorsPalettePostfixValues,
  ]);
  flatValues = ["black", "white", "transparent", "inherit", "initial", "revert", "unset"];
  cssData = [
    new CssClassData("bg-color", ["background-color"], this.flatValues, this.cssClassToValuesMap)
  ];
}