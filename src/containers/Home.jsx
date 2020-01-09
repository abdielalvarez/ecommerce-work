import React, { Component } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';

class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <Navbar />
                <Carousel />
            </>
        )
    }
}

export default Home
