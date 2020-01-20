import React from 'react';
import candy from '../assets/static/miniCardCandy.png';
import '../assets/styles/components/MiniCards.scss';

function MiniCards() {
  return (
    <li className='list-group-item'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-2 pl-0 pr-0'>
            <img src={candy} alt='consultProductImage' />
          </div>
          <div className='col-8 color'>1 DULCESITO GUSANITO DE GOMITA YUMMI 1KG.</div>
          <div className='col-2 pl-0 pr-0 text-right'>$40.00</div>
        </div>
      </div>
    </li>
  );
}

export default MiniCards;
