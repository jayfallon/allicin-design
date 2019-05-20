import React, { Component } from 'react';
import Link from 'next/link';

import { LinkList } from '../Global/links';
import LandingStyles from '../Global/landing';
import { componentsLinks } from './index';

const ReactMarkdown = require('react-markdown/with-html');

const content = `
#### Components 
## Button
This page comming soon. Honest.
`;

const Button = props => (
  <LandingStyles>
    <article className="landing__content--grid">
      <div className="landing__content">
        <ReactMarkdown source={content} escapeHtml={false} />
      </div>
      <LinkList list={componentsLinks} cname="landing__menu" />
    </article>
  </LandingStyles>
);

export default Button;
