import { IVar } from "../IVar";
import { VarBase } from "../VarBase";

export default class CssvilleFontFamily {
  
  public static primary = new VarBase("font-family", "primary", "'Inter', sans-serif");
  public static secondary = new VarBase("font-family", "secondary", "'Inter', sans-serif");
  public static code = new VarBase("font-family", "code", "'JetBrains Mono', monospace");

  public static vars : IVar[] = [
    this.primary,
    this.secondary,
    this.code,
  ];
}