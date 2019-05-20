import React, { Component } from 'react';

import { stylesLinks } from '../Styles';
import { LinkList } from '../Global/links';
import LandingStyles from '../Global/landing';

const ReactMarkdown = require('react-markdown/with-html');

const content01 = `
#### Styles
## Page template
Use this template to keep your pages consistent with the rest of Allicin.io.

This page template combines the boilerplate markup and components needed for a basic Allicin.io page. It includes:

JavaScript that adds a .js-enabled class, which is required by components with JavaScript behaviour
the skip link, header and footer components
the favicon, and other related theme icons
In the examples provided, we show both HTML and Nunjucks.

You can use the HTML examples if you are not able to use Nunjucks. If you use HTML you’ll need to update it manually when new versions are released.

If you are using Nunjucks you can get this page template by installing Allicin.io Frontend. You’ll get updates to the page template when we update Allicin.io Frontend.

Examples to follow.
`;

class PageTemplate extends Component {
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

export default PageTemplate;
