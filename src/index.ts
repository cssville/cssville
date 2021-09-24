function docReady(fn: () => void) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function () {
    console.log("OK");
    document.getElementById("copy")?.addEventListener('click', function(){
        var copyText = document.getElementById("input-copy") as HTMLInputElement;
        console.log(copyText)
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }, false)
});