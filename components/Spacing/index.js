import React, { Component } from 'react';

import { stylesLinks } from '../Styles';
import { LinkList } from '../Global/links';
import LandingStyles from '../Global/landing';

const ReactMarkdown = require('react-markdown/with-html');

const content01 = `
#### Styles
## Spacing
### The responsive spacing scale
The Design System uses a responsive spacing scale which adapts based on screen size. For example, if you apply spacing unit 9 to a margin, it will be 60px on large screens and 40px on small screens.
`;

class Spacing extends Component {
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

export default Spacing;
