"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var cssville_1 = require("./cssville");
var css = cssville_1.Cssville.css();
fs.writeFile("build/cssville.css", css, function () { console.log("done."); });
//# sourceMappingURL=generate.js.map