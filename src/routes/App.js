import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Filtered from '../containers/Filtered';
import ShoppingCart from '../containers/ShoppingCart';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isOpenUserIcon: false,
    };
  }

  render() {
    const { isOpenUserIcon } = this.state;
    return (
      <BrowserRouter>
        <Layout isOpenUserIcon={isOpenUserIcon}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/filtered' component={Filtered} />
            <Route exact path='/shoppingCart' component={ShoppingCart} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
