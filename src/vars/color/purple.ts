import { IVar } from "../../IVar";
import { VarBase } from "../../VarBase";

export default class PurpleColors {

  public static purple50 = new VarBase("color", "purple-50", "#F3E5F5");
  public static purple100 = new VarBase("color", "purple-100", "#E1BEE7");
  public static purple200 = new VarBase("color", "purple-200", "#CE93D8");
  public static purple300 = new VarBase("color", "purple-300", "#BA68C8");
  public static purple400 = new VarBase("color", "purple-400", "#AB47BC");
  public static purple500 = new VarBase("color", "purple-500", "#9C27B0");
  public static purple600 = new VarBase("color", "purple-600", "#8E24AA");
  public static purple700 = new VarBase("color", "purple-700", "#7B1FA2");
  public static purple800 = new VarBase("color", "purple-800", "#6A1B9A");
  public static purple900 = new VarBase("color", "purple-900", "#4A148C");

  public static colors : IVar[] = [
    this.purple50,
    this.purple100,
    this.purple200,
    this.purple300,
    this.purple400,
    this.purple500,
    this.purple600,
    this.purple700,
    this.purple800,
    this.purple900,
  ];
}