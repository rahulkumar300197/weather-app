import React from 'react';
import './../TextInput/TextInput.css';


const validationComponent = (props) => {
    return (
        <div className="TextInput">
            <p>{props.textLength < 5 ? "Text too short": "Text long enough"} </p>

        </div>
    );
}

export default validationComponent;