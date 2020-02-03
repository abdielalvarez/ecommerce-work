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

    handleFilter = (category, filter) => {
      axios.get(`http://localhost:3000/api/candiesByFilter/${category}/${filter}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((res) => {
          const info = res.data.data;
          const string = JSON.stringify(info);
          localStorage.removeItem('candyDataBase');
          localStorage.setItem('candyDataBase', string);
          history.push('/filtered');
          location.reload();
        });
      // .catch((err) => {
      //   this.setState({
      //     error: err,
      //   });
      // });
    }

    handleSearch = (e) => {
      const { search } = this.state;
      if (search === '') {
        axios.get('http://localhost:3000/api/candies', {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        })
          .then((res) => {
            const info = res.data.data;
            const string = JSON.stringify(info);
            localStorage.removeItem('candyDataBase');
            localStorage.setItem('candyDataBase', string);
            history.push('/filtered');
            location.reload();
          })
          .catch((err) => console.log(err));
        e.preventDefault();
      } else {
        axios.get(`http://localhost:3000/api/candiesBySearch/${search}`, {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        })
          .then((res) => {
            const info = res.data.data;
            const string = JSON.stringify(info);
            localStorage.removeItem('candyDataBase');
            localStorage.setItem('candyDataBase', string);
            history.push('/filtered');
            location.reload();
          })
          .catch((err) => console.log(err));
        e.preventDefault();
      }
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
                  <Link to='#' onClick={this.handleFilter.bind(this, 'type', 'caramelos')} className='dropdown-item'>Caramelos</Link>
                  <Link to='#' onClick={this.handleFilter.bind(this, 'type', 'picantes')} className='dropdown-item'>Picantes</Link>
                  <Link to='#' onClick={this.handleFilter.bind(this, 'type', 'chocolates')} className='dropdown-item'>Chocolates</Link>
                  <Link to='#' onClick={this.handleFilter.bind(this, 'type', 'chicles')} className='dropdown-item'>Chicles</Link>
                  <Link to='#' onClick={this.handleFilter.bind(this, 'type', 'piñateros')} className='dropdown-item'>Piñateros</Link>
                  <Link to='#' onClick={this.handleFilter.bind(this, 'type', 'gomitas')} className='dropdown-item'>Gomitas</Link>
                  <Link to='#' onClick={this.handleFilter.bind(this, 'type', 'galletas')} className='dropdown-item'>Galletas</Link>
                  <Link to='#' onClick={this.handleFilter.bind(this, 'type', 'helados')} className='dropdown-item'>Helados</Link>
                  <Link to='#' onClick={this.handleFilter.bind(this, 'type', 'paletas')} className='dropdown-item'>Paletas</Link>
                  <Link to='#' onClick={this.handleFilter.bind(this, 'type', 'rellenos')} className='dropdown-item'>Rellenos</Link>
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
                  <Link to='#' onClick={this.handleFilter.bind(this, 'characters', 'barbie')} className='dropdown-item'>Barbie</Link>
                  <Link to='#' onClick={this.handleFilter.bind(this, 'characters', 'spongeBob')} className='dropdown-item'>The SpongeBob</Link>
                  <Link to='#' onClick={this.handleFilter.bind(this, 'characters', 'powerRangers')} className='dropdown-item'>The PowerRangers</Link>
                  <Link to='#' onClick={this.handleFilter.bind(this, 'characters', 'myLittlePony')} className='dropdown-item'>My Little Pony</Link>
                  <Link to='#' onClick={this.handleFilter.bind(this, 'characters', 'toyStory')} className='dropdown-item'>Toy Story</Link>
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
                  <Link to='#' onClick={this.handleFilter.bind(this, 'publicHoliday', 'cumpleanos')} className='dropdown-item'>Cumpleaños</Link>
                  <Link to='#' onClick={this.handleFilter.bind(this, 'publicHoliday', 'navidad')} className='dropdown-item'>Navidad y Año Nuevo</Link>
                  <Link to='#' onClick={this.handleFilter.bind(this, 'publicHoliday', 'diaDelNiño')} className='dropdown-item'>Día del niño</Link>
                  <Link to='#' onClick={this.handleFilter.bind(this, 'publicHoliday', 'diaDeMuertos')} className='dropdown-item'>Día de muertos</Link>
                  <Link to='#' onClick={this.handleFilter.bind(this, 'publicHoliday', 'diaDeLasMadres')} className='dropdown-item'>Día de las madres</Link>
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

