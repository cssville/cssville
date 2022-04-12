import { CssClassData } from "./data/cssClassData";
import { IGenerator } from "./IGenerator";

export class GeneratorBase implements IGenerator {

    public constructor () { }

    public postfixValuesMap: Map<string, string[]> = new Map();
    public cssData: CssClassData[] = [];

    generate(prefix: string = ""): string {
        var cssPart = "";
        this.cssData.forEach(data => {
            cssPart += data.css(prefix);
        });
        return cssPart;
    }
}