import React from 'react';
import { Link } from 'react-router-dom';
import bigLogoDummy from '../assets/static/bigLogoDummy.png';
import wrongImage from '../assets/static/wrong.png';
import '../assets/styles/containers/Wrong.scss';

function Wrong() {
  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col text-center mt-5 mb-5'>
          <img src={bigLogoDummy} alt='bigLogoDummy' />
        </div>
      </div>
      <div className='row mt-5 mb-5'>
        <div className='col-2'>
          <img src={wrongImage} alt='wrong' />
        </div>
        <div className='col-8 text-center m-auto'>
          <h3>Lo sentimos! su compra no se pudo realizar, intente más tarde.</h3>
        </div>
        <div className='col-2'>
          <img src={wrongImage} alt='wrong' />
        </div>
      </div>
      <div className='row mt-5 mb-5'>
        <div className='col text-center mt-5 mb-5'>
          <Link to='/' className='link'>Regrese al home</Link>
        </div>
      </div>
    </div>
  );
}

export default Wrong;
