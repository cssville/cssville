export class CssClassData {
  public constructor(className: string, cssProperties: string[], postfixArray: string[], postfixValuesMap: Map<string, string[]> = new Map()) {
    this.className = className;
    this.cssProperties = cssProperties;
    this.postfixValuesMap = postfixValuesMap;

    this.cssParts = new Map<string, string>();
    if (postfixArray !== undefined) {
      postfixArray.forEach(element => {
        this.postfixValuesMap.set(element, [element]);
      });
    }
    this.postfixValuesMap.forEach((value: string[], key: string) => {
      var postfix = key;
      var innerProperties = "";
      this.cssProperties.forEach(cssProperty => {
        value.forEach(v => {
          innerProperties += `${cssProperty}: ${v}; `;
        });
      });
      this.cssParts.set(`${this.className}-${postfix}`, innerProperties);
    });
  }

  public className: string;
  public cssProperties: string[];
  public postfixValuesMap: Map<string, string[]>;

  private cssParts: Map<string, string>;

  getCss(prefix: string = "", classes: string[]): string {
    var css = "";
    this.cssParts.forEach((value: string, key: string) => {
      var className = `${prefix === "" ? "" : `${prefix}-`}${key}`;
      if (classes.length === 0) {
        css += `.${className} {${value}} `;
      }
      if (classes.length > 0 && classes.indexOf(className) >= 0) {
        css += `.${className} {${value}} `;
      }
    });
    return css;
  }
}