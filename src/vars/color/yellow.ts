import { IVar } from "../../IVar";
import { VarBase } from "../../VarBase";

export default class YellowColors {

  public static yellow50 = new VarBase("color", "yellow-50", "#FFFDE7");
  public static yellow100 = new VarBase("color", "yellow-100", "#FFF9C4");
  public static yellow200 = new VarBase("color", "yellow-200", "#FFF59D");
  public static yellow300 = new VarBase("color", "yellow-300", "#FFF176");
  public static yellow400 = new VarBase("color", "yellow-400", "#FFEE58");
  public static yellow500 = new VarBase("color", "yellow-500", "#FFEB3B");
  public static yellow600 = new VarBase("color", "yellow-600", "#FDD835");
  public static yellow700 = new VarBase("color", "yellow-700", "#FBC02D");
  public static yellow800 = new VarBase("color", "yellow-800", "#F9A825");
  public static yellow900 = new VarBase("color", "yellow-900", "#F57F17");

  public static colors : IVar[] = [
    this.yellow50,
    this.yellow100,
    this.yellow200,
    this.yellow300,
    this.yellow400,
    this.yellow500,
    this.yellow600,
    this.yellow700,
    this.yellow800,
    this.yellow900,
  ];
}