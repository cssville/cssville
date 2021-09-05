export class CssClassData {
    public constructor(className: string, cssProperties: string[]){
        this.className = className;
        this.cssProperties = cssProperties;
    }

    public className : string;
    public cssProperties : string[];

    css(prefix: string = "", postfixValuesMap: Map<string, string[]>): string {
        var css = "";
        postfixValueMap.forEach((value: string[], key: string) => {
            var postfix = key;
            var innerProperties = "";
            this.cssProperties.forEach(cssProperty => {
                value.forEach(v => {
                   innerProperties += `${cssProperty}: ${v}; `; 
                });
            });

            css += `.${prefix === "" ? "" : `${prefix}-`}${this.className}-${postfix} { ${innerProperties}} `;
        });
        return css;
    }
}