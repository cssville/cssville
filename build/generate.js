"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var cssville_1 = require("./cssville");
function getFiles(pathDir) {
    var files = [];
    var _loop_1 = function (file) {
        var fullPath = pathDir + '/' + file;
        if (fs.lstatSync(fullPath).isDirectory())
            getFiles(fullPath).forEach(function (x) { return files.push(file + '/' + x); });
        else
            files.push(file);
    };
    for (var _i = 0, _a = fs.readdirSync(pathDir); _i < _a.length; _i++) {
        var file = _a[_i];
        _loop_1(file);
    }
    return files;
}
var path = process.argv[2];
var dir = process.argv[3];
var extensions = process.argv[4];
if (!path) {
    path = "build/cssville.css";
}
if (!extensions) {
    var css = cssville_1.Cssville.getCss();
    fs.writeFile(path, css, function () { console.log("done: " + path); });
}
else {
    var classes = [];
    var exArray = extensions.split(",");
    var files = getFiles(dir).filter(function (fn) { return exArray.filter(function (e) { return fn.endsWith(e); }).length > 0; });
    files.forEach(function (file) {
        file = dir + '/' + file;
        var content = fs.readFileSync(file).toString();
        var className = "className=";
        var pos = 0;
        var cssClasses = "";
        while (content.indexOf(className, pos) != -1) {
            pos = content.indexOf(className, pos) + className.length;
            if (content[pos] === '"') {
                var end = content.indexOf('"', pos + 1);
                if (end - pos > 1) {
                    cssClasses = content.substring(pos + 1, end);
                    cssClasses.split(" ").forEach(function (c) {
                        if (classes.indexOf(c) === -1) {
                            classes.push(c);
                        }
                    });
                    console.log(cssClasses);
                }
                pos = end;
            }
        }
        console.log("File " + file + " processed");
    });
    console.log("All css: ", classes.join(","));
    var css = cssville_1.Cssville.getCss(classes);
    fs.writeFile(path, css, function () { console.log("done: " + path + " with pattern " + extensions + " for dir " + dir); });
}
//# sourceMappingURL=generate.js.map