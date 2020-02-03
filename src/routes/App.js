import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import history from './history';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Filtered from '../containers/Filtered';
import ProductDescription from '../containers/ProductDescription';
import ShoppingCart from '../containers/ShoppingCart';
import CreateDirectionAlias from '../containers/CreateDirectionAlias';
import ShippingAndPayment from '../containers/ShippingAndPayment';
import Wrong from '../containers/Wrong';
import Right from '../containers/Right';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpenUserIcon: false,
    };
  }

  render() {
    const { isOpenUserIcon } = this.state;
    // console.log(this.props);
    return (
      <BrowserRouter forceRefresh={true}>
        <Router history={history}>
          <Layout isOpenUserIcon={isOpenUserIcon}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/filtered' component={Filtered} />
              <Route exact path='/productDescription' component={ProductDescription} />
              <Route exact path='/shoppingCart' component={ShoppingCart} />
              <Route exact path='/createDirectionAlias' component={CreateDirectionAlias} />
              <Route exact path='/shippingAndPayment' component={ShippingAndPayment} />
              <Route exact path='/wrong' component={Wrong} />
              <Route exact path='/right' component={Right} />
            </Switch>
          </Layout>
        </Router>
      </BrowserRouter>
    );
  }
}

export default App;
