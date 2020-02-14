import React from 'react';
import { Link } from 'react-router-dom';
import history from '../routes/history';
import erase from '../assets/static/miniDelete.png';
import '../assets/styles/components/AliasDirection.scss';

function AliasDirection({ alias, id, removeAlias }) {

  function defineShippingAddress() {
    const local = localStorage.getItem('addressAlias');
    const array = JSON.parse(local);
    const parsed = array.filter((item) => {
      return item.alias === alias;
    });
    if (localStorage.getItem('alias')) {
      localStorage.removeItem('alias');
    }
    const str = JSON.stringify(parsed);
    localStorage.setItem('alias', str);
    history.push('/shippingAndPayment');
  };

  return (
    <div className='border col-4 pl-0 pr-0 text-center justify-content-center align-items-center'>
      <Link to='/shippingAndPayment' className='d-flex justify-content-center align-items-center'>
        <div className='container-fluid pl-0 pr-0'>
          <h6 className='mb-0' onClick={defineShippingAddress}>{alias}</h6>
        </div>
      </Link>
      <button type='submit'>
        <img src={erase} alt='delete' onClick={() => removeAlias(id)} />
      </button>
    </div>
  );
}

export default AliasDirection;
