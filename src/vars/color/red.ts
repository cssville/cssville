import { IVar } from "../../IVar";
import { VarBase } from "../../VarBase";
import ColorCollection from "./ColorCollection";

export default class RedColors {
  public static collection = new ColorCollection("red",
    ["#FFEBEE", "#FFCDD2", "#EF9A9A", "#E57373", "#EF5350", "#F44336", "#E53935", "#D32F2F", "#C62828", "#B71C1C"]);
}