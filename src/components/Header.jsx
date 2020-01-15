import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Email from './Email';
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
    };
  }

    toggleOpenChat = () => {
      this.setState({ isOpenUserIcon: !this.state.isOpenUserIcon });
    };

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
                  <Link className='nav-link' to='/'>
                    <img src={car} alt='shoppingCar' />
                  </Link>
                </li>
                <li className='nav-item user-item-container dropdown'>
                  <Link className='nav-link' to='/' onClick={this.toggleOpenChat}>
                    <img src={user} alt='userIcon' />
                  </Link>
                  <div className={`user-item dropdown-menu-right ${userIcon}`} aria-labelledby='navbarDropdown'>
                    <a className='item dropdown-item' href='/'>Iniciar Sesión</a>
                    <a className='item dropdown-item' href='/'>Registrarse</a>
                    <a className='item dropdown-item' href='/'>Editar tu perfil</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </header>
      );
    }
}

export default Header;
