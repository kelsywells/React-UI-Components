import React from 'react';
import './Header.css';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import HeaderTitle from './components/HeaderComponents/HeaderTitle';

function HeaderContainer() {
    return (
        <div className = "HeaderContainer">
            <ImageThumbnail />
            <HeaderTitle />

        </div>
    )   
}

export default HeaderContainer;


