import React, { Component } from 'react';

import { stylesLinks } from '../Styles';
import { LinkList } from '../Global/links';
import LandingStyles from '../Global/landing';

const ReactMarkdown = require('react-markdown/with-html');

const content01 = `
#### Styles
## Layout
Screen size
Design for small screens first using a single-column layout.

Never make assumptions about what devices people are using. Design for different screen sizes rather than specific devices.

The default maximum page width is 1020px, but you can make it wider if your content requires it.

Examples to follow
`;

class Layout extends Component {
  render() {
    return (
      <LandingStyles>
        <article className="landing__content--grid">
          <LinkList cname="landing__menu" list={stylesLinks} />
          <div className="landing__content">
            <ReactMarkdown source={content01} escapeHtml={false} />
          </div>
        </article>
      </LandingStyles>
    );
  }
}

export default Layout;
