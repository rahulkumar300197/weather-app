import React from 'react';
import './TextInput.css';


const textInput = (props) => {
    return (
        <div className="TextInput">
            <textarea rows="4" cols="50" onChange={props.change} value={props.characters}/>
            <p>Text Length: {props.textLength}</p>

        </div>
    );
}

export default textInput;