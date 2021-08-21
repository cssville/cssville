import { PaddingGenerator} from "./generators/paddingGenerator";
import { MarginGenerator} from "./generators/marginGenerator";
import { IGenerator } from "./IGenerator";

export class Cssville {
    
    public static generators: IGenerator[] = 
    [
        new PaddingGenerator(),
        new MarginGenerator(),
    ];

    static css() : string {
        var css = "";
        var prefixValueMap = new Map([
            ["xs", "320px"],
            ["sm", "544px"],
            ["md", "768px"],
            ["lg", "1012px"],
            ["xl", "1280px"]
        ]);
        for (var x = 0; x < Cssville.generators.length; x++) {
            const g = Cssville.generators[x];
            css += g.generate("");
        }
        prefixValueMap.forEach((value: string, key: string) => {
            var innerCss = "";
            var prefix = key;
            for (var x = 0; x < Cssville.generators.length; x++) {
                const g = Cssville.generators[x];
                innerCss += g.generate(prefix);
            }
            css += `@media (min-width: ${value}) { ${innerCss} } `;
        });
        return css;
    }
}