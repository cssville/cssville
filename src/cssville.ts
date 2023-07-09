import { IGenerator } from "./IGenerator";
import { PaddingGenerator} from "./generators/paddingGenerator";
import { MarginGenerator} from "./generators/marginGenerator";
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

export class Cssville {
    
    public static prefixValueMap = new Map([
        ["xl", "1280px"],
        ["lg", "1012px"],
        ["md", "768px"],
        ["sm", "544px"],
        ["xs", "320px"],
    ]);

    public static generators: IGenerator[] = 
    [
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

    static getCss(classes: string[] = []) : string {
        var css = "";
        for (var x = 0; x < Cssville.generators.length; x++) {
            const g = Cssville.generators[x];
            var cssPart = g.generate("", classes);
            css += cssPart;
        }
        this.prefixValueMap.forEach((value: string, key: string) => {
            var innerCss = "";
            var prefix = key;
            for (var x = 0; x < Cssville.generators.length; x++) {
                const g = Cssville.generators[x];
                var cssPartForPrefix = g.generate(prefix, classes);
                innerCss += cssPartForPrefix;
            }
            css += `@media screen and (max-width: ${value}) { ${innerCss}} `;
        });
        return css;
    }
}