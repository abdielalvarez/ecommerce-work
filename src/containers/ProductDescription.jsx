/* eslint-disable react/no-deprecated */
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import history from '../routes/history';
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
    this.addToCart = this.addToCart.bind(this);
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
      const { _id, data: { images, name, price } } = desc;
      const parsed = array.filter((item) => {
        return item._id !== _id;
      });
      const document = {};
      const data = {};
      document['_id'] = _id;
      document['data'] = data;
      data['images'] = images[0].img;
      data['name'] = name;
      data['price'] = price;
      data['count'] = 0;
      parsed.push(document);
      const string = JSON.stringify(parsed);
      localStorage.setItem('shoppingCart', string);
    } else {
      const descLocal = localStorage.getItem('candyDataBase');
      const desc = JSON.parse(descLocal);
      const { _id, data: { images, name, price } } = desc;
      const info = [];
      const document = {};
      const data = {};
      document['_id'] = _id;
      document['data'] = data;
      data['images'] = images[0].img;
      data['name'] = name;
      data['price'] = price;
      data['count'] = 0;
      info.push(document);
      const string = JSON.stringify(info);
      localStorage.setItem('shoppingCart', string);
    }
    history.push('/shoppingCart');
  }

  render() {
    const { product, error, isLoading } = this.state;
    const { data } = product;
    const { images, name, description, price } = data;
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
                  <img src={blueCar} alt='car' style={{ 'cursor': 'pointer' }} onClick={this.addToCart} />
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
