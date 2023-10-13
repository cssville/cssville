import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class WordBreakGenerator extends Generator {
  list = ["break-all", "keep-all", "break-word", "normal"];
  cssData = [
    new CssClassData("word-break", ["word-break"], this.list)
  ];
}