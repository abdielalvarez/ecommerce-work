import React from 'react';
import kid from '../assets/static/niña-dulce.png';
import '../assets/styles/components/Carousel.scss';

function Carousel() {
  return (
    <main id='main' className='d-none d-md-inline'>
      <div id='carousel' className='carousel slide carousel-fade' data-ride='carousel' data-pause='false'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img className='d-block w-100' src={kid} alt='kid' />
          </div>
          <div className='overlay'>
            <div className='container'>
              <div className='row align-items-center justify-content-center'>
                <div className='text-center d-none d-md-block'>
                  <h1>ABIERTO LOS 365 DÍAS DEL AÑO DE 10AM A 10PM</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Carousel;
