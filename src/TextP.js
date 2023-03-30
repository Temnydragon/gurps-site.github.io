import React from "react";

function TextP (props) {
    return (
        <p className={props.fullClass}>
            {props.text}
        </p>
    )
}

export default TextP