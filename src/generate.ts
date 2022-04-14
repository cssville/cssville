import fs = require('fs');
import { Cssville } from './cssville';

function getFiles(pathDir: string): string[] {
    const files = [];
    for (const file of fs.readdirSync(pathDir)) {
        const fullPath = pathDir + '/' + file;
        if (fs.lstatSync(fullPath).isDirectory())
            getFiles(fullPath).forEach(x => files.push(file + '/' + x));
        else
            files.push(file);
    }
    return files;
}

var path = process.argv[2];
var dir = process.argv[3];
var extensions = process.argv[4];
if(!path) { 
    path = "build/cssville.css"
}
if(!extensions) { 
    var css = Cssville.getCss();
    fs.writeFile(path, css, () => { console.log("done: " + path); });    
} else {
    var classes:  string[] = [];
    var exArray = extensions.split(",");
    var files = getFiles(dir).filter(fn => exArray.filter(e => fn.endsWith(e)).length > 0);
    files.forEach(file => {
        file = dir + '/' + file;
        var content = fs.readFileSync(file).toString();
        let className = "className=";
        let pos = 0;
        var cssClasses = "";
        while (content.indexOf(className, pos) != -1) {
            pos = content.indexOf(className, pos) + className.length;
            if(content[pos] === '"') {
                var end = content.indexOf('"', pos + 1);
                if(end - pos > 1) {
                    cssClasses = content.substring(pos + 1, end);
                    cssClasses.split(" ").forEach(c => {
                        if(classes.indexOf(c) === -1) {
                            classes.push(c);
                        }
                    });
                    console.log(cssClasses);
                }
                pos=end;
            }
        }
        console.log(`File ${file} processed`);       
    });
    console.log(`All css: `, classes.join(","));
    var css = Cssville.getCss(classes);
    fs.writeFile(path, css, () => { console.log("done: " + path + " with pattern " + extensions + " for dir " + dir); });  
}
