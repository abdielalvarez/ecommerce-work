import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, isOpenUserIcon }) => (
  <div className='App'>
    <Header isOpenUserIcon={isOpenUserIcon} />
    {children}
    <Footer />
  </div>
);

export default Layout;
