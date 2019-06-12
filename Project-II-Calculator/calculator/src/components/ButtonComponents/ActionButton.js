import React from 'react';
import './Button.css';


//- Create an `<ActionButton />` component that will be used for the `zero` character and the `clear` button.

function ActionButton(props) {
    <div className= {props.ActionBtns.buttonStyle}>{props.ActionBtns.text}</div>
}

const ActionBtns = [
    {name: 'zero', buttonStyle: 'actBtn', text: '0'},
    {name: 'clear', buttonStyle: 'actBtn', text: 'clear'}
]


export default ActionButton;