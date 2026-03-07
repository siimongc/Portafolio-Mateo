import React from 'react';
import portadaImg from '../Images/Portada_mateo.png';
import './TitleImage.css';

const TitleImage = () => {
    return (
        <div className="title-image-wrapper">
            <img src={portadaImg} alt="Portafolio" className="title-image" />
        </div>
    );
};

export default TitleImage;
