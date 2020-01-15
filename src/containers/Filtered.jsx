import React, { Component } from 'react';
import Cards from '../components/Cards';

class Filtered extends Component {
  render() {
    return (
      <>
        <section id='section' className='mt-4 mb-4'>
          <div className='container-fluid'>
            {/* <div className='row'>
              <div className='col-12'>
                <h4 className='suggestions'>Filtrados por {}</h4>
              </div>
            </div> */}
            <div className='row'>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4 justify-content-center'>
                <Cards
                  productName='Dulces de gusanito 1kg.'
                  productPrice='20.00'
                  counter='1'
                />
              </div>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4 justify-content-center'>
                <Cards
                  productName='Dulces de gusanito 1kg.'
                  productPrice='20.00'
                  counter='1'
                />
              </div>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4 justify-content-center'>
                <Cards
                  productName='Dulces de gusanito 1kg.'
                  productPrice='20.00'
                  counter='1'
                />
              </div>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4 justify-content-center'>
                <Cards
                  productName='Dulces de gusanito 1kg.'
                  productPrice='20.00'
                  counter='1'
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Filtered;
