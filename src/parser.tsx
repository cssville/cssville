export function getClasses(text: string) : Array<{cssClass: string, cssString: string}> {
    const classes = Array<{cssClass: string, cssString: string}> ();
    text.split("}").forEach((el, i) => {
        var line = el.trim();
        var cl = line.split("{")[0].trim();
        var inner = line.split("{")[1];
        var properties = []
        if(inner !== undefined){
            var props = inner.trim().split(";").map(p => p.trim());
            props.forEach((p, j) => {
                if(p !== "") {
                    properties[properties.length] = "  " + p + ";\n";
                }
            });
        }
        if(cl !== "") {
            classes.push({cssClass: cl, cssString: cl + " {\n" + properties.join("") + "}\n"});
        }
    });
    return classes;
};
