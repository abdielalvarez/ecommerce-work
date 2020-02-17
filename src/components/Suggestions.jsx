import React, { Component } from 'react';
import { firestore } from '../config/Fire';
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
    firestore.collection('candies').get()
      .then((snapShots) => {
        this.setState({
          products: snapShots.docs.map((doc) => {
            return { _id: doc.id, data: doc.data() };
          }),
        });
        const string = JSON.stringify(this.state.products);
        localStorage.setItem('candyDataBase', string);
      })
      .catch((err) => {
        this.setState({
          error: err,
        });
      });

    // localStorage.removeItem('candyDataBase');
    // axios.get('http://localhost:3000/api/candies', {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //   },
    // })
    //   .then((res) => {
    //     this.setState({
    //       products: res.data.data,
    //     });
    //     console.log(this.state.products);
    //     const string = JSON.stringify(this.state.products);
    //     localStorage.setItem('candyDataBase', string);
    //   })
    //   .catch((err) => {
    //     this.setState({
    //       error: err,
    //     });
    //   });
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
              {products.filter(({ data }) => {
                const { price } = data;
                const num = price.replace('$', '');
                const IntNum = parseFloat(num);
                return IntNum < 2.5;
              })
                .map(({ _id, data }) => {
                  return (
                    <div key={data.id} className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4 justify-content-center'>
                      <Cards
                        product={data}
                        id={_id}
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
              {products.filter(({ data }) => {
                const { price } = data;
                const num = price.replace('$', '');
                const IntNum = parseFloat(num);
                return IntNum < 5;
              })
                .map(({ _id, data }) => {
                  return (
                    <div key={data.id} className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4 justify-content-center'>
                      <Cards
                        product={data}
                        id={_id}
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
              {products.filter(({ data }) => {
                const { price } = data;
                const num = price.replace('$', '');
                const IntNum = parseFloat(num);
                return IntNum < 7.5;
              })
                .map(({ _id, data }) => {
                  return (
                    <div key={data.id} className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4 justify-content-center'>
                      <Cards
                        product={data}
                        id={_id}
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
              {products.filter(({ data }) => {
                const { price } = data;
                const num = price.replace('$', '');
                const IntNum = parseFloat(num);
                return IntNum > 7.5;
              })
                .map(({ _id, data }) => {
                  return (
                    <div key={data.id} className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4 justify-content-center'>
                      <Cards
                        product={data}
                        id={_id}
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
