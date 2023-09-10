import { IVar } from "./IVar";

export class VarBase implements IVar {
  public constructor(category: string, name: string, value: string) {
    this.category = category;
    this.name = name;
    this.value = value;
    this.varName = `--cssville-${name}-${category}`;
    this.var = `var(${this.varName})`;
    this.css = `${this.varName}: ${value};`;
  }

  public category: string = "";
  public name: string = "";
  public value: string = "";
  public varName: string;
  public var: string;
  public css: string;
}