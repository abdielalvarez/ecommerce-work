import React from 'react';
import kid from '../assets/static/niña-dulce.png';
import '../assets/styles/components/Carousel.scss';

function Carousel() {
    return (    
        <main id="main">
            <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel" data-pause="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={kid} alt="kid" />
                    </div>
                    <div className="overlay">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="text-center d-none d-md-block">
                                    <h1>ABIERTO LOS 365 DÍAS DEL AÑO DE 10AM A 10PM</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Carousel;










// function Carousel() {
//     return (    
//         <div className="carousel-item active text-white">
//             <img src={kid} className="d-block w-100" alt="kid" />
//             <h1 className="text text-center">ABIERTO LOS 365 DÍAS DEL AÑO DE 10AM A 10PM</h1>
//         </div>
//     )
// }

// export default Carousel;
