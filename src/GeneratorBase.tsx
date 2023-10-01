import { CssClassData } from "./data/cssClassData";
import { IGenerator } from "./IGenerator";

export class GeneratorBase implements IGenerator {
  public constructor(name: string, generateCssForBreakpoints: boolean = true) {
    this.name = name;
    this.generateCssForBreakpoints = generateCssForBreakpoints;
  }

  public name: string = "";
  public generateCssForBreakpoints: boolean;
  public postfixValuesMap: Map<string, string[]> = new Map();
  public cssData: CssClassData[] = [];

  generate(prefix: string = "", classes: string[] = []): string {
    var cssPart = "";
    this.cssData.forEach(data => {
      cssPart += data.getCss(prefix, classes);
    });
    return cssPart;
  }
}