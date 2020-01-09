import React, { Component } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Suggestions from '../components/Suggestions';
import Footer from '../components/Footer';

class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <Navbar />
                <Carousel />
                <Suggestions />
                <Footer />
            </>
        )
    }
}

export default Home
