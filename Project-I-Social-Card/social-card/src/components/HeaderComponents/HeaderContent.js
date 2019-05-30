import React from 'react';
import './Header.css';


//  - Create a `<HeaderContent />` component that displays the copy provided in the headers content.

const HeaderContent = () => {
    return (
        <div className= "HeaderContent">
            <span>
                Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun.
                Once you feel comfortable using components you are well on your way to mastering React!
            </span>
        </div>
    )
}

export default HeaderContent;