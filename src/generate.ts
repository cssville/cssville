import fs = require('fs');
import { Cssville } from '.';

var css = Cssville.css();
fs.writeFile("build/cssville.css", css, () => { console.log("done."); });
