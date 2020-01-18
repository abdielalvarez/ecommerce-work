import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import history from './history';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Filtered from '../containers/Filtered';

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
        <Router history={history}>
          <Layout isOpenUserIcon={isOpenUserIcon}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/filtered' component={Filtered} />
            </Switch>
          </Layout>
        </Router>
      </BrowserRouter>
    );
  }
}

export default App;
