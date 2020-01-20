import React from 'react';
import { Link } from 'react-router-dom';
import Counter from './Counter';
import erase from '../assets/static/delete.png';
import miniCandy from '../assets/static/miniCandy.png';
import '../assets/styles/components/HorizontalCards.scss';

function HorizontalCards() {

  return (
    <div className='row pb-3'>
      <div className='col-1 text-center d-flex justify-content-center align-items-center'>
        <a href='#' className=''>
          <img className='makeCenter' src={erase} alt='delete' />
        </a>
      </div>
      <div className='col-3 text-center d-flex justify-content-center align-items-center'>
        <Link to='/productDescription'>
          <img src={miniCandy} alt='delete' />
        </Link>
      </div>
      <div className='col-2 text-center d-flex justify-content-center align-items-center'>
        <h6 className='name text-justify'>DULCESITOS DE GOMA DE GUSANITO MARCA PATITO 1KG.</h6>
      </div>
      <div className='col-2 text-center d-flex justify-content-center align-items-center'>
        <h6 className='price'>$20.00</h6>
      </div>
      <div className='col-2 text-center d-flex justify-content-center align-items-center'>
        <Counter />
      </div>
      <div className='col-2 text-center d-flex justify-content-center align-items-center'>
        <h6 className='total-price'>$40.00</h6>
      </div>
    </div>
  );
}

export default HorizontalCards;
