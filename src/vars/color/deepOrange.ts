import { IVar } from "../../IVar";
import { VarBase } from "../../VarBase";

export default class DeepOrangeColors {

  public static deepOrange50 = new VarBase("color", "deep-orange-50", "#FBE9E7");
  public static deepOrange100 = new VarBase("color", "deep-orange-100", "#FFCCBC");
  public static deepOrange200 = new VarBase("color", "deep-orange-200", "#FFAB91");
  public static deepOrange300 = new VarBase("color", "deep-orange-300", "#FF8A65");
  public static deepOrange400 = new VarBase("color", "deep-orange-400", "#FF7043");
  public static deepOrange500 = new VarBase("color", "deep-orange-500", "#FF5722");
  public static deepOrange600 = new VarBase("color", "deep-orange-600", "#F4511E");
  public static deepOrange700 = new VarBase("color", "deep-orange-700", "#E64A19");
  public static deepOrange800 = new VarBase("color", "deep-orange-800", "#D84315");
  public static deepOrange900 = new VarBase("color", "deep-orange-900", "#BF360C");

  public static colors : IVar[] = [
    this.deepOrange50,
    this.deepOrange100,
    this.deepOrange200,
    this.deepOrange300,
    this.deepOrange400,
    this.deepOrange500,
    this.deepOrange600,
    this.deepOrange700,
    this.deepOrange800,
    this.deepOrange900,
  ];
}