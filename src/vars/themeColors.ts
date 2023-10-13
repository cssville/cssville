import { IVar } from "../IVar";
import { Var } from "../Var";
import BlueColors from "./color/blue";
import BlueGreyColors from "./color/blueGrey";
import CyanColors from "./color/cyan";
import DeepOrangeColors from "./color/deepOrange";
import GreenColors from "./color/green";
import LightBlueColors from "./color/lightBlue";
import YellowColors from "./color/yellow";

export default class ThemeColors {
  
  public static text = new Var("color", "text", BlueGreyColors.collection.colors["900"].color.var);
  public static link = new Var("color", "link", BlueColors.collection.colors["800"].color.var);
  public static success = new Var("color", "success", GreenColors.collection.colors["600"].color.var);
  public static info = new Var("color", "info", LightBlueColors.collection.colors["600"].color.var);
  public static warning = new Var("color", "warning", YellowColors.collection.colors["600"].color.var);
  public static error = new Var("color", "error", DeepOrangeColors.collection.colors["600"].color.var);
  public static border = new Var("color", "border", BlueGreyColors.collection.colors["100"].color.var);
  public static shadow = new Var("color", "shadow", BlueGreyColors.collection.colors["300"].opacityColors[2].var);
  public static primary = new Var("color", "primary", BlueColors.collection.colors["600"].color.var);
  public static secondary = new Var("color", "secondary", CyanColors.collection.colors["300"].color.var);
  public static background = new Var("color", "bg", "white");
  public static foreground = new Var("color", "fg", "white");

  public static colors : IVar[] = [
    this.text,
    this.link,
    this.border,
    this.shadow,    
    this.primary,
    this.secondary,
    this.background,
    this.foreground
  ];  
}