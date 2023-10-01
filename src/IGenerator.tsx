import { CssClassData } from "./data/cssClassData";

export interface IGenerator {
  name: string;
  postfixValuesMap: Map<string, string[]>;
  cssData: CssClassData[];
  generateCssForBreakpoints: boolean;
  generate(prefix: string, classes: string[]): string;
}