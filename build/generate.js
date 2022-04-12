"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var cssville_1 = require("./cssville");
var path = process.argv[2];
var patterns = process.argv[3];
if (!path) {
    path = "build/cssville.css";
}
if (!patterns) {
    var css = cssville_1.Cssville.getCss();
    fs.writeFile(path, css, function () { console.log("done: " + path); });
}
else {
    var patternsArray = patterns.split(";");
    var testClasses = ["fw-bold", "sm-d-none", "w-12", "p-1", "sm-p-1", "sm-p-0"];
    var css = cssville_1.Cssville.getCss(testClasses);
    fs.writeFile(path, css, function () { console.log("done: " + path + " with patterns " + patterns); });
}
//# sourceMappingURL=generate.js.map