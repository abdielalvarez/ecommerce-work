/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { firebase } from '../config/Fire';
import history from '../routes/history';
import MiniCards from '../components/MiniCards';
import estafeta from '../assets/static/estafeta.png';
import fedex from '../assets/static/fedex.png';
import paypal from '../assets/static/paypal.png';
import mercadoPago from '../assets/static/mercadoPago.png';
import tarjeta from '../assets/static/tarjeta.png';
import '../assets/styles/containers/ShippingAndPayment.scss';

class ShippingAndPayment extends Component {

  constructor() {
    super();
    this.state = {
      user: '',
      estafeta: '',
      fedex: '',
      paypal: '',
      mercadoPago: '',
      tarjeta: '',
      show: false,
      signInIsOpen: false,
      signUpIsOpen: false,
      name: '',
      lastName: '',
      email: '',
      password: '',
      samePassword: '',
      shipping: '',
      paymentMethod: '',
    };
    this.toggleSignIn = this.toggleSignIn.bind(this);
    this.toggleSignUp = this.toggleSignUp.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.showList = this.showList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.goWithoutLogin = this.goWithoutLogin.bind(this);
    this.authListener = this.authListener.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.right = this.right.bind(this);
    this.wrong = this.wrong.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  right = () => {
    history.push('/right');
  }

  wrong = () => {
    history.push('/wrong');
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  login = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        this.right();
      })
      .catch(() => {
        this.wrong();
      });
  }

  signup = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        this.right();
      })
      .catch(() => {
        this.wrong();
      });
  }

  toggleSignIn() {
    this.setState({
      signInIsOpen: !this.state.signInIsOpen,
      signUpIsOpen: false,
    });
  }

  toggleSignUp() {
    this.setState({
      signUpIsOpen: !this.state.signUpIsOpen,
      signInIsOpen: false,
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  goWithoutLogin = () => {
    history.push('/right');
  }

  subtotal = () => {
    const local = localStorage.getItem('shoppingCart');
    const parsed = JSON.parse(local);
    const mapped = parsed.map(({ data }) => {
      return data.total;
    });
    const reduced = mapped.reduce((acc, cur) => {
      const numAcc = Number(acc);
      const numCur = Number(cur);
      const sum = numAcc + numCur;
      return sum;
    });
    return reduced;
  };

  taxes = () => {
    const tax = 0.16 * this.subtotal();
    const int = tax.toFixed(2);
    return int;
  }

  handleCheck = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  }

  estafeta = () => {
    const shipping = 100;
    const int = shipping.toFixed(2);
    return int;
  }

  fedex = () => {
    const shipping = 200;
    const int = shipping.toFixed(2);
    return int;
  }

  showList = () => {
    if (!this.state.show) {
      this.setState({
        show: true,
      });
    } else {
      this.setState({
        show: false,
      });
    }
  }

  total = () => {
    const taxes = parseFloat(this.taxes());
    const subtotal = parseFloat(this.subtotal());
    const estafetaShipping = parseFloat(this.estafeta());
    const fedexShipping = parseFloat(this.fedex());
    if (this.state.estafeta) {
      const total = taxes + subtotal + estafetaShipping;
      const int = total.toFixed(2);
      return int;
    }
    if (this.state.fedex) {
      const total = taxes + subtotal + fedexShipping;
      const int = total.toFixed(2);
      return int;
    }
    if (!this.state.estafeta || !this.state.fedex) {
      const total = taxes + subtotal;
      const int = total.toFixed(2);
      return int;
    }
    return int;
  }

  render() {
    const local = localStorage.getItem('shoppingCart');
    const parsed = JSON.parse(local);
    const localAlias = localStorage.getItem('alias');
    const array = JSON.parse(localAlias);
    const aliasData = array[0];
    const { alias, cel, street, extNum, intNum, colDel, postalCode, betweenStreets, references } = aliasData;

    return (
      <>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-6'>
              <div className='container mt-3 mb-3'>
                <h4 className='mb-4'>CORROBORA TUS DATOS DE ENVÍO</h4>
                <div className='container pl-0 pr-0'>
                  <ul className='data list-group-item'>
                    <li>
                      Dirección de envío (alias):
                      {' '}
                      {alias}
                      {' '}
                    </li>
                    <li>
                      Teléfono o celular:
                      {' '}
                      {cel}
                      {' '}
                    </li>
                    <li>
                      Dirección:
                      {' '}
                      {street}
                      ,
                      {' '}
                      {extNum}
                      ,
                      {' '}
                      {intNum}
                      ,
                      {' '}
                      {colDel}
                      ,
                      {' '}
                      {postalCode}
                      ,
                      {' '}
                      {betweenStreets}
                      ,
                      {' '}
                      {references}
                      .
                    </li>
                  </ul>
                </div>
              </div>
              <div className='container mt-3 mb-3'>
                <h4 className='mb-4'>Envío por medio de:</h4>
                {!this.state.shipping ?
                  <p className='text-danger'>Ingresa algún método de envío</p> :
                  null}
                <div className='form-check form-check-inline mb-3'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name='estafeta'
                    onChange={this.handleCheck}
                  />
                  <label
                    className='form-check-label radio'
                    htmlFor='inlineRadio1'
                  >
                    <img src={estafeta} alt='estafeta' />
                  </label>
                </div>
                <div className='form-check form-check-inline mb-3'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name='fedex'
                    onChange={this.handleCheck}
                  />
                  <label
                    className='form-check-label radio'
                    htmlFor='inlineRadio1'
                  >
                    <img src={fedex} alt='fedex' />
                  </label>
                </div>
              </div>
              <div className='container mt-3 mb-3'>
                <h4 className='mb-4'>Método de pago:</h4>
                {!this.state.paymentMethod ?
                  <p className='text-danger'>Ingresa algún método de pago</p> :
                  null}
                <div className='form-check form-check-inline mb-3'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name='paypal'
                    onChange={this.handleCheck}
                  />
                  <label
                    className='form-check-label radio'
                    htmlFor='inlineRadio1'
                  >
                    <img src={paypal} alt='paypal' />
                  </label>
                </div>
                <div className='form-check form-check-inline mb-3'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name='mercadoPago'
                    onChange={this.handleCheck}
                  />
                  <label
                    className='form-check-label radio'
                    htmlFor='inlineRadio1'
                  >
                    <img src={mercadoPago} alt='mercadoPago' />
                  </label>
                </div>
                <div className='form-check form-check-inline mb-3'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name='tarjeta'
                    onChange={this.handleCheck}
                  />
                  <label
                    className='form-check-label radio'
                    htmlFor='inlineRadio1'
                  >
                    <img src={tarjeta} alt='tarjeta' />
                  </label>
                </div>
              </div>
            </div>
            <div className='col-6 mt-4'>
              {!this.state.show ? (
                <div className='container text-right'>
                  <button type='submit' className='btn' onClick={this.showList}>
                    <h6>Consultar lista de compra</h6>
                  </button>
                </div>
              ) : (
                <div className='container text-right'>
                  <button type='submit' className='btn' onClick={this.showList}>
                    <h6>Ocultar lista de compra</h6>
                  </button>
                </div>
              )}
              {!this.state.show ? <></> : (
                <div className='container mt-5'>
                  <ul className='list-group'>
                    {parsed.map(({ _id, data }) => {
                      const { images, name, total } = data;
                      return <MiniCards image={images} name={name} total={total} key={_id} />;
                    })}
                  </ul>
                  {this.state.estafeta ? (
                    <h6 className='text-right mt-2 mr-4 mt-4'>
                      COSTO DE ENVÍO: $
                      {this.estafeta()}
                    </h6>
                  ) : this.state.fedex ? (
                    <h6 className='text-right mt-2 mr-4 mt-4'>
                      COSTO DE ENVÍO: $
                      {this.fedex()}
                    </h6>
                  ) :
                    (
                      <h6 className='text-right mt-2 mr-4 mt-4'>
                        COSTO DE ENVÍO: $
                        {0}
                        .00
                      </h6>
                    )}
                  <h6 className='text-right mt-2 mr-4'>
                    IMPUESTOS: $
                    {this.taxes()}
                  </h6>
                  <h6 className='text-right mt-2 mr-4'>
                    SUBTOTAL: $
                    {this.subtotal()}
                  </h6>
                  <h6 className='text-right mt-2 mr-4'>
                    TOTAL: $
                    {this.total()}
                  </h6>
                </div>
              )}
            </div>
          </div>
          <div className='row makeDistance'>
            <Link to='/createDirectionAlias' className='col-3 offset-1 ml-4 pink text-center'>Regrese a la creación de su dirección</Link>
            <div className='buy col-3 offset-5 ml-10'>
              {!localStorage.getItem('user') ? (
                <button
                  type='submit'
                  className='forward rounded-pill hover'
                  onClick={this.toggleSignIn}
                >
                    Complete su compra
                </button>
              ) : (
                <button
                  type='submit'
                  className='forward rounded-pill hover'
                  onClick={this.goWithoutLogin}
                >
                    Complete su compra
                </button>
              )}
            </div>
          </div>
        </div>

        {/* MODAL FOR LOGIN */}

        <Modal isOpen={this.state.signInIsOpen} toggle={this.toggleSignIn}>
          {/* <Modal isOpen='true' toggle={this.toggleSignIn.bind(this)}> */}
          <ModalHeader toggle={this.toggleSignIn}>
            <div className='container'>
              <h3>Inicia sesión</h3>
              <small className='text-muted'>Ingresa tu correo y contraseña para iniciar sesión</small>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className='container'>
              <form onSubmit={this.login}>
                <div className='form-group'>
                  <input
                    name='email'
                    type='email'
                    onChange={this.handleChange}
                    className='form-control'
                    id='inputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Correo Electrónico'
                    required
                  />
                  <small id='emailHelp' className='form-text text-muted'>Nunca compartiremos su email a otro usuario</small>
                </div>
                <div className='form-group'>
                  <input
                    name='password'
                    type='password'
                    onChange={this.handleChange}
                    className='form-control'
                    id='inputPassword1'
                    placeholder='Contraseña'
                    required
                  />
                </div>
                <button
                  id='sign-in'
                  type='submit'
                  className='btn btn-block'
                  onClick={this.toggleSignIn}
                >
                      INICIAR SESIÓN
                </button>
                {/* <button id='sign-google' type='submit' className='btn btn-block'>ENTRAR CON GOOGLE</button> */}
                <small id='link-sign-up' className='form-text text-muted'>
                  ¿Aún no tienes cuenta?
                  {' '}
                  <a href='#' onClick={this.toggleSignUp}>Regístrate</a>
                  {' '}
                </small>
              </form>
            </div>
          </ModalBody>
        </Modal>

        {/* MODAL FOR SIGN UP */}

        <Modal isOpen={this.state.signUpIsOpen} toggle={this.toggleSignUp}>
          <ModalHeader toggle={this.toggleSignUp}>
            <div className='container'>
              <h3>Crea tu cuenta en Beauty Box</h3>
              <small className='text-muted'>Llena los datos solicitados para crear tu cuenta en Beauty Box</small>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className='container'>
              <form onSubmit={this.signup}>
                <div className='form-group'>
                  <input
                    type='text'
                    name='name'
                    onChange={this.handleChange}
                    className='form-control'
                    aria-describedby='emailHelp'
                    placeholder='Nombre'
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='lastName'
                    onChange={this.handleChange}
                    className='form-control'
                    aria-describedby='emailHelp'
                    placeholder='Apellido Paterno'
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    name='email'
                    onChange={this.handleChange}
                    className='form-control'
                    placeholder='Correo Electrónico'
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    name='password'
                    onChange={this.handleChange}
                    className='form-control'
                    placeholder='Contraseña'
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    name='samePassword'
                    onChange={this.handleChange}
                    className='form-control'
                    placeholder='Confirmar contraseña'
                    required
                  />
                </div>
                <button
                  id='sign-in'
                  type='submit'
                  className='btn btn-block'
                  onClick={this.toggleSignUp}
                >
                    CREAR CUENTA
                </button>
                <small id='link-sign-up' className='form-text text-muted'>
¿Ya tienes cuenta?
                  {' '}
                  <a href='#' onClick={this.toggleSignIn}>Inicia sesión</a>
                  {' '}
                </small>
              </form>
            </div>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default ShippingAndPayment;
