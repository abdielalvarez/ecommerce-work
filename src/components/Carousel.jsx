import React from 'react';
import kid from '../assets/static/niña-dulce.png';
import '../assets/styles/components/Carousel.scss';

function Carousel() {
    return (    
        <div className="carousel-item active text-white">
            <img src={kid} className="d-block w-100" alt="kid" />
            <h1 className="text text-center">ABIERTO LOS 365 DÍAS DEL AÑO DE 10AM A 10PM</h1>
        </div>
    )
}

export default Carousel;
