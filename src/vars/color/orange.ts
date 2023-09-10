import { IVar } from "../../IVar";
import { VarBase } from "../../VarBase";

export default class OrangeColors {

  public static orange50 = new VarBase("color", "orange-50", "#FFF3E0");
  public static orange100 = new VarBase("color", "orange-100", "#FFE0B2");
  public static orange200 = new VarBase("color", "orange-200", "#FFCC80");
  public static orange300 = new VarBase("color", "orange-300", "#FFB74D");
  public static orange400 = new VarBase("color", "orange-400", "#FFA726");
  public static orange500 = new VarBase("color", "orange-500", "#FF9800");
  public static orange600 = new VarBase("color", "orange-600", "#FB8C00");
  public static orange700 = new VarBase("color", "orange-700", "#F57C00");
  public static orange800 = new VarBase("color", "orange-800", "#EF6C00");
  public static orange900 = new VarBase("color", "orange-900", "#E65100");

  public static colors : IVar[] = [
    this.orange50,
    this.orange100,
    this.orange200,
    this.orange300,
    this.orange400,
    this.orange500,
    this.orange600,
    this.orange700,
    this.orange800,
    this.orange900,
  ];
}