import { IVar } from "./IVar";

export class Var implements IVar {
  public constructor(category: string, name: string, value: string) {
    this.category = category;
    this.name = name;
    
    this.value = value;
    this.varName = `--cssville-${this.name}-${this.category}`;
    this.var = `var(${this.varName})`;
    this.css = `${this.varName}: ${this.value};`;
    this.postfixValue = [this.name, [this.var]]
  }

  public category: string = "";
  public name: string = "";
  public value: string = "";
  public varName: string;
  public var: string;
  public css: string;
  public postfixValue: [string, string[]];
}