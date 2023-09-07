import { IVar } from "../IVar";
import { VarBase } from "../VarBase";

export default class CssvilleColors {
  
  public static xs = new VarBase("color", "text", "#343A40");
  public static sm = new VarBase("color", "border", "#e5e7eb");
  public static md = new VarBase("color", "shadow", "rgba(140, 149, 159, 0.2)");

  public static basicColors : IVar[] = [
    this.xs,
    this.sm,
    this.md,
  ];
}