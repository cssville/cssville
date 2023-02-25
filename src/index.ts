function docReady(fn: () => void) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

let hasCopied = false;
const entityMap = new Map<string, string>(Object.entries({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': '&quot;',
  "'": '&#39;',
  "/": '&#x2F;'
}))

function escape_html(source: string) {
  return String(source).replace(/[&<>"'\/]/g, (s: string) => entityMap.get(s)!);
}

docReady(function () {
  console.log("doc ready")
  var ex = document.getElementById("example") as HTMLInputElement;
  var exCode = document.getElementById("example-code") as HTMLInputElement;
  exCode.innerHTML = escape_html(ex.innerHTML);
  document.getElementById("copy")?.addEventListener('click', async function(){
      var copyText = document.getElementById("input-copy") as HTMLInputElement;
      var copyIcon = document.getElementById("copy-icon") as HTMLImageElement;
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(copyText.innerText);
      } else {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
      }
      if (!hasCopied) {
        hasCopied = true;
        copyIcon.src = "copied.svg";
        setTimeout(() => {
          hasCopied = false;
          copyIcon.src = "copy.svg";
        }, 2000);
      }
  }, false)
});