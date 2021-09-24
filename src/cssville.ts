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

export class Cssville {
    
    public static generators: IGenerator[] = 
    [
        new AlignItemsGenerator(),
        new BorderRadiusGenerator(),
        new ColorGenerator(),
        new CursorGenerator(),
        new PaddingGenerator(),
        new MarginGenerator(),
        new DisplayGenerator(),
        new FlexDirectionGenerator(),
        new FlexGrowGenerator(),
        new FlexShrinkGenerator(),
        new FlexWrapGenerator(),
        new FloatGenerator(),
        new FontSizeGenerator(),
        new FontWeightGenerator(),
        new HeightGenerator(),
        new JustifyContentGenerator(),
        new WidthGenerator(),
        new TextDecorationGenerator(),
        new PositionGenerator(),
    ];

    static css() : string {
        var css = "";
        var prefixValueMap = new Map([
            ["xl", "1280px"],
            ["lg", "1012px"],
            ["md", "768px"],
            ["sm", "544px"],
            ["xs", "320px"],
        ]);
        for (var x = 0; x < Cssville.generators.length; x++) {
            const g = Cssville.generators[x];
            var cssPart = g.generate("");
            css += cssPart;
        }
        prefixValueMap.forEach((value: string, key: string) => {
            var innerCss = "";
            var prefix = key;
            for (var x = 0; x < Cssville.generators.length; x++) {
                const g = Cssville.generators[x];
                var cssPartForPrefix = g.generate(prefix);
                innerCss += cssPartForPrefix;
            }
            css += `@media (max-width: ${value}) { ${innerCss}} `;
        });
        return css;
    }
}