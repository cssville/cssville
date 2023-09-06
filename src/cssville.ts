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
import CssvilleBreakpoints from "./breakpoints";
import CssvilleColors from "./colors";

export default class Cssville {

  public static generators: IGenerator[] =
    [
      new AlignContentGenerator("align-content"),
      new AlignItemsGenerator("align-items"),
      new BorderRadiusGenerator("border-radius"),
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

  static getCss(classes: string[] = []): string {
    var css = "";
    var breakpointsCss = "";
    const breakpointNames = Object.keys(CssvilleBreakpoints.breakpoints);
    for (const breakpointName of breakpointNames) {
      const breakpointValue = CssvilleBreakpoints.breakpoints[breakpointName];
      breakpointsCss += ` --cssville-${breakpointName}-breakpoint: ${breakpointValue};`;
    }
    var colorsCss = "";
    const colorNames = Object.keys(CssvilleColors.basicColors);
    for (const colorName of colorNames) {
      const breakpointValue = CssvilleColors.basicColors[colorName];
      colorsCss += ` --cssville-${colorName}-color: ${breakpointValue};`;
    }
    css += `:root {${breakpointsCss}}{${colorsCss}} `;
    for (var x = 0; x < Cssville.generators.length; x++) {
      const g = Cssville.generators[x];
      var cssPart = g.generate("", classes);
      css += cssPart;
    }
    for (const breakpointName of breakpointNames) {
      var v = `--cssville-${breakpointName}-breakpoint`;
      var innerCss = "";
      for (var x = 0; x < Cssville.generators.length; x++) {
        const g = Cssville.generators[x];
        var cssPartForPrefix = g.generate(breakpointName, classes);
        innerCss += cssPartForPrefix;
      }
      css += `@media screen and (max-width: var(${v})) { ${innerCss}} `;
    }
    return css;
  }
}