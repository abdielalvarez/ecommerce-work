import React, { Component } from 'react';
import '../assets/styles/components/Navbar.scss';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isOpenTypes: false,
      isOpenCharacters: false,
      isOpenDays: false,
    };
  }

    toggleOpenTypes = () => {
      this.setState({ isOpenTypes: !this.state.isOpenTypes });
      if (this.state.isOpenCharacters || this.state.isOpenDays) {
        this.setState({
          isOpenCharacters: false,
          isOpenDays: false,
        });
      }
    }

    toggleOpenCharacters = () => {
      this.setState({ isOpenCharacters: !this.state.isOpenCharacters });
      if (this.state.isOpenTypes || this.state.isOpenDays) {
        this.setState({
          isOpenTypes: false,
          isOpenDays: false,
        });
      }
    }

    toggleOpenDays = () => {
      this.setState({ isOpenDays: !this.state.isOpenDays });
      if (this.state.isOpenTypes || this.state.isOpenCharacters) {
        this.setState({
          isOpenTypes: false,
          isOpenCharacters: false,
        });
      }
    };

    render() {

      const menuClassTypes = `dropdown-menu${this.state.isOpenTypes ? ' show' : ''}`;
      const menuClassCharacters = `dropdown-menu${this.state.isOpenCharacters ? ' show' : ''}`;
      const menuClassDays = `dropdown-menu${this.state.isOpenDays ? ' show' : ''}`;

      return (
        <nav className='navbar navbar-expand'>
          <div className='text-center d-block d-md-flex container-fluid' id='navbarSupportedContent'>
            <ul className='navbar-nav d-block d-md-flex mr-auto'>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle text-white'
                  onClick={this.toggleOpenTypes}
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                                TIPOS
                </a>
                <div className={`dropdown-menu w-100 text-center text-md-left ${menuClassTypes}`} aria-labelledby='navbarDropdown'>
                  <a className='dropdown-item' href='/'>Caramelos</a>
                  <a className='dropdown-item' href='/'>Picantes</a>
                  <a className='dropdown-item' href='/'>Chocolates</a>
                  <a className='dropdown-item' href='/'>Chicles</a>
                  <a className='dropdown-item' href='/'>Piñateros</a>
                  <a className='dropdown-item' href='/'>Gomitas</a>
                  <a className='dropdown-item' href='/'>Galletas</a>
                  <a className='dropdown-item' href='/'>Helados</a>
                  <a className='dropdown-item' href='/'>Paletas</a>
                  <a className='dropdown-item' href='/'>Rellenos</a>
                </div>
              </li>

              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle text-white'
                  onClick={this.toggleOpenCharacters}
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                                PERSONAJES
                </a>
                <div
                  className={`dropdown-menu w-100 text-center text-md-left ${menuClassCharacters}`}
                  aria-labelledby='navbarDropdown'
                >
                  <a className='dropdown-item' href='/'>Barbie</a>
                  <a className='dropdown-item' href='/'>The SpongeBob</a>
                  <a className='dropdown-item' href='/'>The PowerRangers</a>
                  <a className='dropdown-item' href='/'>My Little Pony</a>
                  <a className='dropdown-item' href='/'>Toy Story</a>
                </div>
              </li>

              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle text-white'
                  onClick={this.toggleOpenDays}
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                                DÍAS FESTIVOS
                </a>
                <div
                  className={`dropdown-menu w-100 text-center text-md-left ${menuClassDays}`}
                  aria-labelledby='navbarDropdown'
                >
                  <a className='dropdown-item' href='/'>Días Festivos</a>
                  <a className='dropdown-item' href='/'>Navidad y Año Nuevo</a>
                  <a className='dropdown-item' href='/'>Día del niño</a>
                  <a className='dropdown-item' href='/'>Día de muertos</a>
                  <a className='dropdown-item' href='/'>Día de las madres</a>
                </div>
              </li>
            </ul>
            <form className='form-inline justify-content-center my-2 my-lg-0'>
              <input
                className='form-control col-10 col-md-7 mr-md-2 mb-2 mb-sm-3 mb-md-0 rounded-pill search'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline col-4 col-md-4 border-white text-white my-2 my-sm-0' type='submit'>Search</button>
            </form>
          </div>
        </nav>
      );
    }
}

export default Navbar;

