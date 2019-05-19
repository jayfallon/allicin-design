import React, { Component } from 'react';

import Link from 'next/link';
import AppNavStyles from './styles';
import { PageContainer } from '../Global';

class AppNav extends Component {
  render() {
    return (
      <AppNavStyles>
        <nav role="nav">
          <ul className="app__nav--list">
            <li>
              <Link href="/styles">
                <a title="styles">styles</a>
              </Link>
            </li>
            <li>
              <Link href="/components">
                <a title="components">components</a>
              </Link>
            </li>
            <li>
              <Link href="/patterns">
                <a title="patterns">patterns</a>
              </Link>
            </li>
          </ul>
        </nav>
      </AppNavStyles>
    );
  }
}

export default AppNav;
