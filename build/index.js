"use strict";
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    }
    else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
docReady(function () {
    var _a;
    console.log("OK");
    (_a = document.getElementById("copy")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        var copyText = document.getElementById("input-copy");
        console.log(copyText);
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }, false);
});
//# sourceMappingURL=index.js.map