import React from 'react';
import './Button.css';


//- Create an `<ActionButton />` component that will be used for the `zero` character and the `clear` button.

function ActionButton(props) {
    const ActionBtns = [
        {name: 'zero', buttonStyle: 'actBtn', text: '0'},
        {name: 'clear', buttonStyle: 'actBtn', text: 'clear'}
    ]

    return (
    <div className= {props.buttonStyle}>{props.text}</div>
    )
}


export default ActionButton;