import { IVar } from "../IVar";
import { VarBase } from "../VarBase";

export default class CssvilleBreakpoints {
  
  public static xs = new VarBase("breakpoint", "xs", "320px");
  public static sm = new VarBase("breakpoint", "sm", "544px");
  public static md = new VarBase("breakpoint", "md", "768px");
  public static lg = new VarBase("breakpoint", "lg", "1012px");
  public static xl = new VarBase("breakpoint", "xl", "1280px");

  public static breakpoints : IVar[] = [
    this.xs,
    this.sm,
    this.md,
    this.lg,
    this.xl,
  ];
}