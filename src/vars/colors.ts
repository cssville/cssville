import { IVar } from "../IVar";
import { VarBase } from "../VarBase";
import PinkColors from "./color/pink";
import PurpleColors from "./color/purple";
import RedColors from "./color/red";

export default class CssvilleColors {

  public static text = new VarBase("color", "text", "#343A40");
  public static border = new VarBase("color", "border", "#e5e7eb");
  public static shadow = new VarBase("color", "shadow", "rgba(140, 149, 159, 0.2)");

  public static basicColors : IVar[] = [
    this.text,
    this.border,
    this.shadow,
  ];

  public static colorsPalette : IVar[] = [
    ...RedColors.colors,
    ...PurpleColors.colors,
    ...PinkColors.colors,
  ];
}