import { IVar } from "../../IVar";
import { VarBase } from "../../VarBase";

export default class DeepPurpleColors {

  public static deepPurple50 = new VarBase("color", "deep-purple-50", "#EDE7F6");
  public static deepPurple100 = new VarBase("color", "deep-purple-100", "#D1C4E9");
  public static deepPurple200 = new VarBase("color", "deep-purple-200", "#B39DDB");
  public static deepPurple300 = new VarBase("color", "deep-purple-300", "#9575CD");
  public static deepPurple400 = new VarBase("color", "deep-purple-400", "#7E57C2");
  public static deepPurple500 = new VarBase("color", "deep-purple-500", "#673AB7");
  public static deepPurple600 = new VarBase("color", "deep-purple-600", "#5E35B1");
  public static deepPurple700 = new VarBase("color", "deep-purple-700", "#512DA8");
  public static deepPurple800 = new VarBase("color", "deep-purple-800", "#4527A0");
  public static deepPurple900 = new VarBase("color", "deep-purple-900", "#311B92");

  public static colors : IVar[] = [
    this.deepPurple50,
    this.deepPurple100,
    this.deepPurple200,
    this.deepPurple300,
    this.deepPurple400,
    this.deepPurple500,
    this.deepPurple600,
    this.deepPurple700,
    this.deepPurple800,
    this.deepPurple900,
  ];
}