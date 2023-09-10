import { IVar } from "../../IVar";
import { VarBase } from "../../VarBase";

export default class BrownColors {

  public static brown50 = new VarBase("color", "brown-50", "#EFEBE9");
  public static brown100 = new VarBase("color", "brown-100", "#D7CCC8");
  public static brown200 = new VarBase("color", "brown-200", "#BCAAA4");
  public static brown300 = new VarBase("color", "brown-300", "#A1887F");
  public static brown400 = new VarBase("color", "brown-400", "#8D6E63");
  public static brown500 = new VarBase("color", "brown-500", "#795548");
  public static brown600 = new VarBase("color", "brown-600", "#6D4C41");
  public static brown700 = new VarBase("color", "brown-700", "#5D4037");
  public static brown800 = new VarBase("color", "brown-800", "#4E342E");
  public static brown900 = new VarBase("color", "brown-900", "#3E2723");

  public static colors : IVar[] = [
    this.brown50,
    this.brown100,
    this.brown200,
    this.brown300,
    this.brown400,
    this.brown500,
    this.brown600,
    this.brown700,
    this.brown800,
    this.brown900,
  ];
}