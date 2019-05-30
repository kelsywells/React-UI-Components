import React from 'react';
import './Header.css';


//  - Create a `<HeaderTitle />` component that displays the Lambda School header text, @LambdaSchool handle and timestamp.

const HeaderTitle = () => {
    return (
        <div className= "HeaderTitle">
            <h1>Lambda School</h1>
            <a href="https://go.lambdaschool.com">@LambdaSchool</a>
            <input type="datetime-local" />
        </div>
    );
}

export default HeaderTitle;
