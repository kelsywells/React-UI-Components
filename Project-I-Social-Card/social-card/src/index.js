import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail'
import HeaderContent from './components/HeaderComponents/HeaderContent'
import HeaderTitle from './components/HeaderComponents/HeaderTitle'


function HeaderContainer() {
    return (
        <div className="HeaderContainer">
            <HeaderContainer />
            <ImageThumbnail />
            <HeaderContent />
            <HeaderTitle />
        </div>
    )
}

export default HeaderContainer;
