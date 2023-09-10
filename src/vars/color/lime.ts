import { IVar } from "../../IVar";
import { VarBase } from "../../VarBase";

export default class LimeColors {

  public static lime50 = new VarBase("color", "lime-50", "#F9FBE7");
  public static lime100 = new VarBase("color", "lime-100", "#F0F4C3");
  public static lime200 = new VarBase("color", "lime-200", "#E6EE9C");
  public static lime300 = new VarBase("color", "lime-300", "#DCE775");
  public static lime400 = new VarBase("color", "lime-400", "#D4E157");
  public static lime500 = new VarBase("color", "lime-500", "#CDDC39");
  public static lime600 = new VarBase("color", "lime-600", "#C0CA33");
  public static lime700 = new VarBase("color", "lime-700", "#AFB42B");
  public static lime800 = new VarBase("color", "lime-800", "#9E9D24");
  public static lime900 = new VarBase("color", "lime-900", "#827717");

  public static colors : IVar[] = [
    this.lime50,
    this.lime100,
    this.lime200,
    this.lime300,
    this.lime400,
    this.lime500,
    this.lime600,
    this.lime700,
    this.lime800,
    this.lime900,
  ];
}