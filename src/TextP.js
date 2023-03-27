import React from "react";

function TextP (props) {
    return (
        <p className={props.fullClass}>
            {props.message}
        </p>
    )
}

export default TextP