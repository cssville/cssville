import { IVar } from "../../IVar";
import { VarBase } from "../../VarBase";

export default class BlueGreyColors {

  public static blueGrey50 = new VarBase("color", "blue-grey-50", "#ECEFF1");
  public static blueGrey100 = new VarBase("color", "blue-grey-100", "#CFD8DC");
  public static blueGrey200 = new VarBase("color", "blue-grey-200", "#B0BEC5");
  public static blueGrey300 = new VarBase("color", "blue-grey-300", "#90A4AE");
  public static blueGrey400 = new VarBase("color", "blue-grey-400", "#78909C");
  public static blueGrey500 = new VarBase("color", "blue-grey-500", "#607D8B");
  public static blueGrey600 = new VarBase("color", "blue-grey-600", "#546E7A");
  public static blueGrey700 = new VarBase("color", "blue-grey-700", "#455A64");
  public static blueGrey800 = new VarBase("color", "blue-grey-800", "#37474F");
  public static blueGrey900 = new VarBase("color", "blue-grey-900", "#263238");

  public static colors : IVar[] = [
    this.blueGrey50,
    this.blueGrey100,
    this.blueGrey200,
    this.blueGrey300,
    this.blueGrey400,
    this.blueGrey500,
    this.blueGrey600,
    this.blueGrey700,
    this.blueGrey800,
    this.blueGrey900,
  ];
}