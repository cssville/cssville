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
    var classes = [];
    var exArray = extensions.split(",");
    var files = getFiles(dir).filter(fn => exArray.filter(e => fn.endsWith(e)).length > 0);
    files.forEach(file => {
        file = dir + '/' + file;
        console.log(file);
        fs.readFile(file, (err, data) => {
            if (err) throw err;
            var content = data.toString();
            console.log(content);
        });
    });
    var testClasses = ["fw-bold", "sm-d-none", "w-12", "p-1", "sm-p-1", "sm-p-0"];
    var css = Cssville.getCss(testClasses);
    fs.writeFile(path, css, () => { console.log("done: " + path + " with pattern " + extensions + " for dir " + dir); });  
}
