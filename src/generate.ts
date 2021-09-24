import fs = require('fs');
import { Cssville } from './cssville';

var css = Cssville.css();
fs.writeFile("build/cssville.css", css, () => { console.log("done."); });
