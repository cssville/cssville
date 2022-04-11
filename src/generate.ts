import fs = require('fs');
import { Cssville } from './cssville';

var css = Cssville.css();
var path = process.argv[2];
fs.writeFile(path, css, () => { console.log("done: " + path); });
