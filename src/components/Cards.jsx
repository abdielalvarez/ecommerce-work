import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import history from '../routes/history';
// import Counter from './Counter';
import blueCar from '../assets/static/blue-car.png';
import '../assets/styles/components/Cards.scss';

const Cards = ({ product }) => {
  const { name, price, _id, images } = product;
  const str = String(_id);
  const handleSubmit = (e) => {
    axios.get(`http://localhost:3000/api/candy/${str}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => {
        const info = res.data.data;
        const string = JSON.stringify(info);
        localStorage.removeItem('candyDataBase');
        localStorage.setItem('candyDataBase', string);
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  function AddToCart() {
    if (localStorage.getItem('shoppingCart')) {
      const local = localStorage.getItem('shoppingCart');
      const array = JSON.parse(local);
      const parsed = array.filter((item) => {
        return item._id !== _id;
      });
      const document = {};
      document['_id'] = _id;
      document['images'] = images[0].img;
      document['name'] = name;
      document['price'] = price;
      document['count'] = 0;
      parsed.push(document);
      const string = JSON.stringify(parsed);
      localStorage.setItem('shoppingCart', string);
    } else {
      const data = [];
      const document = {};
      document['_id'] = _id;
      document['images'] = images[0].img;
      document['name'] = name;
      document['price'] = price;
      document['count'] = 0;
      data.push(document);
      const string = JSON.stringify(data);
      localStorage.setItem('shoppingCart', string);
    }
  }

  return (
    <section>
      <div className='card'>
        <Link onClick={handleSubmit} to='/productDescription'>
          <img src={images[0].img} className='card-img-top' alt='candy' />
        </Link>
        <div className='part-one'>
          <Link onClick={handleSubmit} to='/productDescription'>
            <h5 className='card-title text-center'>{name}</h5>
          </Link>
          <h6 className='product text-center'>
            {price}
          </h6>
        </div>
        <div className='part-two'>
          <Link to='/shoppingCart' onClick={AddToCart} className='col-xl-12 card-link blue-car'>
            <img src={blueCar} alt='car' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cards;
