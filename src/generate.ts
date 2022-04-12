import fs = require('fs');
import { Cssville } from './cssville';

var path = process.argv[2];
var patterns = process.argv[3];
if(!path) { 
    path = "build/cssville.css"
}
if(!patterns) { 
    var css = Cssville.getCss();
    fs.writeFile(path, css, () => { console.log("done: " + path); });    
} else {
    var patternsArray = patterns.split(";");
    var testClasses = ["fw-bold", "sm-d-none", "w-12", "p-1", "sm-p-1", "sm-p-0"];
    var css = Cssville.getCss(testClasses);
    fs.writeFile(path, css, () => { console.log("done: " + path + " with patterns " + patterns); });  
}
