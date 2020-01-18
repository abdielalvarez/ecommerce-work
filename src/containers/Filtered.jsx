import React, { Component } from 'react';
import axios from 'axios';
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
    if (!localStorage.getItem('categoryData')) {
      axios.get('http://localhost:3000/candy', {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((res) => {
          this.setState({
            products: res.data,
          });
          const string = JSON.stringify(this.state.products);
          localStorage.setItem('categoryData', string);
        })
        .catch((err) => {
          this.setState({
            error: err,
          });
        });
    } else {
      const local = localStorage.getItem('categoryData');
      const parsed = JSON.parse(local);
      this.setState({
        products: parsed,
      });
    }
  }

  render() {
    const { products, error } = this.state;
    if (error) {
      return (
        <div className='container'>
          <h4 className='suggestions text-center mt-2'>
            Lo sentimos, por el momento no tenemos servicio para mostrarte los productos filtrados
            <br />
            Le invitamos a intentarlo más tarde
          </h4>
        </div>
      );
    }
    return (
      <>
        <Navbar />
        <section id='section' className='mt-4 mb-4'>
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
        </section>
      </>
    );
  }
}

export default Filtered;
