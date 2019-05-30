import React from 'react';
import './Header.css';


//  - Create a `<HeaderTitle />` component that displays the Lambda School header text, @LambdaSchool handle and timestamp.

const HeaderTitle = () => {
    return (
        <div className= "HeaderTitle">
            <h3>Lambda School</h3>
            {/* <span className= 'time-stamp'>{time.format('MMM Do ')}</span> */}
            <a class= 'LambdaHandle' href="https://go.lambdaschool.com">@LambdaSchool</a>
        </div>
    );
}

export default HeaderTitle;
