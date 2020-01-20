import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniCards from '../components/MiniCards';
import '../assets/styles/containers/CreateDirectionAlias.scss';

class CreateDirectionAlias extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-6'>
            <div className='container mt-3 mb-3'>
              <h4 className='mb-0'>INGRESE SU DIRECCIÓN</h4>
              <small className='text-danger'>Los campos * son obligatorios</small>
            </div>
            <div className='container'>
              <h4>Datos de quien recibe el pedido</h4>
              <form>
                <div className='form-group'>
                  <input
                    type='text'
                    name='receiverName'
                    className='form-control inputStyle'
                    placeholder='Nombre*'
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='receiverLastName'
                    className='form-control inputStyle'
                    placeholder='Apellido*'
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='street'
                    className='form-control inputStyle'
                    placeholder='Calle*'
                    required
                  />
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <input
                      type='text'
                      name='extNum'
                      className='form-control inputStyle'
                      placeholder='Número exterior*'
                      required
                    />
                  </div>
                  <div className='form-group col-md-6'>
                    <input
                      type='text'
                      name='intNum'
                      className='form-control inputStyle'
                      placeholder='Número interior'
                    />
                  </div>
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='postalCode'
                    className='form-control inputStyle'
                    placeholder='Código Postal*'
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='colDel'
                    className='form-control inputStyle'
                    placeholder='Colonia y/o Delegación*'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='colDel'
                    className='form-control inputStyle'
                    placeholder='Teléfono fijo o celular*'
                  />
                </div>
              </form>
              <h4 className='mb-0'>Datos adicionales</h4>
              <small>(esta información hará el proceso de entrega más sencillo para nosotros)</small>
              <form>
                <div className='form-group'>
                  <input
                    type='text'
                    name='betweenStreets'
                    className='form-control inputStyle'
                    placeholder='Entre calles'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='references'
                    className='form-control inputStyle'
                    placeholder='Referencias'
                  />
                </div>
              </form>
              <h4 className='mb-0'>Alias de tu nueva dirección</h4>
              <small>
                  Al darnos tu dirección la guardaremos con este alias para que no
                  tengas que volver a escribirla, a menos que desees enviarla a un destino no frecuente para ti.
              </small>
              <form>
                <div className='form-group'>
                  <input
                    type='text'
                    name='betweenStreets'
                    className='form-control inputStyle'
                    placeholder='Ejemplo: Casa de mi tía; Ejemplo2: Oficina de mi papá*'
                  />
                </div>
              </form>
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
              <h6 className='text-right mt-2 mr-4'>SUBTOTAL: $160.00</h6>
            </div>
          </div>
        </div>
        <div className='row makeDistance'>
          <Link to='/shoppingCart' className='col-3 offset-1 ml-4 pink'>Regrese al carrito de compra</Link>
          <div className='buy col-3 offset-5 ml-10'>
            <button
              type='submit'
              className='forward rounded-pill hover'
            >
                COMPRAR
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateDirectionAlias;
