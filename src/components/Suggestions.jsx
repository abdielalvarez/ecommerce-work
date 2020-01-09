import React, { Component } from 'react';
import Cards from './Cards';
import '../assets/styles/components/Suggestions.scss';

class Suggestions extends Component {
    render() {
        return (
            <>
                <section id="speakers" className="mt-4 mb-4">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="suggestions">Lo más buscados</h4>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-6 col-lg-3 mb-4 justify-content-center">
                                <Cards 
                                    productName={'Dulces de gusanito 1kg.'}
                                    productPrice={'20.00'}
                                    counter={'1'}
                                />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mb-4 justify-content-center">
                                <Cards 
                                    productName={'Dulces de gusanito 1kg.'}
                                    productPrice={'20.00'}
                                    counter={'1'}
                                />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mb-4 justify-content-center">
                                <Cards 
                                    productName={'Dulces de gusanito 1kg.'}
                                    productPrice={'20.00'}
                                    counter={'1'}
                                />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mb-4 justify-content-center">
                                <Cards 
                                    productName={'Dulces de gusanito 1kg.'}
                                    productPrice={'20.00'}
                                    counter={'1'}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h4 className="suggestions">Los más vendidos</h4>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-6 col-lg-3 mb-4 justify-content-center">
                                <Cards 
                                    productName={'Dulces de gusanito 1kg.'}
                                    productPrice={'20.00'}
                                    counter={'1'}
                                />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mb-4 justify-content-center">
                                <Cards 
                                    productName={'Dulces de gusanito 1kg.'}
                                    productPrice={'20.00'}
                                    counter={'1'}
                                />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mb-4 justify-content-center">
                                <Cards 
                                    productName={'Dulces de gusanito 1kg.'}
                                    productPrice={'20.00'}
                                    counter={'1'}
                                />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mb-4 justify-content-center">
                                <Cards 
                                    productName={'Dulces de gusanito 1kg.'}
                                    productPrice={'20.00'}
                                    counter={'1'}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h4 className="suggestions">Nuevos</h4>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-6 col-lg-3 mb-4 justify-content-center">
                                <Cards 
                                    productName={'Dulces de gusanito 1kg.'}
                                    productPrice={'20.00'}
                                    counter={'1'}
                                />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mb-4 justify-content-center">
                                <Cards 
                                    productName={'Dulces de gusanito 1kg.'}
                                    productPrice={'20.00'}
                                    counter={'1'}
                                />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mb-4 justify-content-center">
                                <Cards 
                                    productName={'Dulces de gusanito 1kg.'}
                                    productPrice={'20.00'}
                                    counter={'1'}
                                />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mb-4 justify-content-center">
                                <Cards 
                                    productName={'Dulces de gusanito 1kg.'}
                                    productPrice={'20.00'}
                                    counter={'1'}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h4 className="suggestions">En promoción</h4>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-6 col-lg-3 mb-4 justify-content-center">
                                <Cards 
                                    productName={'Dulces de gusanito 1kg.'}
                                    productPrice={'20.00'}
                                    counter={'1'}
                                />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mb-4 justify-content-center">
                                <Cards 
                                    productName={'Dulces de gusanito 1kg.'}
                                    productPrice={'20.00'}
                                    counter={'1'}
                                />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mb-4 justify-content-center">
                                <Cards 
                                    productName={'Dulces de gusanito 1kg.'}
                                    productPrice={'20.00'}
                                    counter={'1'}
                                />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mb-4 justify-content-center">
                                <Cards 
                                    productName={'Dulces de gusanito 1kg.'}
                                    productPrice={'20.00'}
                                    counter={'1'}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Suggestions
