import { CssClassData } from "./data/cssClassData";

export interface IGenerator {
  name: string;
  postfixValuesMap: Map<string, string[]>;
  cssData: CssClassData[];
  generate(prefix: string, classes: string[]): string;
}