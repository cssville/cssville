import { IVar } from "../IVar";
import { VarBase } from "../VarBase";
import UiColors from "./ui";
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
  
  public static colorsPalette : IVar[] = [
    ...RedColors.collection.vars,
    ...PinkColors.collection.vars,
    ...PurpleColors.collection.vars,
    ...DeepPurpleColors.collection.vars,
    ...IndigoColors.collection.vars,
    ...BlueColors.collection.vars,
    ...LightBlueColors.collection.vars,
    ...CyanColors.collection.vars,
    ...TealColors.collection.vars,
    ...GreenColors.collection.vars,
    ...LightGreenColors.collection.vars,
    ...LimeColors.collection.vars,
    ...YellowColors.collection.vars,
    ...AmberColors.collection.vars,
    ...OrangeColors.collection.vars,
    ...DeepOrangeColors.collection.vars,
    ...BrownColors.collection.vars,
    ...GreyColors.collection.vars,
    ...BlueGreyColors.collection.vars,
    ...UiColors.colors
  ];

  public static colorsPalettePostfixValues : [string, string[]][] = this.colorsPalette.map(e => e.postfixValue)
}