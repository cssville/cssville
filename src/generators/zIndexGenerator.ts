import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class ZIndexGenerator extends GeneratorBase {
    list = ["auto", "0", "-1", "-2", "-3", "-4", "-5", "1", "2", "3", "4", "5", "10", "100", "1000", "9999"];
    cssData = [
        new CssClassData("z", ["z-index"], this.list)
    ];
}