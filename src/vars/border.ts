import { IVar } from "../IVar";
import { Var } from "../Var";

export default class CssvilleBorder {
  
  public static width = new Var("width", "border", "1px");

  public static vars : IVar[] = [
    this.width,
  ];
}