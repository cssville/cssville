import { IVar } from "../IVar";
import { VarBase } from "../VarBase";
import AmberColors from "./color/amber";
import BlueColors from "./color/blue";
import BlueGreyColors from "./color/blueGrey";
import BrownColors from "./color/brown";
import CyanColors from "./color/cyan";
import DeepOrangeColors from "./color/deepOrange";
import DeepPurpleColors from "./color/deepPurple";
import GreenColors from "./color/green";
import GreyColors from "./color/grey";
import IndigoColors from "./color/indigo";
import LightBlueColors from "./color/lightBlue";
import LightGreenColors from "./color/lightGreen";
import LimeColors from "./color/lime";
import OrangeColors from "./color/orange";
import PinkColors from "./color/pink";
import PurpleColors from "./color/purple";
import RedColors from "./color/red";
import TealColors from "./color/teal";
import YellowColors from "./color/yellow";

export default class CssvilleColors {
  
  public static hexToRgb(hex: string, alpha: number = 1.0): string {
    hex = hex.replace(/^#/, '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
  }

  public static text = new VarBase("color", "text", BlueGreyColors.blueGrey900.var);
  public static border = new VarBase("color", "border", BlueGreyColors.blueGrey100.var);
  public static shadow = new VarBase("color", "shadow", "rgba(140, 149, 159, 0.2)");

  public static basicColors : IVar[] = [
    this.text,
    this.border,
    this.shadow,
  ];

  public static colorsPalette : IVar[] = [
    ...RedColors.colors,
    ...PinkColors.colors,
    ...PurpleColors.colors,
    ...DeepPurpleColors.colors,
    ...IndigoColors.colors,
    ...BlueColors.colors,
    ...LightBlueColors.colors,
    ...CyanColors.colors,
    ...TealColors.colors,
    ...GreenColors.colors,
    ...LightGreenColors.colors,
    ...LimeColors.colors,
    ...YellowColors.colors,
    ...AmberColors.colors,
    ...OrangeColors.colors,
    ...DeepOrangeColors.colors,
    ...BrownColors.colors,
    ...GreyColors.colors,
    ...BlueGreyColors.colors,
  ];

  public static colorsPalettePostfixValues : [string, string[]][] = this.colorsPalette.map(e => e.postfixValue)
}