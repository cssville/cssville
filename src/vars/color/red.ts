import { IVar } from "../../IVar";
import { VarBase } from "../../VarBase";

export default class RedColors {

  public static red50 = new VarBase("color", "red-50", "#FFEBEE");
  public static red100 = new VarBase("color", "red-100", "#FFCDD2");
  public static red200 = new VarBase("color", "red-200", "#EF9A9A");
  public static red300 = new VarBase("color", "red-300", "#E57373");
  public static red400 = new VarBase("color", "red-400", "#EF5350");
  public static red500 = new VarBase("color", "red-500", "#F44336");
  public static red600 = new VarBase("color", "red-600", "#E53935");
  public static red700 = new VarBase("color", "red-700", "#D32F2F");
  public static red800 = new VarBase("color", "red-800", "#C62828");
  public static red900 = new VarBase("color", "red-900", "#B71C1C");

  public static colors : IVar[] = [
    this.red50,
    this.red100,
    this.red200,
    this.red300,
    this.red400,
    this.red500,
    this.red600,
    this.red700,
    this.red800,
    this.red900,
  ];
}