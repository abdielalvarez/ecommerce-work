import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import car from '../assets/static/car.png';
import create from '../assets/static/create.png';
import Navbar from '../components/Navbar';
import HorizontalCards from '../components/HorizontalCards';
import AliasDirection from '../components/AliasDirection';
import '../assets/styles/containers/ShoppingCart.scss';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createDirectionIsOpen: false,
    };
  }

  toggleCreateDirection() {
    this.setState({
      createDirectionIsOpen: !this.state.createDirectionIsOpen,
    });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className='container-fluid'>
          <div className='row mt-3'>
            <div className='col-12 d-flex'>
              <img src={car} alt='car' />
              <h4 className='color makeCenter'>CARRITO DE COMPRA</h4>
            </div>
          </div>
          <div className='color row text-center mt-4 mb-3'>
            <div className='col-1 offset-2'>Imagen</div>
            <div className='col-2 offset-1'>Nombre</div>
            <div className='col-2'>Precio Unitario</div>
            <div className='col-2'>Cantidad</div>
            <div className='col-2'>Total</div>
          </div>
          <HorizontalCards />
          <HorizontalCards />
          <div className='row mt-4 mb-3'>
            <div className='col-2 offset-10 text-left'>SUBTOTAL: $100.00</div>
          </div>
          {/* ATRÁS Y ADELANTE */}
          <div className='row makeDistance'>
            <div className='col-2'>
              <button
                type='submit'
                className='back rounded-pill'
              >
                Añadir a carrito más productos
              </button>
            </div>
            <div className='buy col-2 offset-8'>
              <button
                type='submit'
                className='forward rounded-pill'
                onClick={this.toggleCreateDirection.bind(this)}
              >
                COMPRAR
              </button>
            </div>
          </div>
        </div>

        {/* MODAL FOR CREATE DIRECTION */}
        {/* <Modal isOpen={this.state.createDirectionIsOpen} toggle={this.toggleCreateDirection.bind(this)}> */}
        <Modal isOpen='true' toggle={this.toggleCreateDirection.bind(this)}>
          <ModalHeader toggle={this.toggleCreateDirection.bind(this)}>
            <div className='container'>
              <h3 className='modalTitle'>
                Selecciona tu dirección hacia donde deseas que sea enviado tu paquete o si desea borrar alguna dirección puede realizarlo con el botón de borrado.
              </h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-4'>
                  <Link to='/createDirectionAlias' className='textDecoration'>
                    <div className='row buttonColor'>
                      <div className='col-4 pl-0 pr-0'>
                        <img src={create} className='makeBigger' alt='createDirectionAlias' />
                      </div>
                      <div className='col-8 text-center d-flex justify-content-center align-items-center'>
                        <h6 className='mb-0 titleColor'>CREAR DIRECCIÓN</h6>
                      </div>
                    </div>
                  </Link>
                </div>
                <AliasDirection />
                <AliasDirection />
                <AliasDirection />
              </div>
            </div>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default ShoppingCart;
