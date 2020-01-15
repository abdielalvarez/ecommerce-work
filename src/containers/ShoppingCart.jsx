import React, { Component } from 'react';
import HorizontalCards from '../components/HorizontalCards';
import candy from '../assets/static/candy.png';

class ShoppingCart extends Component {
  render() {
    return (
      <HorizontalCards productImage={candy} productName='DULCESITOS DE GOMA DE GUSANITO MARCA PATITO 1KG.' productPrice='20.00' />
    );
  }
}

export default ShoppingCart;
