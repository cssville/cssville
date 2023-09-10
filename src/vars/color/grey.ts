import { IVar } from "../../IVar";
import { VarBase } from "../../VarBase";

export default class GreyColors {

  public static grey50 = new VarBase("color", "grey-50", "#FAFAFA");
  public static grey100 = new VarBase("color", "grey-100", "#F5F5F5");
  public static grey200 = new VarBase("color", "grey-200", "#EEEEEE");
  public static grey300 = new VarBase("color", "grey-300", "#E0E0E0");
  public static grey400 = new VarBase("color", "grey-400", "#BDBDBD");
  public static grey500 = new VarBase("color", "grey-500", "#9E9E9E");
  public static grey600 = new VarBase("color", "grey-600", "#757575");
  public static grey700 = new VarBase("color", "grey-700", "#616161");
  public static grey800 = new VarBase("color", "grey-800", "#424242");
  public static grey900 = new VarBase("color", "grey-900", "#212121");

  public static colors : IVar[] = [
    this.grey50,
    this.grey100,
    this.grey200,
    this.grey300,
    this.grey400,
    this.grey500,
    this.grey600,
    this.grey700,
    this.grey800,
    this.grey900,
  ];
}