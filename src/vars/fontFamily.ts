import { IVar } from "../IVar";
import { Var } from "../Var";

export default class CssvilleFontFamily {
  
  public static primary = new Var("font-family", "primary", "'Inter', sans-serif");
  public static secondary = new Var("font-family", "secondary", "'Inter', sans-serif");
  public static code = new Var("font-family", "code", "'JetBrains Mono', monospace");

  public static vars : IVar[] = [
    this.primary,
    this.secondary,
    this.code,
  ];
}