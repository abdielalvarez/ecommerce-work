/* eslint-disable indent */
import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import email from '../assets/static/email.png';
import car from '../assets/static/car.png';
import user from '../assets/static/user.png';
import logo from '../assets/static/logo-dummy.png';
import '../assets/styles/components/Header.scss';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpenUserIcon: this.props.isOpenUserIcon,
      signInIsOpen: false,
      signUpIsOpen: false,
      name: '',
      lastName: '',
      email: '',
      password: '',
      samePassword: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.registerHandleSubmit = this.registerHandleSubmit.bind(this);
  }

    toggleOpenChat = () => {
      this.setState({
        isOpenUserIcon: !this.state.isOpenUserIcon
      });
    };

    toggleSignIn() {
      this.setState({
        signInIsOpen: !this.state.signInIsOpen,
        signUpIsOpen: false,
        isOpenUserIcon: false,
      });
    }

    toggleSignUp() {
      this.setState({
        signUpIsOpen: !this.state.signUpIsOpen,
        signInIsOpen: false,
        isOpenUserIcon: false,
      });
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }

    registerHandleSubmit = (e) => {
      delete this.state.isOpenUserIcon;
      delete this.state.signInIsOpen;
      delete this.state.signUpIsOpen;
      console.log(this.state);
      if (this.state.password !== this.state.samePassword) {
        e.preventDefault();
        throw new Error(
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Asegúrate de escribir la misma contraseña las 2 veces solicitadas',
          }),
          this.setState({
            signUpIsOpen: true,
          }),
        );
      }
      delete this.state.samePassword;
      axios.post(
        'http://localhost:3000/api/auth/sign-up',
        this.state,
      )
        .then((res) => {
          console.log(res);
          Swal.fire({
            icon: 'success',
            title: 'Excelente',
            text: `${res.data.data.data.name}, has creado exitosamente tu cuenta de Beauty Box`,
          });
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La Api dataBase.json no está levantada',
          });
          this.setState({
            signUpIsOpen: true,
          });
        });
      e.preventDefault();
    }

    loginHandleSubmit = (e) => {
      delete this.state.name;
      delete this.state.lastName;
      delete this.state.isOpenUserIcon;
      delete this.state.signInIsOpen;
      delete this.state.signUpIsOpen;
      delete this.state.samePassword;
      this.state['apiKeyToken'] = '66de985b5718ba69226b041c28bcf706964756db41a98640da6c838e7043aba3';
      const { email, password, apiKeyToken } = this.state;
      const token = Buffer.from(`${email}:${password}`, 'utf-8').toString('base64');
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/auth/sign-in',
        data: {
          apiKeyToken,
        },
        headers: {
          'Authorization': `basic ${token}`,
        },
      })
        .then((data) => {
          console.log(data);
          Swal.fire({
            icon: 'success',
            title: 'Excelente',
            text: 'Has iniciado tu sesión exitosamente',
          });
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La Api dataBase.json no está levantada',
          });
        });
      e.preventDefault();
    }

    render() {
      const userIcon = `dropdown-menu${this.state.isOpenUserIcon ? ' show' : ''}`;
      return (
        <header id='header' className='navbar navbar-expand'>
          <div className='text-center d-block d-sm-flex container-fluid'>
            <Link className='navbar-brand' to='/'>
              <img src={logo} alt='logo' />
            </Link>
            <div className='collapse navbar-collapse justify-content-center' id='navbarResponsive'>
              <ul className='navbar-nav ml-0 ml-sm-auto text-center'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/'>
                    <img src={email} alt='sendEmail' />
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/shoppingCart'>
                    <img src={car} alt='shoppingCar' />
                  </Link>
                </li>
                <li className='nav-item user-item-container dropdown'>
                  <a className='nav-link' href='#' onClick={this.toggleOpenChat}>
                    <img src={user} alt='userIcon' />
                  </a>
                  <div className={`user-item dropdown-menu-right ${userIcon}`} aria-labelledby='navbarDropdown'>
                    <a className='item dropdown-item' onClick={this.toggleSignIn.bind(this)} href='#'>Iniciar Sesión</a>
                    <a className='item dropdown-item' onClick={this.toggleSignUp.bind(this)} href='#'>Registrarse</a>
                    <a className='item dropdown-item' href='/'>Editar tu perfil</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* MODAL FOR LOGIN */}

          {/* <Modal isOpen={this.state.signInIsOpen} toggle={this.toggleSignIn.bind(this)}> */}
          <Modal isOpen='true' toggle={this.toggleSignIn.bind(this)}>
            <ModalHeader toggle={this.toggleSignIn.bind(this)}>
              <div className='container'>
                <h3>Inicia sesión</h3>
                <small className='text-muted'>Ingresa tu correo y contraseña para iniciar sesión</small>
              </div>
            </ModalHeader>
            <ModalBody>
              <div className='container'>
                <form onSubmit={this.loginHandleSubmit}>
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
                    onClick={this.toggleSignIn.bind(this)}
                  >
                      INICIAR SESIÓN
                  </button>
                  <button id='sign-google' type='submit' className='btn btn-block'>ENTRAR CON GOOGLE</button>
                  <small id='link-sign-up' className='form-text text-muted'>¿Aún no tienes cuenta? <a href='#' onClick={this.toggleSignUp.bind(this)}>Regístrate</a> </small>
                </form>
              </div>
            </ModalBody>
          </Modal>

          {/* MODAL FOR SIGN UP */}

          <Modal isOpen={this.state.signUpIsOpen} toggle={this.toggleSignUp.bind(this)}>
            <ModalHeader toggle={this.toggleSignUp.bind(this)}>
              <div className='container'>
                <h3>Crea tu cuenta en Beauty Box</h3>
                <small className='text-muted'>Llena los datos solicitados para crear tu cuenta en Beauty Box</small>
              </div>
            </ModalHeader>
            <ModalBody>
              <div className='container'>
                <form onSubmit={this.registerHandleSubmit}>
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
                    onClick={this.toggleSignUp.bind(this)}
                  >
                    CREAR CUENTA
                  </button>
                  <small id='link-sign-up' className='form-text text-muted'>¿Ya tienes cuenta? <a href='#' onClick={this.toggleSignIn.bind(this)}>Inicia sesión</a> </small>
                </form>
              </div>
            </ModalBody>
          </Modal>

        </header>
      );
    }
}

export default Header;
