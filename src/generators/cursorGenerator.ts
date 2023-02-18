import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class CursorGenerator extends GeneratorBase {
    list = ["cell", "help", "crosshair", "text", "wait", "copy", "move",  "grab", "grabbing", "not-allowed", "pointer", "progress", "zoom-in", "zoom-out", "default"];
    cssData = [
        new CssClassData("cursor", ["cursor"], this.list)
    ];
}