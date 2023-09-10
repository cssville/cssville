import { IVar } from "../../IVar";
import { VarBase } from "../../VarBase";

export default class LightGreenColors {

  public static lightGreen50 = new VarBase("color", "light-green-50", "#F1F8E9");
  public static lightGreen100 = new VarBase("color", "light-green-100", "#DCEDC8");
  public static lightGreen200 = new VarBase("color", "light-green-200", "#C5E1A5");
  public static lightGreen300 = new VarBase("color", "light-green-300", "#AED581");
  public static lightGreen400 = new VarBase("color", "light-green-400", "#9CCC65");
  public static lightGreen500 = new VarBase("color", "light-green-500", "#8BC34A");
  public static lightGreen600 = new VarBase("color", "light-green-600", "#7CB342");
  public static lightGreen700 = new VarBase("color", "light-green-700", "#689F38");
  public static lightGreen800 = new VarBase("color", "light-green-800", "#558B2F");
  public static lightGreen900 = new VarBase("color", "light-green-900", "#33691E");

  public static colors : IVar[] = [
    this.lightGreen50,
    this.lightGreen100,
    this.lightGreen200,
    this.lightGreen300,
    this.lightGreen400,
    this.lightGreen500,
    this.lightGreen600,
    this.lightGreen700,
    this.lightGreen800,
    this.lightGreen900,
  ];
}