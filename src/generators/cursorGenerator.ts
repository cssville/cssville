import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class CursorGenerator extends GeneratorBase {
    postfixValuesMap = new Map([
        ["cell", ["cell"]],
        ["help", ["help"]],
        ["crosshair", ["crosshair"]],
        ["text", ["text"]],
        ["wait", ["wait"]],
        ["copy", ["copy"]],
        ["move", ["move"]],
        ["grab", ["grab"]],
        ["grabbing", ["grabbing"]],
        ["not-allowed", ["not-allowed"]],
        ["pointer", ["pointer"]],
        ["progress", ["progress"]],
        ["zoom-in", ["zoom-in"]],
        ["zoom-out", ["zoom-out"]],
        ["default", ["default"]]
    ]);
    cssData = [
        new CssClassData("cursor", ["cursor"], this.postfixValuesMap)
    ];
}