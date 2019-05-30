import React from 'react';
import './Header.css';
import LambdaTitle from './components/HeaderComponents/LambdaTitle'
import LambdaHandle from './components/HeaderComponents/LambdaHandle'
import TimeStamp from './components/HeaderComponents/TimeStamp'

//  - Create a `<HeaderTitle />` component that displays the Lambda School header text, @LambdaSchool handle and timestamp.

const HeaderTitle = () => {
    return (
        <div className= "HeaderTitle">
            <LambdaTitle />
            <LambdaHandle />
            <TimeStamp />
        </div>
    );
}

export default HeaderTitle;
