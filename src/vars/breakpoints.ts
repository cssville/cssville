import { IVar } from "../IVar";
import { Var } from "../Var";

export default class CssvilleBreakpoints {
  
  public static xs = new Var("breakpoint", "xs", "320px");
  public static sm = new Var("breakpoint", "sm", "544px");
  public static md = new Var("breakpoint", "md", "768px");
  public static lg = new Var("breakpoint", "lg", "1012px");
  public static xl = new Var("breakpoint", "xl", "1280px");

  public static breakpoints : IVar[] = [
    this.xs,
    this.sm,
    this.md,
    this.lg,
    this.xl,
  ];
}