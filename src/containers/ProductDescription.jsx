/* eslint-disable react/no-deprecated */
/* eslint-disable indent */
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import history from '../routes/history';
// import bigCandy from '../assets/static/bigCandy.png';
// import littleCandy from '../assets/static/littleCandy.png';
import blueCar from '../assets/static/blue-car.png';
import '../assets/styles/containers/ProductDescription.scss';

class ProductDescription extends Component {

  constructor() {
    super();
    this.state = {
      product: {},
      error: '',
      isLoading: false,
    };
  }

  componentWillMount() {
    this.setState({
      isLoading: true,
    });
    if (localStorage.getItem('candyDataBase')) {
      const local = localStorage.getItem('candyDataBase');
      const parsed = JSON.parse(local);
      this.setState({
        product: parsed,
        isLoading: false,
      });
    } else {
      this.setState({
        error: true,
      });
    }
  }

  addToCart = () => {
    if (localStorage.getItem('shoppingCart')) {
      const local = localStorage.getItem('shoppingCart');
      const array = JSON.parse(local);
      const descLocal = localStorage.getItem('candyDataBase');
      const desc = JSON.parse(descLocal);
      const { _id, images, name, price } = desc;
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
      const descLocal = localStorage.getItem('candyDataBase');
      const desc = JSON.parse(descLocal);
      const { _id, images, name, price } = desc;
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
    history.push('/shoppingCart');
  }

  render() {
    const { product, error, isLoading } = this.state;
    const { images, name, description, price } = product;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>Error</p>;
    }
    return (
      <>
        <Navbar />
        <div className='container'>
          <div className='row mt-3'>
            <div id='1' className='pl-0 col-md-5'>
              <img id='mainImage' src={images[0].img} alt='candy' />
            </div>
            <div id='2' className='col-md-7 text-center'>
              <h5>{name}</h5>
              <p>
                {description}
              </p>
            </div>
          </div>
          <div className='row mb-3'>
            <div className='container-fluid pl-0 col-5'>
              <div className='row'>
                <div id='3' className='col-6'>
                  <img id='image1' className='' src={images[1].img} alt='candy' />
                </div>
                <div id='4' className='col-6'>
                  <img id='image2' className='' src={images[2].img} alt='candy' />
                </div>
              </div>
            </div>
            <div className='container-fluid col-7 d-flex justify-content-center align-items-center'>
              <div className='row text-center'>
                <div id='5' className='col-6'>
                  <h6 className='price'>{price}</h6>
                  <h6>Precio de cada uno</h6>
                </div>
                <div id='6' className='col-6'>
                  <img src={blueCar} alt='car' style={{ 'cursor': 'pointer' }} onClick={this.addToCart.bind(this)} />
                  <h6>Añadir al carrito de compra</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductDescription;
