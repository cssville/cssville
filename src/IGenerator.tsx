import { CssClassData } from "./data/cssClassData";

export interface IGenerator {
  name: string;
  cssClassToValuesMap: Map<string, string[]>;
  cssData: CssClassData[];
  generateCssForBreakpoints: boolean;
  generate(prefix: string, classes: string[]): string;
}