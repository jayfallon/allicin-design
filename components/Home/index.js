import React, { Component } from 'react';

import HomeStyles from './styles';
import HomeHero from './hero';
import SiteMenu from './siteMenu';
import HomeContent from './content';

class Home extends Component {
  state = {};

  render() {
    return (
      <HomeStyles>
        <HomeHero />
        <SiteMenu />
        <HomeContent />
      </HomeStyles>
    );
  }
}

export default Home;
