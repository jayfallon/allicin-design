import React, { Component } from 'react';
import Link from 'next/link';

import { LinkList } from '../Global/links';
import LandingStyles from '../Global/landing';

const ReactMarkdown = require('react-markdown/with-html');

const componentsLinks = [
  'button',
  'error-message',
  'fieldset',
  'footer',
  'header',
  'radios',
  'select',
  'tabs',
  'tag',
  'text-input',
  'textarea',
  'warning',
];

const content = `
#### Components 
## Header
This page comming soon. Honest.
`;

const Header = props => (
  <LandingStyles>
    <article className="landing__content--grid">
      <div className="landing__content">
        <ReactMarkdown source={content} escapeHtml={false} />
      </div>
      <LinkList list={componentsLinks} cname="landing__menu" />
    </article>
  </LandingStyles>
);

export default Header;
