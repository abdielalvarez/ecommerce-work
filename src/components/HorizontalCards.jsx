import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import history from '../routes/history';
import Counter from './Counter';
import erase from '../assets/static/delete.png';
import '../assets/styles/components/HorizontalCards.scss';

function HorizontalCards({ images, name, price, _id, counter }) {

  const [count, setCount] = useState(counter);

  function less() {
    if (count === 0) {
      return count;
    }
    setCount(count - 1);
    return count;
  }

  function plus() {
    setCount(count + 1);
  }

  function total() {
    const str = price.replace('$', '');
    const int = parseFloat(str);
    const res = count * int;
    const almostfixed = res.toFixed(2);
    const fixed = parseFloat(almostfixed);
    return fixed;
  }

  function trashCard() {
    const local = localStorage.getItem('shoppingCart');
    const parsed = JSON.parse(local);
    const toTrash = parsed.filter((p) => {
      return _id !== p._id;
    });
    const string = JSON.stringify(toTrash);
    localStorage.setItem('shoppingCart', string);
  }

  function productDescription() {
    const str = String(_id);
    axios.get(`http://localhost:3000/api/candy/${str}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => {
        console.log(res);
        const info = res.data.data;
        const string = JSON.stringify(info);
        localStorage.removeItem('candyDataBase');
        localStorage.setItem('candyDataBase', string);
        history.push('/productDescription');
        location.reload();
      })
      .catch((err) => console.log(err));
  }

  (function definePersonalCart() {
    if (!localStorage.getItem('shoppingCart')) {
      const parsed = [];
      const document = {};
      document['_id'] = _id;
      document['images'] = images;
      document['name'] = name;
      document['price'] = price;
      document['count'] = count;
      document['total'] = total();
      parsed.push(document);
      const str = JSON.stringify(parsed);
      localStorage.setItem('shoppingCart', str);
    } else {
      const local = localStorage.getItem('shoppingCart');
      const array = JSON.parse(local);
      const parsed = array.filter((item) => {
        return item._id !== _id;
      });
      const document = {};
      document['_id'] = _id;
      document['images'] = images;
      document['name'] = name;
      document['price'] = price;
      document['count'] = count;
      document['total'] = total();
      parsed.push(document);
      const str = JSON.stringify(parsed);
      localStorage.setItem('shoppingCart', str);
    }
  })();

  return (
    <div className='row pb-3'>
      <div className='col-1 text-center d-flex justify-content-center align-items-center'>
        <a href='#' onClick={trashCard}>
          <img className='makeCenter' src={erase} alt='delete' />
        </a>
      </div>
      <div className='col-3 text-center d-flex justify-content-center align-items-center'>
        <Link to='/productDescription' onClick={productDescription}>
          <img src={images} alt='productImage' />
        </Link>
      </div>
      <div className='col-2 text-center d-flex justify-content-center align-items-center'>
        <h6 className='name text-justify' style={{ 'cursor': 'pointer' }} onClick={productDescription}>{name.toUpperCase()}</h6>
      </div>
      <div className='col-2 text-center d-flex justify-content-center align-items-center'>
        <h6 className='price'>{price}</h6>
      </div>
      <div className='col-2 text-center d-flex justify-content-center align-items-center'>
        <Counter count={count} less={less} plus={plus} />
      </div>
      <div className='col-2 text-center d-flex justify-content-center align-items-center'>
        <h6 className='total-price'>{total()}</h6>
      </div>
    </div>
  );
}

export default HorizontalCards;
