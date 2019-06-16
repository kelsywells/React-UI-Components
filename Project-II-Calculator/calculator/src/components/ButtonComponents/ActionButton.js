import React from 'react';
import './Button.css';


//- Create an `<ActionButton />` component that will be used for the `zero` character and the `clear` button.

const ActionButton = props => {
    const ActionBtns = [
        {name: 'zero', buttonStyle: 'actBtn', text: "0"},
        {name: 'clear', buttonStyle: 'actBtn', text: "clear"}
    ]

    console.log('ActionBtns', ActionBtns);
    console.log('props.text', props.text);

    return (
    <button className= {`long-btn ${props.className}`}>
        {props.text}
    </button>
       
    )
}


export default ActionButton;