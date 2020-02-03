import React from 'react';
import '../assets/styles/components/Counter.scss';

function Counter({ less, plus, count }) {

  return (
    <div className='d-flex text-center'>
      <a className='counter col-xl-2' onClick={less}>-</a>
      <input
        name='count'
        type='text'
        className='col-xl-8 pt-0 pb-0 pl-0 pr-0 text-center'
        value={count}
      />
      <a className='counter text-center col-xl-2' onClick={plus}>+</a>
    </div>
  );
}

export default Counter;
