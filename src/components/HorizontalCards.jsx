import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import history from '../routes/history';
import Counter from './Counter';
import erase from '../assets/static/delete.png';
import '../assets/styles/components/HorizontalCards.scss';

function HorizontalCards({ images, name, price, id, counter }) {

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
    const fixed = parseFloat(almostfixed).toFixed(2);
    return fixed;
  }

  function trashCard() {
    const local = localStorage.getItem('shoppingCart');
    const parsed = JSON.parse(local);
    const toTrash = parsed.filter((p) => {
      return p._id !== id;
    });
    const str = JSON.stringify(toTrash);
    localStorage.setItem('shoppingCart', str);
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
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  (function definePersonalCart() {
    if (!localStorage.getItem('shoppingCart')) {
      const parsed = [];
      const document = {};
      const data = {};
      document['_id'] = id;
      document['data'] = data;
      data['images'] = images;
      data['name'] = name;
      data['price'] = price;
      data['count'] = count;
      data['total'] = total();
      parsed.push(document);
      const str = JSON.stringify(parsed);
      localStorage.setItem('shoppingCart', str);
    } else {
      const local = localStorage.getItem('shoppingCart');
      const array = JSON.parse(local);
      const parsed = array.filter((item) => {
        return item._id !== id;
      });
      const document = {};
      const data = {};
      document['_id'] = id;
      document['data'] = data;
      data['images'] = images;
      data['name'] = name;
      data['price'] = price;
      data['count'] = count;
      data['total'] = total();
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
        <h6 className='total-price'>{`$${total()}`}</h6>
      </div>
    </div>
  );
}

export default HorizontalCards;
