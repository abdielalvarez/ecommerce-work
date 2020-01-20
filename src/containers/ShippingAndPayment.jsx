/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniCards from '../components/MiniCards';
import estafeta from '../assets/static/estafeta.png';
import fedex from '../assets/static/fedex.png';
import paypal from '../assets/static/paypal.png';
import mercadoPago from '../assets/static/mercadoPago.png';
import tarjeta from '../assets/static/tarjeta.png';
import '../assets/styles/containers/ShippingAndPayment.scss';

class ShippingAndPayment extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-6'>
            <div className='container mt-3 mb-3'>
              <h4 className='mb-4'>INGRESE SU DIRECCIÓN</h4>
              <div className='container pl-0 pr-0'>
                <ul className='data list-group-item'>
                  <li>Teléfono o celular: 123-456-78-90 </li>
                  <li>Contacto: tester@gmail.com</li>
                  <li>
                    Dirección:
                    Juan Escutia, Ext5, Int4 , Niños Héroes , 23123,
                    Entre Calle 1 y Calle 2 , Casa Roja Duplex.
                  </li>
                </ul>
              </div>
            </div>
            <div className='container mt-3 mb-3'>
              <h4 className='mb-4'>Envío por medio de:</h4>
              <div className='form-check form-check-inline mb-3'>
                <input className='form-check-input' type='checkbox' name='inlineRadioOptions' />
                <label className='form-check-label radio' htmlFor='inlineRadio1'>
                  <img src={estafeta} alt='estafeta' />
                </label>
              </div>
              <div className='form-check form-check-inline mb-3'>
                <input className='form-check-input' type='checkbox' name='inlineRadioOptions' />
                <label className='form-check-label radio' htmlFor='inlineRadio1'>
                  <img src={fedex} alt='fedex' />
                </label>
              </div>
            </div>
            <div className='container mt-3 mb-3'>
              <h4 className='mb-4'>Método de pago:</h4>
              <div className='form-check form-check-inline mb-3'>
                <input className='form-check-input' type='checkbox' name='inlineRadioOptions' />
                <label className='form-check-label radio' htmlFor='inlineRadio1'>
                  <img src={paypal} alt='paypal' />
                </label>
              </div>
              <div className='form-check form-check-inline mb-3'>
                <input className='form-check-input' type='checkbox' name='inlineRadioOptions' />
                <label className='form-check-label radio' htmlFor='inlineRadio1'>
                  <img src={mercadoPago} alt='mercadoPago' />
                </label>
              </div>
              <div className='form-check form-check-inline mb-3'>
                <input className='form-check-input' type='checkbox' name='inlineRadioOptions' />
                <label className='form-check-label radio' htmlFor='inlineRadio1'>
                  <img src={tarjeta} alt='tarjeta' />
                </label>
              </div>
            </div>
          </div>
          <div className='col-6 mt-4'>
            <div className='container text-right'>
              <button type='submit' className='btn'>
                <h6>Consultar lista de compra</h6>
              </button>
            </div>
            <div className='container mt-5'>
              <ul className='list-group'>
                <MiniCards />
                <MiniCards />
                <MiniCards />
              </ul>
              <h6 className='text-right mt-2 mr-4 mt-4'>COSTO DE ENVÍO: $160.00</h6>
              <h6 className='text-right mt-2 mr-4'>IMPUESTOS: $160.00</h6>
              <h6 className='text-right mt-2 mr-4'>SUBTOTAL: $160.00</h6>
              <h6 className='text-right mt-2 mr-4'>TOTAL: $160.00</h6>
            </div>
          </div>
        </div>
        <div className='row makeDistance'>
          <Link to='/createDirectionAlias' className='col-3 offset-1 ml-4 pink text-center'>Regrese a la creación de su dirección</Link>
          <div className='buy col-3 offset-5 ml-10'>
            <button
              type='submit'
              className='forward rounded-pill hover'
            >
                Complete su compra
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShippingAndPayment;
