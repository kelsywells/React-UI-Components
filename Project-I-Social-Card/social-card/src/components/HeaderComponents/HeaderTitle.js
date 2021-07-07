import React from 'react';
import './Header.css';


//  - Create a `<HeaderTitle />` component that displays the Lambda School header text, @LambdaSchool handle and timestamp.

const HeaderTitle = () => {
    return (
        <div className= "HeaderTitle"> 
            <h3>Lambda School</h3>      
            <a className= 'LambdaHandle' href="https://go.lambdaschool.com">@LambdaSchool</a>
            <span className='Date'>11 June</span>  
        </div>
    );
}

export default HeaderTitle;
