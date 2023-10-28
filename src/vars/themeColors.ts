import { IVar } from "../IVar";
import { Var } from "../Var";
import BlueColors from "./color/blue";
import BlueGreyColors from "./color/blueGrey";
import CyanColors from "./color/cyan";
import DeepOrangeColors from "./color/deepOrange";
import GreenColors from "./color/green";
import GreyColors from "./color/grey";
import LightBlueColors from "./color/lightBlue";
import LightGreenColors from "./color/lightGreen";
import RedColors from "./color/red";
import YellowColors from "./color/yellow";

export default class ThemeColors {

  public static text = new Var("color", "text", BlueGreyColors.collection.colors["900"].color.var);
  public static link = new Var("color", "link", BlueColors.collection.colors["800"].color.var);

  public static success = new Var("color", "success", LightGreenColors.collection.colors["900"].color.var);
  public static successBg = new Var("color", "bg-success", LightGreenColors.collection.colors["100"].color.var);
  public static successBorder = new Var("color", "border-success", LightGreenColors.collection.colors["700"].color.var);
  public static successHover = new Var("color", "hover-success", LightGreenColors.collection.colors["200"].color.var);

  public static info = new Var("color", "info", LightBlueColors.collection.colors["900"].color.var);
  public static infoBg = new Var("color", "bg-info", LightBlueColors.collection.colors["100"].color.var);
  public static infoBorder = new Var("color", "border-info", LightBlueColors.collection.colors["700"].color.var);
  public static infoHover = new Var("color", "hover-info", LightBlueColors.collection.colors["200"].color.var);

  public static warning = new Var("color", "warning", YellowColors.collection.colors["900"].color.var);
  public static warningBg = new Var("color", "bg-warning", YellowColors.collection.colors["100"].color.var);
  public static warningBorder = new Var("color", "border-warning", YellowColors.collection.colors["700"].color.var);
  public static warningHover = new Var("color", "hover-warning", YellowColors.collection.colors["200"].color.var);

  public static error = new Var("color", "error", RedColors.collection.colors["900"].color.var);
  public static errorBg = new Var("color", "bg-error", RedColors.collection.colors["100"].color.var);
  public static errorBorder = new Var("color", "border-error", RedColors.collection.colors["700"].color.var);
  public static errorHover = new Var("color", "hover-error", RedColors.collection.colors["200"].color.var);

  public static primary = new Var("color", "primary", BlueColors.collection.colors["900"].color.var);
  public static primaryBg = new Var("color", "bg-primary", BlueColors.collection.colors["100"].color.var);
  public static primaryBorder = new Var("color", "border-primary", BlueColors.collection.colors["700"].color.var);
  public static primaryHover = new Var("color", "hover-primary", BlueColors.collection.colors["200"].color.var);

  public static secondary = new Var("color", "secondary", BlueGreyColors.collection.colors["900"].color.var);
  public static secondaryBg = new Var("color", "bg-secondary", GreyColors.collection.colors["50"].color.var);
  public static secondaryBorder = new Var("color", "border-secondary", BlueGreyColors.collection.colors["100"].color.var);
  public static secondaryHover = new Var("color", "hover-secondary", GreyColors.collection.colors["100"].color.var);
  
  public static border = new Var("color", "border", BlueGreyColors.collection.colors["100"].color.var);
  public static shadow = new Var("color", "shadow", BlueGreyColors.collection.colors["300"].opacityColors[2].var);
  public static background = new Var("color", "bg", "white");
  public static foreground = new Var("color", "fg", "white");

  public static colors: IVar[] = [
    this.text,
    this.link,

    this.success,
    this.info,
    this.warning,
    this.error,
    this.primary,
    this.secondary,

    this.successBg,
    this.infoBg,
    this.warningBg,
    this.errorBg,
    this.primaryBg,
    this.secondaryBg,

    this.successBorder,
    this.infoBorder,
    this.warningBorder,
    this.errorBorder,
    this.primaryBorder,
    this.secondaryBorder,

    this.successHover,
    this.infoHover,
    this.warningHover,
    this.errorHover,
    this.primaryHover,
    this.secondaryHover,

    this.border,
    this.shadow,
    this.background,
    this.foreground
  ];
}