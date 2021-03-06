import React from 'react'
import {atomOneLight} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

function CSyntaxHighlighter({code}) {
    const style = {
        padding: "40px 40px 40px 20px",
        borderRadius: "3px",
    }

    return (
        <SyntaxHighlighter
            language="c"
            style={atomOneLight}
            customStyle={style}
            showLineNumbers>
            {code}
        </SyntaxHighlighter>
    )
}

export default CSyntaxHighlighter;
