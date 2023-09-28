import { IVar } from "../../IVar";
import { ColorBase } from "./ColorBase";

export default class ColorCollection {

  public constructor(colorName: string, hexValue: string[]) {
    var indexes: string[] = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
    hexValue.forEach((hex, index) => {
      var id = indexes[index];
      var color = new ColorBase(`${colorName}-${id}`, hex);
      this.colors[`${id}`] = color;
      this.vars.push(...color.vars);
    });
  }
  
  public colors: ColorBase[] = [];
  public vars: IVar[] = [];
}