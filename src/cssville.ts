import { IGenerator } from "./IGenerator";
import { PaddingGenerator } from "./generators/paddingGenerator";
import { MarginGenerator } from "./generators/marginGenerator";
import { DisplayGenerator } from "./generators/displayGenerator";
import { FlexDirectionGenerator } from "./generators/flexDirectionGenerator";
import { FlexGrowGenerator } from "./generators/flexGrowGenerator";
import { FlexWrapGenerator } from "./generators/flexWrapGenerator";
import { FlexShrinkGenerator } from "./generators/flexShrinkGenerator";
import { FloatGenerator } from "./generators/floatGenerator";
import { FontWeightGenerator } from "./generators/fontWeightGenerator";
import { WidthGenerator } from "./generators/widthGenerator";
import { FontSizeGenerator } from "./generators/fontSizeGenerator";
import { PositionGenerator } from "./generators/positionGenerator";
import { AlignContentGenerator } from "./generators/alignContentGenerator";
import { AlignItemsGenerator } from "./generators/alignItemsGenerator";
import { JustifyContentGenerator } from "./generators/justifyContentGenerator";
import { TextDecorationGenerator } from "./generators/textDecorationGenerator";
import { HeightGenerator } from "./generators/heightGenerator";
import { ColorGenerator } from "./generators/colorGenerator";
import { BorderRadiusGenerator } from "./generators/borderRadiusGenerator";
import { CursorGenerator } from "./generators/cursorGenerator";
import { BackgroundColorGenerator } from "./generators/backgroundColorGenerator";
import { TextAlignGenerator } from "./generators/textAlignGenerator";
import { WordBreakGenerator } from "./generators/wordBreakGenerator";
import { WhiteSpaceGenerator } from "./generators/whiteSpaceGenerator";
import { ObjectFitGenerator } from "./generators/objectFitGenerator";
import { OpacityGenerator } from "./generators/opacityGenerator";
import { OverflowGenerator } from "./generators/overflowGenerator";
import { BorderGenerator } from "./generators/borderGenerator";
import CssvilleBreakpoints from "./vars/breakpoints";
import CssvilleColors from "./vars/colors";
import { IVar } from "./IVar";
import CssvilleBorder from "./vars/border";
import { BoxShadowGenerator } from "./generators/boxShadowGenerator";
import CssvilleShadow from "./vars/shadow";

export default class Cssville {

  public static generators: IGenerator[] =
    [
      new AlignContentGenerator("align-content"),
      new AlignItemsGenerator("align-items"),
      new BorderGenerator("border"),
      new BorderRadiusGenerator("border-radius"),
      new BoxShadowGenerator("box-shadow"),
      new BackgroundColorGenerator("background-color"),
      new ColorGenerator("color"),
      new CursorGenerator("cursor"),
      new DisplayGenerator("display"),
      new FlexDirectionGenerator("flex-direction"),
      new FlexGrowGenerator("flex-grow"),
      new FlexShrinkGenerator("flex-shrink"),
      new FlexWrapGenerator("flex-wrap"),
      new FloatGenerator("float"),
      new FontSizeGenerator("font-size"),
      new FontWeightGenerator("font-weight"),
      new HeightGenerator("height"),
      new JustifyContentGenerator("justify-content"),
      new MarginGenerator("margin"),
      new ObjectFitGenerator("object-fit"),
      new OpacityGenerator("opacity"),
      new OverflowGenerator("overflow"),
      new PaddingGenerator("padding"),
      new PositionGenerator("position"),
      new TextAlignGenerator("text-align"),
      new TextDecorationGenerator("text-decoration"),
      new WidthGenerator("width"),
      new WhiteSpaceGenerator("white-space"),
      new WordBreakGenerator("word-break"),
    ];

  public static variables: IVar[][] =
    [
      CssvilleBreakpoints.breakpoints,
      CssvilleColors.basicColors,
      CssvilleColors.colorsPalette,
      CssvilleBorder.vars,
      CssvilleShadow.vars,
    ];

  static getCss(classes: string[] = []): string {
    var css = "";
    var allVarsCss = "";
    for (var varsCollection of this.variables) {
      var collectionCss = "";
      for (var v of varsCollection) {
        collectionCss += ` ${v.css}`;
      }
      allVarsCss += ` ${collectionCss}`;
    }
    css += `:root {${allVarsCss}} `;
    for (var x = 0; x < Cssville.generators.length; x++) {
      const g = Cssville.generators[x];
      var cssPart = g.generate("", classes);
      css += cssPart;
    }
    for (const breakpoint of CssvilleBreakpoints.breakpoints) {
      var innerCss = "";
      for (var x = 0; x < Cssville.generators.length; x++) {
        const g = Cssville.generators[x];
        var cssPartForPrefix = g.generate(breakpoint.name, classes);
        innerCss += cssPartForPrefix;
      }
      css += `@media screen and (max-width: ${breakpoint.var}) { ${innerCss}} `;
    }
    return css;
  }
}