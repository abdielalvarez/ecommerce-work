import React, { useState } from 'react';
import '../assets/styles/components/Counter.scss';

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div className='d-flex text-center'>
      <a className='counter col-xl-2' onClick={() => { if (count === 0) { return count ; } setCount(count - 1); }}>-</a>
      <input
        name='count'
        type='text'
        className='col-xl-8 pt-0 pb-0 pl-0 pr-0 text-center'
        value={count}
      />
      <a className='counter text-center col-xl-2' onClick={() => { setCount(count + 1); }}>+</a>
    </div>
  );
}

export default Counter;
