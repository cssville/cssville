import { IVar } from "../../IVar";
import { VarBase } from "../../VarBase";

export default class LightBlueColors {

  public static lightBlue50 = new VarBase("color", "light-blue-50", "#E1F5FE");
  public static lightBlue100 = new VarBase("color", "light-blue-100", "#B3E5FC");
  public static lightBlue200 = new VarBase("color", "light-blue-200", "#81D4FA");
  public static lightBlue300 = new VarBase("color", "light-blue-300", "#4FC3F7");
  public static lightBlue400 = new VarBase("color", "light-blue-400", "#29B6F6");
  public static lightBlue500 = new VarBase("color", "light-blue-500", "#03A9F4");
  public static lightBlue600 = new VarBase("color", "light-blue-600", "#039BE5");
  public static lightBlue700 = new VarBase("color", "light-blue-700", "#0288D1");
  public static lightBlue800 = new VarBase("color", "light-blue-800", "#0277BD");
  public static lightBlue900 = new VarBase("color", "light-blue-900", "#01579B");

  public static colors : IVar[] = [
    this.lightBlue50,
    this.lightBlue100,
    this.lightBlue200,
    this.lightBlue300,
    this.lightBlue400,
    this.lightBlue500,
    this.lightBlue600,
    this.lightBlue700,
    this.lightBlue800,
    this.lightBlue900,
  ];
}