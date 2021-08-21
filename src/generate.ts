import fs = require('fs');
import { Cssville } from '.';


fs.writeFile("build/cssville.css", Cssville.css(), () => {});
