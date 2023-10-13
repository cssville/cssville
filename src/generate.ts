import fs = require('fs');
import { Cssville } from './cssville';

var path = "build/cssville.css";
var css = Cssville.getCss();
fs.writeFile(path, css, () => { console.log("Done: " + path); });
