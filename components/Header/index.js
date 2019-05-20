import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import HeaderStyles from './styles';
import { PageContainer } from '../Global';

import Beta from './beta';
import AppNav from '../AppNav';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

class Header extends Component {
  render() {
    return (
      <>
        <HeaderStyles role="banner">
          <nav className="header__nav" role="navigation">
            <h1 className="logo__primary">
              <Link href="/">
                <a title="home link" className="logo__primary--link">
                  <span className="logo__primary--text">Allicin</span>
                </a>
              </Link>
              <span className="logo__title--text">Design System</span>
            </h1>
          </nav>
        </HeaderStyles>
        <Beta />
        <AppNav />
      </>
    );
  }
}

export default Header;
