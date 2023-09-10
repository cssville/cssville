import { IVar } from "../../IVar";
import { VarBase } from "../../VarBase";

export default class PinkColors {

  public static pink50 = new VarBase("color", "pink-50", "#FCE4EC");
  public static pink100 = new VarBase("color", "pink-100", "#F8BBD0");
  public static pink200 = new VarBase("color", "pink-200", "#F48FB1");
  public static pink300 = new VarBase("color", "pink-300", "#F06292");
  public static pink400 = new VarBase("color", "pink-400", "#EC407A");
  public static pink500 = new VarBase("color", "pink-500", "#E91E63");
  public static pink600 = new VarBase("color", "pink-600", "#D81B60");
  public static pink700 = new VarBase("color", "pink-700", "#C2185B");
  public static pink800 = new VarBase("color", "pink-800", "#AD1457");
  public static pink900 = new VarBase("color", "pink-900", "#880E4F");

  public static colors : IVar[] = [
    this.pink50,
    this.pink100,
    this.pink200,
    this.pink300,
    this.pink400,
    this.pink500,
    this.pink600,
    this.pink700,
    this.pink800,
    this.pink900,
  ];
}