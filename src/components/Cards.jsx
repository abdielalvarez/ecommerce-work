import React, { useState } from 'react';
import candy from '../assets/static/candy.png';
import blueCar from '../assets/static/blue-car.png';
import '../assets/styles/components/Cards.scss';

const Cards = ({ product }) => {

  const [count, setCount] = useState(0);
  const { name, price, images } = product;
  return (
    <section>
      <div className='card'>
        <img src={candy} className='card-img-top' alt='candy' />
        <div className='part-one'>
          <h5 className='card-title text-center'>{name}</h5>
          <h6 className='product text-center'>
            {price}
          </h6>
        </div>
        <div className='part-two'>
          <a className='col-xl-6 card-link blue-car'>
            <img src={blueCar} alt='car' />
          </a>
          <div className='col-xl-6 d-flex'>
            <a className='counter col-xl-2' onClick={() => { if (count === 0) { return count ; } setCount(count - 1) }}>-</a>
            <input
              name='count'
              type='text'
              className='counter col-xl-8 pt-0 pb-0 pl-0 pr-0 text-center'
              value={count}
            />
            <a className='counter col-xl-2' onClick={() => { setCount(count + 1) }}>+</a>
          </div>
        </div>
      </div>
    </section>
  );

};

export default Cards;
