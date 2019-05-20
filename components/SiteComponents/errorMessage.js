import React, { Component } from 'react';
import Link from 'next/link';

import { LinkList } from '../Global/links';
import LandingStyles from '../Global/landing';
import { componentsLinks } from './index';

const ReactMarkdown = require('react-markdown/with-html');

const content = `
#### Components 
## ErrorMessage
This page comming soon. Honest.
`;

const ErrorMessage = props => (
  <LandingStyles>
    <article className="landing__content--grid">
      <div className="landing__content">
        <ReactMarkdown source={content} escapeHtml={false} />
      </div>
      <LinkList list={componentsLinks} cname="landing__menu" />
    </article>
  </LandingStyles>
);

export default ErrorMessage;
