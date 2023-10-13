import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class ZIndexGenerator extends Generator {
    list = ["auto", "0", "-1", "-2", "-3", "-4", "-5", "1", "2", "3", "4", "5", "10", "100", "1000", "9999"];
    cssData = [
        new CssClassData("z", ["z-index"], this.list)
    ];
}