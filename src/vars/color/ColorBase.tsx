import { IVar } from "../../IVar";
import { VarBase } from "../../VarBase";
import hexToRgba, { hexToRgbCommaSeparated} from "../../utils";

export class ColorBase {
  public constructor(name: string, hex: string) {
    var rgbCommaSeparated = hexToRgbCommaSeparated(hex);
    var category = "color";
    this.rgb = new VarBase("rgb", name, rgbCommaSeparated);
    this.color = new VarBase(category, name, `rgb(${this.rgb.var})`);
    for (var i = 1; i < 10; i++) {
      var val = `rgba(${this.rgb.var}, 0.${i})`;
      var color = new VarBase(category, `${name}-0${i}`, val);
      this.opacityColors.push(color);
    }
    this.colors = [this.color, ...this.opacityColors];
    this.vars = [this.rgb, ...this.colors];
  }

  public rgb: IVar;
  public color: IVar;
  public opacityColors: IVar[] = [];
  public colors: IVar[] = [];
  public vars: IVar[] = [];
}