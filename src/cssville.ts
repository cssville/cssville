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
import { FontFamilyGenerator } from "./generators/fontFamilyGenerator";
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
import ThemeColors from "./vars/themeColors";
import { IVar } from "./IVar";
import CssvilleBorder from "./vars/border";
import { BoxShadowGenerator } from "./generators/boxShadowGenerator";
import CssvilleShadow from "./vars/shadow";
import CssvilleFontFamily from "./vars/fontFamily";
import { ZIndexGenerator } from "./generators/zIndexGenerator";
import { LineHeightGenerator } from "./generators/lineHeightGenerator";
import { BorderColorGenerator } from "./generators/borderColorGenerator";
import { BorderStyleGenerator } from "./generators/borderStyleGenerator";
import { BorderWidthGenerator } from "./generators/borderWidthGenerator";

export class Cssville {

  public static generators: IGenerator[] =
    [
      new AlignContentGenerator("align-content"),
      new AlignItemsGenerator("align-items"),
      new BorderGenerator("border", false),
      new BorderColorGenerator("border-color", false),
      new BorderStyleGenerator("border-style", false),
      new BorderWidthGenerator("border-width", false),
      new BorderRadiusGenerator("border-radius"),
      new BoxShadowGenerator("box-shadow"),
      new BackgroundColorGenerator("background-color", false),
      new ColorGenerator("color", false),
      new CursorGenerator("cursor"),
      new DisplayGenerator("display"),
      new FlexDirectionGenerator("flex-direction"),
      new FlexGrowGenerator("flex-grow"),
      new FlexShrinkGenerator("flex-shrink"),
      new FlexWrapGenerator("flex-wrap"),
      new FloatGenerator("float"),
      new FontFamilyGenerator("font-family"),
      new FontSizeGenerator("font-size"),
      new FontWeightGenerator("font-weight"),
      new HeightGenerator("height"),
      new JustifyContentGenerator("justify-content"),
      new LineHeightGenerator("line-height"),
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
      new ZIndexGenerator("z-index"),
    ];

  public static breakpoints: IVar[] = CssvilleBreakpoints.breakpoints;

  public static variables: IVar[][] =
    [
      this.breakpoints,
      CssvilleFontFamily.vars,
      CssvilleColors.colorsPalette,
      CssvilleBorder.vars,
      CssvilleShadow.vars,
    ];

  public static rootValues: Map<string, IVar> = new Map([
    ["font-family", CssvilleFontFamily.primary],
    ["color", ThemeColors.text],
  ]);

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
    for (const [key, value] of this.rootValues) {
      allVarsCss += ` ${key}: ${value.var};`;
    }
    css += `:root {${allVarsCss}} `;
    for (var x = 0; x < this.generators.length; x++) {
      const g = this.generators[x];
      var cssPart = g.generate("", classes);
      css += cssPart;
    }
    for (const breakpoint of this.breakpoints) {
      var innerCss = "";
      for (var x = 0; x < this.generators.length; x++) {
        const generator = this.generators[x];
        if (generator.generateCssForBreakpoints) {
          var cssPartForPrefix = generator.generate(breakpoint.name, classes);
          innerCss += cssPartForPrefix;
        }
      }
      css += `@media screen and (max-width: ${breakpoint.value}) { ${innerCss}} `;
    }
    return css;
  }
}