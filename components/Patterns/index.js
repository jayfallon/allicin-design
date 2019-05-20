import React, { Component } from 'react';

import { stylesLinks } from '../Styles';
import { LinkList } from '../Global/links';
import LandingStyles from '../Global/landing';

const ReactMarkdown = require('react-markdown/with-html');

const content01 = `
## Patterns
Patterns are best practice design solutions for specific user-focused tasks and page types.

We are currently working on a set of patterns to be displayed here.
`;

class Patterns extends Component {
  render() {
    return (
      <LandingStyles>
        <article className="landing__content--grid">
          <div className="landing__content">
            <ReactMarkdown source={content01} escapeHtml={false} />
          </div>
        </article>
      </LandingStyles>
    );
  }
}

export default Patterns;
