/* eslint-disable indent */
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Counter from '../components/Counter';
import bigCandy from '../assets/static/bigCandy.png';
import littleCandy from '../assets/static/littleCandy.png';
import blueCar from '../assets/static/blue-car.png';
import '../assets/styles/containers/ProductDescription.scss';

class ProductDescription extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     product: [],
  //     error: '',
  //   };
  // }

  // componentDidMount() {
  //   if (!localStorage.getItem('productForDescription')) {
  //     axios.get('http://localhost:3000/candy', {
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //       },
  //     })
  //       .then((res) => {
  //         this.setState({
  //           product: res.data[0],
  //         });
  //         const string = JSON.stringify(this.state.product);
  //         localStorage.setItem('categoryData', string);
  //       })
  //       .catch((err) => {
  //         this.setState({
  //           error: err,
  //         });
  //       });
  //   } else {
  //     const local = localStorage.getItem('categoryData');
  //     const parsed = JSON.parse(local);
  //     this.setState({
  //       product: parsed,
  //     });
  //   }
  // }

  render() {

    return (
      <>
        <Navbar />
        <div className='container'>
          <div className='row mt-3'>
            <div id='1' className='pl-0 col-md-5'>
              <img id='mainImage' src={bigCandy} alt='candy' />
            </div>
            <div id='2' className='col-md-7'>
              <h5>Hola</h5>
              <p>
                Hola
              </p>
            </div>
          </div>
          <div className='row mb-3'>
            <div className='container-fluid pl-0 col-5'>
              <div className='row'>
                <div id='3' className='col-6'>
                  <img id='image1' className='' src={littleCandy} alt='candy' />
                </div>
                <div id='4' className='col-6'>
                  <img id='image2' className='' src={littleCandy} alt='candy' />
                </div>
              </div>
            </div>
            <div className='container-fluid col-7 d-flex justify-content-center align-items-center'>
              <div className='row text-center'>
                <div id='5' className='col-4'>
                  <h6 className='price'>$5.50</h6>
                  <h6>Precio de cada uno</h6>
                </div>
                <div id='6' className='col-4'>
                  <img src={blueCar} alt='car' />
                  <h6>Añadir al carrito de compra</h6>
                </div>
                <div id='7' className='container col-4'>
                  <Counter />
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
