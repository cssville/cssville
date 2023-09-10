import { IVar } from "../../IVar";
import { VarBase } from "../../VarBase";

export default class AmberColors {

  public static amber50 = new VarBase("color", "amber-50", "#FFF8E1");
  public static amber100 = new VarBase("color", "amber-100", "#FFECB3");
  public static amber200 = new VarBase("color", "amber-200", "#FFE082");
  public static amber300 = new VarBase("color", "amber-300", "#FFD54F");
  public static amber400 = new VarBase("color", "amber-400", "#FFCA28");
  public static amber500 = new VarBase("color", "amber-500", "#FFC107");
  public static amber600 = new VarBase("color", "amber-600", "#FFB300");
  public static amber700 = new VarBase("color", "amber-700", "#FFA000");
  public static amber800 = new VarBase("color", "amber-800", "#FF8F00");
  public static amber900 = new VarBase("color", "amber-900", "#FF6F00");

  public static colors : IVar[] = [
    this.amber50,
    this.amber100,
    this.amber200,
    this.amber300,
    this.amber400,
    this.amber500,
    this.amber600,
    this.amber700,
    this.amber800,
    this.amber900,
  ];
}