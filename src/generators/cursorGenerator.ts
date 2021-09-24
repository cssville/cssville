import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class CursorGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["wait", ["wait"]],
        ["pointer", ["pointer"]],
        ["progress", ["progress"]],
        ["default", ["default"]]
    ]);
    cssData = [
        new CssClassData("cursor", ["cursor"])
    ];
}