import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";

export class DisplayGenerator extends GeneratorBase {
    postfixValueMap = new Map([
        ["block", ["block"]],
        ["inline", ["inline"]],
        ["inline-block", ["inline-block"]],
        ["flex", ["flex"]],
        ["inline-flex", ["inline-flex"]],
        ["grid", ["grid"]],
        ["inline-grid", ["inline-grid"]],
        ["flow-root", ["flow-root"]],
        ["none", ["none"]],
        ["contents", ["contents"]],
        ["block-flow", ["block flow"]],
        ["inline-flow", ["inline flow"]],
        ["inline-flow-root", ["inline flow-root"]],
        ["block-flex", ["block flex"]],
        ["inline-flex", ["inline flex"]],
        ["block-grid", ["block grid"]],
        ["inline-grid", ["inline grid"]],
        ["block-flow-root", ["block flow-root"]],
        ["table", ["table"]],
        ["table-row", ["table-row"]],
        ["list-item", ["list-item"]],
        ["inherit", ["inherit"]],
        ["initial", ["initial"]],
        ["revert", ["revert"]],
        ["unset", ["unset"]]
    ]);
    cssData = [
        new CssClassData("d", ["display"])
    ];
}