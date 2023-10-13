import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class CursorGenerator extends Generator {
    list = ["cell", "help", "crosshair", "text", "wait", "copy", "move",  "grab", "grabbing", "not-allowed", "pointer", "progress", "zoom-in", "zoom-out", "default"];
    cssData = [
        new CssClassData("cursor", ["cursor"], this.list)
    ];
}