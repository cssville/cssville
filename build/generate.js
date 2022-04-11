"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var cssville_1 = require("./cssville");
var css = cssville_1.Cssville.css();
var path = process.argv[2];
fs.writeFile(path, css, function () { console.log("done: " + path); });
//# sourceMappingURL=generate.js.map