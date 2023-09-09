import { IVar } from "../IVar";
import { VarBase } from "../VarBase";

export default class CssvilleShadow {
  
  public static xl = new VarBase("xl", "shadow", "0px 12px 28px 0px");
  public static lg = new VarBase("lg", "shadow", "0px 8px 24px 0px");
  public static md = new VarBase("md", "shadow", "0px 6px 12px 0px");
  public static sm = new VarBase("sm", "shadow", "0px 3px 6px 0px");
  public static xs = new VarBase("sm", "shadow", "0px 1px 1px 0px");

  public static vars : IVar[] = [
    this.xl,
    this.lg,
    this.md,
    this.sm,
    this.xs,
  ];
}