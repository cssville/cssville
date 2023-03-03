import { ReactFragment, ReactNode, useState } from "react";
import React = require("react");
import hljs from 'highlight.js';

export const CssClassesList = (props: any) => {
    const [active, setActive] = useState(0);
    return (
        <>
            <div className="fs-medium pb-2 d-flex flex-wrap-wrap">
                {props.data.map((value: any, i: number) => {
                    var cl = value.cssClass;
                    return (
                        <a key={`class-${cl}`} onClick={(e) => { setActive(i)}}
                            className={`cursor-pointer fs-small m-1 text-decoration-none border br-2 px-2 py-1 ${i === active ? "opacity-1 bg-grey" : "opacity-05"}`}>
                            {cl}
                        </a>);
                })}
            </div>
            <div key={`come-example-${active}`} className="w-12 bg-grey p-3 br-3">
                <pre className="m-0">
                    <code className="language-css hljs br-2 max-w-sm mx-auto"
                        dangerouslySetInnerHTML={{
                            __html:
                                hljs.highlight(props.data[active].cssString, { language: 'css' }).value
                        }}
                    />
                </pre>
            </div>
        </>
    );
}