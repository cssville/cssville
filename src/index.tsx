import { Cssville } from "./cssville";
import * as ReactDOM from 'react-dom/client';
import React = require("react");
import { ReactNode } from "react";
import hljs from 'highlight.js';

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
  var ex = document.getElementById("example") as HTMLInputElement;
  var exCode = document.getElementById("example-code") as HTMLInputElement;
  exCode.innerHTML = escape_html(ex.innerHTML);

  const root = ReactDOM.createRoot(document.getElementById('root'));
  const prefixesNodes: ReactNode[] = [
    <h2 className="fs-xx-large m-0 pb-3 md-fs-xx-large">
      CSS prefixes
    </h2>,
    <p className="pb-3 m-0">
      The same classes can be used with predefined screen-size prefixes. When prefix is used, the style is applied only for specific screen resolution.
      See the example below for the
      <span className="fs-small code text-decoration-none border br-2 px-2 opacity-1 bg-grey fw-bold">d-flex</span> property:
    </p>
  ];
  Cssville.prefixValueMap.forEach((val, prefix) => {
    prefixesNodes[prefixesNodes.length] =
      <div className="pb-3">
        <div className="fs-x-large pb-3"><span className="fw-bold">{prefix}</span></div>
        <div key={`come-example-${prefix}`} className="max-w-12 bg-grey p-3 br-3">
          <pre className="m-0">
            <code className="language-css hljs br-2 max-w-sm mx-auto"
              dangerouslySetInnerHTML={{
                __html:
                  hljs.highlight(`
@media screen and (max-width: ${val}) {
  .${prefix}-d-flex {
    display: flex;
  }
}`, { language: 'css' }).value
              }}
            />
          </pre>
        </div>
      </div>;
  })
  const prefixesNode = <div className="pb-3">{prefixesNodes}</div>;
  const nodes: ReactNode[] = [
    prefixesNode,
    <h2 className="fs-xx-large m-0 pb-3 md-fs-xx-large">
      CSS classes
    </h2>,
    <p className="pb-3 m-0">
      Utility classes are a specific type of class that is designed to provide a single,
      focused styling property, such as padding, margin, or font size. Unlike traditional classes,
      which might be used to define more complex styles, utility classes are very simple and focused on a single aspect of the style.
    </p>,
  ];
  Cssville.generators.forEach((g, i) => {
    nodes[nodes.length] = g.getUIComponent();
  })
  root.render(<>{nodes}</>);
  hljs.highlightAll();
  document.getElementById("copy")?.addEventListener('click', async function () {
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