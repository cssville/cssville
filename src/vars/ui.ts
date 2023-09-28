import { IVar } from "../IVar";
import { VarBase } from "../VarBase";
import BlueGreyColors from "./color/blueGrey";

export default class UiColors {
  
  public static text = new VarBase("color", "text", BlueGreyColors.collection.colors["900"].color.var);
  public static border = new VarBase("color", "border", BlueGreyColors.collection.colors["100"].color.var);
  public static shadow = new VarBase("color", "shadow", BlueGreyColors.collection.colors["300"].opacityColors[2].var);

  public static colors : IVar[] = [
    this.text,
    this.border,
    this.shadow,
  ];
}