import React from 'react';
import './Button.css';

// - Create a `<NumberButton />` component that can accept `props` and display any number/symbol passed down as `text`.
//   - Example your component should be able to render a dynamic prop called text:
//   - Your button button should also be able to accept dynamic props `buttonStyle` for styling

function NumberButton(props) {
    return (
    <div className= {props.NumberBtns.buttonStyle}>{props.NumberBtns.text}</div>
    )
}


const NumberBtns = [
    {name: 'one', buttonStyle: 'numBtn', text: '1'},
    {name: 'two', buttonStyle: 'numBtn', text: '2'},
    {name: 'three', buttonStyle: 'numBtn', text: '3'},
    {name: 'four', buttonStyle: 'numBtn', text: '4'},
    {name: 'five', buttonStyle: 'numBtn', text: '5'},
    {name: 'six', buttonStyle: 'numBtn', text: '6'},
    {name: 'seven', buttonStyle: 'numBtn', text: '7'},
    {name: 'eight', buttonStyle: 'numBtn', text: '8'},
    {name: 'nine', buttonStyle: 'numBtn', text: '9'}
]


export default NumberButton;