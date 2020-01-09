import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import email from '../assets/static/email.png';
import car from '../assets/static/car.png';
import user from '../assets/static/user.png';
import logo from '../assets/static/logo-dummy.png';
import '../assets/styles/components/Header.scss';

class Header extends Component {
    render() {
        return (
            <header id="header" className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <img src={email} />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <img src={car} />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <img src={user} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
