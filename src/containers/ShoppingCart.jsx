import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import history from '../routes/history';
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

  keepAddingToCart = () => {
    history.push('/');
    location.reload();
  }

  refresh = () => {
    location.reload();
  }

  subtotal = () => {
    const local = localStorage.getItem('shoppingCart');
    const parsed = JSON.parse(local);
    const mapped = parsed.map((item) => {
      if (item.total === undefined) {
        return 0;
      }
      return item.total;
    });
    const reduced = mapped.reduce((acc, cur) => {
      const sum = acc + cur;
      return sum;
    });
    const int = reduced.toFixed(2);
    return int;
  };

  render() {
    const local = localStorage.getItem('shoppingCart');
    const parsed = JSON.parse(local);
    const addresses = localStorage.getItem('addressAlias');
    const alias = JSON.parse(addresses);

    return (
      <>
        <Navbar />
        <div className='container-fluid'>
          <div className='row mt-3'>
            <div className='col-12 d-flex'>
              <img src={car} alt='car' style={{ 'cursor': 'pointer' }} onClick={this.refresh.bind(this)} />
              <h4 className='color makeCenter' onClick={this.refresh.bind(this)}>CARRITO DE COMPRA</h4>
            </div>
          </div>
          {localStorage.getItem('shoppingCart') ? (
            <div className='color row text-center mt-4 mb-3' style={{ 'color': '#484242' }}>
              <div className='col-1 offset-2'>Imagen</div>
              <div className='col-2 offset-1'>Nombre</div>
              <div className='col-2'>Precio Unitario</div>
              <div className='col-2'>Cantidad</div>
              <div className='col-2'>Total</div>
            </div>
          ) :
            <></>}
          {localStorage.getItem('shoppingCart') ? parsed.map((data) => {
            const { images, name, price, _id, count, id } = data;
            return <HorizontalCards images={images} name={name} price={price} _id={_id} counter={count} key={id} />;
          }) : <h1 className='text-center'>No hay nada en tu carrito</h1>}
          {!localStorage.getItem('shoppingCart') ? (
            <div className='row makeDistance'>
              <div className='col-2 offset-5'>
                <button
                  type='submit'
                  className='back rounded-pill'
                  onClick={this.keepAddingToCart.bind(this)}
                >
                  Añadir a carrito más productos
                </button>
              </div>
            </div>
          ) :
            (
              <>
                <div className='row mt-4 mb-3'>
                  <div className='col-2 offset-10 text-left'>
                    SUBTOTAL:
                    $
                    {this.subtotal()}
                    <br />
                    <small style={{ 'cursor': 'pointer', 'lineHeight': '1px' }} onClick={this.refresh.bind(this)}>
                      TOCA AQUÍ para actualizar tu subtotal como precaución antes de comprar.
                    </small>
                  </div>
                </div>
                <div className='row makeDistance'>
                  <div className='col-2'>
                    <button
                      type='submit'
                      className='back rounded-pill'
                      onClick={this.keepAddingToCart.bind(this)}
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
              </>
            )}
        </div>

        {/* MODAL FOR CREATE DIRECTION */}
        <Modal isOpen={this.state.createDirectionIsOpen} toggle={this.toggleCreateDirection.bind(this)}>
          {/* <Modal isOpen='true' toggle={this.toggleCreateDirection.bind(this)}> */}
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
                {!localStorage.getItem('addressAlias') ? <></> : alias.map((item) => {
                  const { alias } = item;
                  return <AliasDirection alias={alias} />;
                })}
              </div>
            </div>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default ShoppingCart;
