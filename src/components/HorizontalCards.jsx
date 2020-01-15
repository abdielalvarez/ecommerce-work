import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import trashCan from '../assets/static/delete.png';
import '../assets/styles/components/Cards.scss';

function HorizontalCards({ productImage, productName, productPrice }) {
  const [count, setCount] = useState(0);
  return (
    <div className='container'>
      <div className='row'>
            Tu carrito de compra
      </div>
      <div className='row'>
        <div className='col'>
          <button type='button'>
            <img src={trashCan} alt='trashCan' />
          </button>
        </div>
        <div className='col'>
          <Link to='/filtered'>
            <img src={productImage} alt='trashCan' />
          </Link>
        </div>
        <div className='col'>{productName}</div>
        <div className='col'>
            $
          {productPrice}
        </div>
        <div className='col'>
          <div className='col-xl-6 d-flex'>
            <a className='counter col-xl-2' onClick={() => { if (count === 0) { return count ; } setCount(count - 1); }}>-</a>
            <input
              name='count'
              type='text'
              className='counter col-xl-8 pt-0 pb-0 pl-0 pr-0 text-center'
              value={count}
            />
            <a className='counter col-xl-2' onClick={() => { setCount(count + 1); }}>+</a>
          </div>
        </div>
        <div className='col'>a</div>
      </div>
    </div>
  );
}

export default HorizontalCards;
