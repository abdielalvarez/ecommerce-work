import React from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../config/Fire';
// import history from '../routes/history';
// import Counter from './Counter';
import blueCar from '../assets/static/blue-car.png';
import '../assets/styles/components/Cards.scss';

const Cards = ({ product, id }) => {
  const { name, price, images } = product;
  const handleSubmit = (e) => {
    firestore.collection('candies').doc(id).get()
      .then((snapShots) => {
        const info = { _id: snapShots.id, data: snapShots.data() };
        localStorage.removeItem('candyDataBase');
        const str = JSON.stringify(info);
        localStorage.setItem('candyDataBase', str);
        window.location.reload();
      });
    // axios.get(`http://localhost:3000/api/candy/${str}`, {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //   },
    // })
    //   .then((res) => {
    //     const info = res.data.data;
    //     const string = JSON.stringify(info);
    //     localStorage.removeItem('candyDataBase');
    //     localStorage.setItem('candyDataBase', string);
    //     window.location.reload();
    //   })
    //   .catch((err) => console.log(err));
  };

  function AddToCart() {
    if (localStorage.getItem('shoppingCart')) {
      const local = localStorage.getItem('shoppingCart');
      const array = JSON.parse(local);
      const parsed = array.filter((item) => {
        return item._id !== id;
      });
      const document = {};
      const data = {};
      document['_id'] = id;
      document['data'] = data;
      data['images'] = images[0].img;
      data['name'] = name;
      data['price'] = price;
      data['count'] = 0;
      parsed.push(document);
      const str = JSON.stringify(parsed);
      localStorage.setItem('shoppingCart', str);
    } else {
      const info = [];
      const document = {};
      const data = {};
      document['_id'] = id;
      document['data'] = data;
      data['images'] = images[0].img;
      data['name'] = name;
      data['price'] = price;
      data['count'] = 0;
      info.push(document);
      const str = JSON.stringify(info);
      localStorage.setItem('shoppingCart', str);
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
