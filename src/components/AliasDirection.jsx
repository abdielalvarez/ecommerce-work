import React from 'react';
import { Link } from 'react-router-dom';
import erase from '../assets/static/miniDelete.png';
import '../assets/styles/components/AliasDirection.scss';

function AliasDirection() {
  return (
    <div className='border col-4 pl-0 pr-0 text-center justify-content-center align-items-center'>
      <Link to='/createDirectionAlias' className='d-flex justify-content-center align-items-center'>
        <div className='container-fluid pl-0 pr-0'>
          <h6 className='mb-0'>CASA</h6>
        </div>
      </Link>
      <button type='submit'>
        <img src={erase} className='' alt='delete' />
      </button>
    </div>
  );
}

export default AliasDirection;
