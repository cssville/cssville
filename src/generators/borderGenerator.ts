import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class BorderGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["1", ["1px"]],
    ]);
    list = ["none"];
    cssData = [
        new CssClassData("border", ["border"], this.list, this.postfixValuesMap)
    ];
}