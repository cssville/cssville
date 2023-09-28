import { IVar } from "../../IVar";
import { VarBase } from "../../VarBase";
import ColorCollection from "./ColorCollection";

export default class GreyColors {
  public static collection = new ColorCollection("grey",
    ["#FAFAFA", "#F5F5F5", "#EEEEEE", "#E0E0E0", "#BDBDBD", "#9E9E9E", "#757575", "#616161", "#424242", "#212121"]);
}