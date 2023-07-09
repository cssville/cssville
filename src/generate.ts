import fs = require('fs');
import Cssville from './cssville';
import pathModule = require('path');

function getFiles(pathDir: string): string[] {
    const files = [];
    const dirs = [];
    if (pathDir.indexOf(',') > -1) {
        dirs.push(...pathDir.split(','));
    } else {
        dirs.push(pathDir);
    }
    for (const dir of dirs) {
        console.log(`Reading files from ${dir}`);
        if (!fs.existsSync(dir)) {
            console.error(`Directory '${pathModule.resolve(dir)}' not found!`);
            return files;
        }
        for (const file of fs.readdirSync(dir)) {
            const fullPath = dir + '/' + file;
            if (fs.lstatSync(fullPath).isDirectory())
                getFiles(fullPath).forEach(x => files.push(x));
            else
                files.push(fullPath);
        }
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
    fs.writeFile(path, css, () => { console.log("Done: " + path); });    
} else {
    var classes:  string[] = [];
    var exArray = extensions.split(",");
    var files = getFiles(dir).filter(fn => exArray.filter(e => fn.endsWith(e)).length > 0);
    files.forEach(file => {
        var content = fs.readFileSync(file).toString();
        var ext = pathModule.extname(file);
        let className = ext === ".jsx" || ext === ".tsx" ? "className=" : "class=";
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
                }
                pos=end;
            }
        }
        console.log(`File ${file} processed`);       
    });
    var css = Cssville.getCss(classes);
    fs.writeFile(path, css, () => { 
        console.log(`Done: '${path}' with pattern '${extensions}' for dir '${dir}'`); 
    });  
}
