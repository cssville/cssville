import { IVar } from "../../IVar";
import { VarBase } from "../../VarBase";

export default class TealColors {

  public static teal50 = new VarBase("color", "teal-50", "#E0F2F1");
  public static teal100 = new VarBase("color", "teal-100", "#B2DFDB");
  public static teal200 = new VarBase("color", "teal-200", "#80CBC4");
  public static teal300 = new VarBase("color", "teal-300", "#4DB6AC");
  public static teal400 = new VarBase("color", "teal-400", "#26A69A");
  public static teal500 = new VarBase("color", "teal-500", "#009688");
  public static teal600 = new VarBase("color", "teal-600", "#00897B");
  public static teal700 = new VarBase("color", "teal-700", "#00796B");
  public static teal800 = new VarBase("color", "teal-800", "#00695C");
  public static teal900 = new VarBase("color", "teal-900", "#004D40");

  public static colors : IVar[] = [
    this.teal50,
    this.teal100,
    this.teal200,
    this.teal300,
    this.teal400,
    this.teal500,
    this.teal600,
    this.teal700,
    this.teal800,
    this.teal900,
  ];
}