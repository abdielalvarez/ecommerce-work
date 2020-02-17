import React from 'react';
import '../assets/styles/components/MiniCards.scss';

function MiniCards({ image, name, total }) {
  return (
    <li className='list-group-item'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-2 pl-0 pr-0'>
            <img src={image} alt='consultProductImage' />
          </div>
          <div className='col-8 color'>{name.toUpperCase()}</div>
          <div className='col-2 pl-0 pr-0 text-right'>
            $
            {total}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MiniCards;
