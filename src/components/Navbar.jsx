import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import history from '../routes/history';
import '../assets/styles/components/Navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenTypes: false,
      isOpenCharacters: false,
      isOpenDays: false,
      search: '',
    };
    this.handleChange = this.handleChange.bind(this);
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

    handleChange = (e) => {
      this.setState({
        search: e.target.value,
      });
    }

    handleFilter = (paramater) => {
      // CHECAR HANDLE FILTER Y HANDLESEARCH SI ES CORRECTA A LÓGICA AL HABER TERMINADO EL BACKEND

      // if (!localStorage.getItem('categoryData')) {
      //   axios.get(`http://localhost:3000/candy/?:${paramater}`, {
      //     headers: {
      //       'Access-Control-Allow-Origin': '*',
      //     },
      //   })
      //     .then((res) => {
      //       const info = res.data;
      //       const string = JSON.stringify(info);
      //       localStorage.setItem('categoryData', string);
      //     })
      //     .catch((err) => {
      //       this.setState({
      //         error: err,
      //       });
      //     });
      // } else {
      //   const local = localStorage.getItem('categoryData');
      //   const parsed = JSON.parse(local);
      //   this.setState({
      //     products: parsed,
      //   });
      // }
      axios.get(`http://localhost:3000/candy/?:${paramater}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((res) => {
          const info = res.data;
          // console.log(info);
          const string = JSON.stringify(info);
          if (!localStorage.getItem('categoryData')) {
            localStorage.setItem('categoryData', string);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    handleSearch = (e) => {
      const { search } = this.state;
      axios.get(`http://localhost:3000/candy/?:${search}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((res) => {
          // console.log(res);
          history.push('/filtered');
        })
        .catch((err) => console.log(err));
      e.preventDefault();
    }

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
                  <Link to='/filtered' onClick={this.handleFilter.bind(this, 'caramelos')} className='dropdown-item'>Caramelos</Link>
                  <Link to='/filtered' onClick={this.handleFilter.bind(this, 'picantes')} className='dropdown-item'>Picantes</Link>
                  <Link to='/filtered' onClick={this.handleFilter.bind(this, 'chocolates')} className='dropdown-item'>Chocolates</Link>
                  <Link to='/filtered' onClick={this.handleFilter.bind(this, 'chicles')} className='dropdown-item'>Chicles</Link>
                  <Link to='/filtered' onClick={this.handleFilter.bind(this, 'piñateros')} className='dropdown-item'>Piñateros</Link>
                  <Link to='/filtered' onClick={this.handleFilter.bind(this, 'gomitas')} className='dropdown-item'>Gomitas</Link>
                  <Link to='/filtered' onClick={this.handleFilter.bind(this, 'galletas')} className='dropdown-item'>Galletas</Link>
                  <Link to='/filtered' onClick={this.handleFilter.bind(this, 'helados')} className='dropdown-item'>Helados</Link>
                  <Link to='/filtered' onClick={this.handleFilter.bind(this, 'paletas')} className='dropdown-item'>Paletas</Link>
                  <Link to='/filtered' onClick={this.handleFilter.bind(this, 'rellenos')} className='dropdown-item'>Rellenos</Link>
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
                  <Link to='/filtered' onClick={this.handleFilter.bind(this, 'barbie')} className='dropdown-item'>Barbie</Link>
                  <Link to='/filtered' onClick={this.handleFilter.bind(this, 'spongeBob')} className='dropdown-item'>The SpongeBob</Link>
                  <Link to='/filtered' onClick={this.handleFilter.bind(this, 'powerRangers')} className='dropdown-item'>The PowerRangers</Link>
                  <Link to='/filtered' onClick={this.handleFilter.bind(this, 'myLittlePony')} className='dropdown-item'>My Little Pony</Link>
                  <Link to='/filtered' onClick={this.handleFilter.bind(this, 'toyStory')} className='dropdown-item'>Toy Story</Link>
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
                  <Link to='/filtered' onClick={this.handleFilter.bind(this, 'cumpleanos')} className='dropdown-item'>Cumpleaños</Link>
                  <Link to='/filtered' onClick={this.handleFilter.bind(this, 'navidad')} className='dropdown-item'>Navidad y Año Nuevo</Link>
                  <Link to='/filtered' onClick={this.handleFilter.bind(this, 'diaDelNiño')} className='dropdown-item'>Día del niño</Link>
                  <Link to='/filtered' onClick={this.handleFilter.bind(this, 'diaDeMuertos')} className='dropdown-item'>Día de muertos</Link>
                  <Link to='/filtered' onClick={this.handleFilter.bind(this, 'diaDeLasMadres')} className='dropdown-item'>Día de las madres</Link>
                </div>
              </li>
            </ul>
            <form onSubmit={this.handleSearch} className='form-inline justify-content-center my-2 my-lg-0'>
              <input
                className='form-control col-10 col-md-7 mr-md-2 mb-2 mb-sm-3 mb-md-0 rounded-pill search'
                type='search'
                onChange={this.handleChange}
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

