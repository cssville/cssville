import { IVar } from "../IVar";
import { VarBase } from "../VarBase";

export default class CssvilleBorder {
  
  public static width = new VarBase("width", "border", "1px");

  public static vars : IVar[] = [
    this.width,
  ];
}