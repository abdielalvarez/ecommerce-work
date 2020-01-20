import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import history from '../routes/history';
import Counter from './Counter';
import candy from '../assets/static/candy.png';
import blueCar from '../assets/static/blue-car.png';
import '../assets/styles/components/Cards.scss';

const Cards = ({ product }) => {

  const { name, price, id, images } = product;
  const handleSubmit = (e) => {
    axios.get(`http://localhost:3000/candy/?:${id}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => {
        const info = res.data[0];
        console.log(info);
        const string = JSON.stringify(info);
        localStorage.setItem('productForDescription', string);
        history.push('/productDescription');
      })
      .catch((err) => console.log(err));
    e.preventDefault();
  };

  return (
    <section>
      <div className='card'>
        <Link onClick={handleSubmit} to='/productDescription'>
          <img src={candy} className='card-img-top' alt='candy' />
        </Link>
        <div className='part-one'>
          <Link onClick={handleSubmit} to='/productDescription'>
            <h5 className='card-title text-center'>{name}</h5>
          </Link>
          <h6 className='product text-center'>
            {price}
          </h6>
        </div>
        <div className='part-two'>
          <a className='col-xl-6 card-link blue-car'>
            <img src={blueCar} alt='car' />
          </a>
          <div className='col-xl-6'>
            <Counter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
