import { IVar } from "../../IVar";
import { VarBase } from "../../VarBase";

export default class BlueColors {

  public static blue50 = new VarBase("color", "blue-50", "#E3F2FD");
  public static blue100 = new VarBase("color", "blue-100", "#BBDEFB");
  public static blue200 = new VarBase("color", "blue-200", "#90CAF9");
  public static blue300 = new VarBase("color", "blue-300", "#64B5F6");
  public static blue400 = new VarBase("color", "blue-400", "#42A5F5");
  public static blue500 = new VarBase("color", "blue-500", "#2196F3");
  public static blue600 = new VarBase("color", "blue-600", "#1E88E5");
  public static blue700 = new VarBase("color", "blue-700", "#1976D2");
  public static blue800 = new VarBase("color", "blue-800", "#1565C0");
  public static blue900 = new VarBase("color", "blue-900", "#0D47A1");

  public static colors : IVar[] = [
    this.blue50,
    this.blue100,
    this.blue200,
    this.blue300,
    this.blue400,
    this.blue500,
    this.blue600,
    this.blue700,
    this.blue800,
    this.blue900,
  ];
}