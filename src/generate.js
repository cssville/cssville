"use strict";
exports.__esModule = true;
var fs = require("fs");
var cssville_1 = require("./cssville");
var pathModule = require("path");
function getFiles(pathDir) {
    var files = [];
    var dirs = [];
    if (pathDir.indexOf(',') > -1) {
        dirs.push.apply(dirs, pathDir.split(','));
    }
    else {
        dirs.push(pathDir);
    }
    for (var _i = 0, dirs_1 = dirs; _i < dirs_1.length; _i++) {
        var dir_1 = dirs_1[_i];
        console.log("Reading files from ".concat(dir_1));
        if (!fs.existsSync(dir_1)) {
            console.error("Directory '".concat(pathModule.resolve(dir_1), "' not found!"));
            return files;
        }
        for (var _a = 0, _b = fs.readdirSync(dir_1); _a < _b.length; _a++) {
            var file = _b[_a];
            var fullPath = dir_1 + '/' + file;
            if (fs.lstatSync(fullPath).isDirectory())
                getFiles(fullPath).forEach(function (x) { return files.push(x); });
            else
                files.push(fullPath);
        }
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
    fs.writeFile(path, css, function () { console.log("Done: " + path); });
}
else {
    var classes = [];
    var exArray = extensions.split(",");
    var files = getFiles(dir).filter(function (fn) { return exArray.filter(function (e) { return fn.endsWith(e); }).length > 0; });
    files.forEach(function (file) {
        var content = fs.readFileSync(file).toString();
        var ext = pathModule.extname(file);
        var className = ext === ".jsx" || ext === ".tsx" ? "className=" : "class=";
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
                }
                pos = end;
            }
        }
        console.log("File ".concat(file, " processed"));
    });
    var css = cssville_1.Cssville.getCss(classes);
    fs.writeFile(path, css, function () {
        console.log("Done: '".concat(path, "' with pattern '").concat(extensions, "' for dir '").concat(dir, "'"));
    });
}
