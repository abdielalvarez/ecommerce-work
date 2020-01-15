import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Suggestions from '../components/Suggestions';

class Home extends Component {

  render() {

    return (
      <>
        <Navbar />
        <Carousel />
        <Suggestions />
      </>
    );
  }
}

export default Home;
