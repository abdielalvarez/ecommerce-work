import React from 'react';
import { Link } from 'react-router-dom';
import bigLogoDummy from '../assets/static/bigLogoDummy.png';
import rightImage from '../assets/static/right.png';
import '../assets/styles/containers/Right.scss';

function Right() {
  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col text-center mt-5 mb-5'>
          <img src={bigLogoDummy} alt='bigLogoDummy' />
        </div>
      </div>
      <div className='row mt-5 mb-5'>
        <div className='col-2'>
          <img src={rightImage} alt='right' />
        </div>
        <div className='col-8 text-center m-auto'>
          <h3>
              Su compra en línea
              fue realizada exitosamente
              gracias por preferirnos!!
          </h3>
        </div>
        <div className='col-2'>
          <img src={rightImage} alt='right' />
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

export default Right;
