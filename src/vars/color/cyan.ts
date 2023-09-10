import { IVar } from "../../IVar";
import { VarBase } from "../../VarBase";

export default class CyanColors {

  public static cyan50 = new VarBase("color", "cyan-50", "#E0F7FA");
  public static cyan100 = new VarBase("color", "cyan-100", "#B2EBF2");
  public static cyan200 = new VarBase("color", "cyan-200", "#80DEEA");
  public static cyan300 = new VarBase("color", "cyan-300", "#4DD0E1");
  public static cyan400 = new VarBase("color", "cyan-400", "#26C6DA");
  public static cyan500 = new VarBase("color", "cyan-500", "#00BCD4");
  public static cyan600 = new VarBase("color", "cyan-600", "#00ACC1");
  public static cyan700 = new VarBase("color", "cyan-700", "#0097A7");
  public static cyan800 = new VarBase("color", "cyan-800", "#00838F");
  public static cyan900 = new VarBase("color", "cyan-900", "#006064");

  public static colors : IVar[] = [
    this.cyan50,
    this.cyan100,
    this.cyan200,
    this.cyan300,
    this.cyan400,
    this.cyan500,
    this.cyan600,
    this.cyan700,
    this.cyan800,
    this.cyan900,
  ];
}