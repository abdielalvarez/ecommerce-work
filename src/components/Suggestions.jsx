import React, { Component } from 'react';
import axios from 'axios';
import Cards from './Cards';
import '../assets/styles/components/Suggestions.scss';

class Suggestions extends Component {

  constructor() {
    super();
    this.state = {
      products: [],
      error: '',
    };
  }

  componentDidMount() {
    localStorage.removeItem('candyDataBase');
    axios.get('http://localhost:3000/api/candies', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => {
        this.setState({
          products: res.data.data,
        });
        const string = JSON.stringify(this.state.products);
        localStorage.setItem('candyDataBase', string);
      })
      .catch((err) => {
        this.setState({
          error: err,
        });
      });
  }

  render() {
    const { products, error } = this.state;
    if (error) {
      return (
        <div className='container'>
          <h4 className='suggestions text-center mt-2'>
            Lo sentimos, por el momento no tenemos servicio para mostrarte los productos
            <br />
            Le invitamos a intentarlo más tarde
          </h4>
        </div>
      );
    }
    return (
      <>
        <section id='section' className='mt-4 mb-4'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12'>
                <h4 className='suggestions'>Lo más buscados</h4>
              </div>
            </div>
            <div className='row'>
              {products.filter(({ price }) => {
                const num = price.replace('$', '');
                const IntNum = parseFloat(num);
                return IntNum < 2.5;
              })
                .map((product) => {
                  return (
                    <div key={product.id} className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4 justify-content-center'>
                      <Cards
                        product={product}
                      />
                    </div>
                  );
                })}
            </div>
            <div className='row'>
              <div className='col-12'>
                <h4 className='suggestions'>Los más vendidos</h4>
              </div>
            </div>
            <div className='row'>
              {products.filter(({ price }) => {
                const num = price.replace('$', '');
                const IntNum = parseFloat(num);
                return IntNum < 5;
              })
                .map((product) => {
                  return (
                    <div key={product.id} className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4 justify-content-center'>
                      <Cards
                        product={product}
                      />
                    </div>
                  );
                })}
            </div>
            <div className='row'>
              <div className='col-12'>
                <h4 className='suggestions'>Nuevos</h4>
              </div>
            </div>
            <div className='row'>
              {products.filter(({ price }) => {
                const num = price.replace('$', '');
                const IntNum = parseFloat(num);
                return IntNum < 7.5;
              })
                .map((product) => {
                  return (
                    <div key={product.id} className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4 justify-content-center'>
                      <Cards
                        product={product}
                      />
                    </div>
                  );
                })}
            </div>
            <div className='row'>
              <div className='col-12'>
                <h4 className='suggestions'>En promoción</h4>
              </div>
            </div>
            <div className='row'>
              {products.filter(({ price }) => {
                const num = price.replace('$', '');
                const IntNum = parseFloat(num);
                return IntNum > 7.5;
              })
                .map((product) => {
                  return (
                    <div key={product.id} className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4 justify-content-center'>
                      <Cards
                        product={product}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Suggestions;
