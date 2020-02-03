import React, { Component } from 'react';
// import axios from 'axios';
import Cards from '../components/Cards';
import Navbar from '../components/Navbar';

class Filtered extends Component {

  constructor() {
    super();
    this.state = {
      products: [],
      error: '',
    };
  }

  componentDidMount() {
    if (localStorage.getItem('candyDataBase')) {
      const local = localStorage.getItem('candyDataBase');
      const parsed = JSON.parse(local);
      this.setState({
        products: parsed,
      });
    } else {
      this.setState({
        error: true,
      });
    }
  }

  render() {
    const { products } = this.state;
    return (
      <>
        <Navbar />
        <section id='section' className='mt-4 mb-4'>
          {products.length === 0 ? (
            <div className='container-fluid'>
              <h1 className='text-center'>No hay este tipo de producto, busque otra categoría</h1>
            </div>
          ) : (
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-12'>
                  <h4 className='suggestions'>Filtrados por categoría, tipo o día festivo</h4>
                </div>
              </div>
              <div className='row'>
                {products.map((product) => {
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
          )}
        </section>
      </>
    );
  }
}

export default Filtered;
