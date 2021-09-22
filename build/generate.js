"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var _1 = require(".");
var css = _1.Cssville.css();
fs.writeFile("build/cssville.css", css, function () { console.log("done."); });
//# sourceMappingURL=generate.js.map