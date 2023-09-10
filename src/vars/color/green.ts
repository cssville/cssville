import { IVar } from "../../IVar";
import { VarBase } from "../../VarBase";

export default class GreenColors {

  public static green50 = new VarBase("color", "green-50", "#E8F5E9");
  public static green100 = new VarBase("color", "green-100", "#C8E6C9");
  public static green200 = new VarBase("color", "green-200", "#A5D6A7");
  public static green300 = new VarBase("color", "green-300", "#81C784");
  public static green400 = new VarBase("color", "green-400", "#66BB6A");
  public static green500 = new VarBase("color", "green-500", "#4CAF50");
  public static green600 = new VarBase("color", "green-600", "#43A047");
  public static green700 = new VarBase("color", "green-700", "#388E3C");
  public static green800 = new VarBase("color", "green-800", "#2E7D32");
  public static green900 = new VarBase("color", "green-900", "#1B5E20");

  public static colors : IVar[] = [
    this.green50,
    this.green100,
    this.green200,
    this.green300,
    this.green400,
    this.green500,
    this.green600,
    this.green700,
    this.green800,
    this.green900,
  ];
}