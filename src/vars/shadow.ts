import { IVar } from "../IVar";
import { Var } from "../Var";

export default class CssvilleShadow {
  
  public static xl = new Var("xl", "shadow", "0px 12px 28px 0px");
  public static lg = new Var("lg", "shadow", "0px 8px 24px 0px");
  public static md = new Var("md", "shadow", "0px 6px 12px 0px");
  public static sm = new Var("sm", "shadow", "0px 4px 8px 0px");
  public static xs = new Var("xs", "shadow", "0px 2px 4px 0px");

  public static vars : IVar[] = [
    this.xl,
    this.lg,
    this.md,
    this.sm,
    this.xs,
  ];
}