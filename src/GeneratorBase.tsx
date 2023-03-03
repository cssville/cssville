import { ReactFragment, ReactNode, useState } from "react";
import React = require("react");
import { CssClassData } from "./data/cssClassData";
import { IGenerator } from "./IGenerator";
import { CssClassesList } from "./CssClassesList";
import { getClasses } from "./parser";
import hljs from 'highlight.js';

export class GeneratorBase implements IGenerator {
    public constructor(name: string) {
        this.name = name;
    }

    public name: string = "";
    public postfixValuesMap: Map<string, string[]> = new Map();
    public cssData: CssClassData[] = [];

    generate(prefix: string = "", classes: string[] = []): string {
        var cssPart = "";
        this.cssData.forEach(data => {
            cssPart += data.getCss(prefix, classes);
        });
        return cssPart;
    }

    getUIComponent(): ReactNode {
        let array = new Array();
        this.cssData.map(d => getClasses(d.getCss("", []))).forEach(arr => {
            array = array.concat(arr);
        });
        return (
            <div key={`node-${this.name}`} className="pb-3">
                <div className="fs-x-large fw-bold pb-2">{this.name}</div>
                <CssClassesList data={array} />
            </div>
        );
    }
}