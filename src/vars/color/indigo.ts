import { IVar } from "../../IVar";
import { VarBase } from "../../VarBase";

export default class IndigoColors {

  public static indigo50 = new VarBase("color", "indigo-50", "#E8EAF6");
  public static indigo100 = new VarBase("color", "indigo-100", "#C5CAE9");
  public static indigo200 = new VarBase("color", "indigo-200", "#9FA8DA");
  public static indigo300 = new VarBase("color", "indigo-300", "#7986CB");
  public static indigo400 = new VarBase("color", "indigo-400", "#5C6BC0");
  public static indigo500 = new VarBase("color", "indigo-500", "#3F51B5");
  public static indigo600 = new VarBase("color", "indigo-600", "#3949AB");
  public static indigo700 = new VarBase("color", "indigo-700", "#303F9F");
  public static indigo800 = new VarBase("color", "indigo-800", "#283593");
  public static indigo900 = new VarBase("color", "indigo-900", "#1A237E");

  public static colors : IVar[] = [
    this.indigo50,
    this.indigo100,
    this.indigo200,
    this.indigo300,
    this.indigo400,
    this.indigo500,
    this.indigo600,
    this.indigo700,
    this.indigo800,
    this.indigo900,
  ];
}