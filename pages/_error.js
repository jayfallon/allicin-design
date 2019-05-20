import React from 'react';

import LandingStyles from '../components/Global/landing';

const ReactMarkdown = require('react-markdown/with-html');

const content01 = `
## Patterns
Patterns are best practice design solutions for specific user-focused tasks and page types.

We are currently working on a set of patterns to be displayed here.
`;

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <LandingStyles>
        <article className="landing__content--grid">
          <div className="error__content">
            <h2>Sorry!!</h2>
            <p className="error__message">
              {this.props.statusCode
                ? `A ${this.props.statusCode} error occurred on server`
                : 'An error occurred on client'}
            </p>
            <p>If you typed the web address, check it is correct.</p>
            <p>
              If you pasted the web address, check you copied the entire
              address.
            </p>
            <p>
              If you're looking for the 'page not found' pattern see page not
              found pages.
            </p>
            <p>
              Contact the Design System team if you believe you are seeing this
              message in error.
            </p>
          </div>
        </article>
      </LandingStyles>
    );
  }
}

export default Error;
