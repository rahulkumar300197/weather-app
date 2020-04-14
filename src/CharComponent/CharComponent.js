import React from 'react';

const charComponent = (props) => {
    const style = {
        display: "inline-block",
        padding: "16px",
        margin: "16px",
        border: "1px solid black",
        testAlign: "center"
    };

    return (
        <div style={style} onClick={props.remove}>{props.character}</div>
    );
}

export default charComponent;