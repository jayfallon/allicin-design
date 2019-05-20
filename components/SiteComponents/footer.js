import React, { Component } from 'react';
import Link from 'next/link';
import Gist from 'react-gist';

import { LinkList } from '../Global/links';
import LandingStyles from '../Global/landing';
import { componentsLinks } from './index';
import FooterStyles from '../Footer/styles';

const ReactMarkdown = require('react-markdown/with-html');

const content = `
#### Components 
## Footer
The footer provides copyright, licensing and other information about your service and department.
`;

const Footer = props => (
  <LandingStyles>
    <article className="landing__content--grid">
      <div className="landing__content">
        <ReactMarkdown source={content} escapeHtml={false} />
        <h3>Display</h3>
        <FooterStyles>
          <div className="footer__section">
            <div className="page__container">
              <div className="footer__meta">
                <nav role="nav" className="footer__meta--nav">
                  <ul className="footer__nav--list" id="footer__nav--list" />
                  <p className="footer__built">
                    Built by the{' '}
                    <a href="https://allicin.io">Allicin Digital Service</a>
                  </p>
                  <p className="footer__ogl">
                    All content is available under the{' '}
                    <a href="https://en.wikipedia.org/wiki/MIT_License">
                      MIT License
                    </a>
                    , except where otherwise stated
                  </p>
                </nav>
                <div className="footer__copyright" role="copyright">
                  <span> &copy;2019 Allicin copyright</span>
                </div>
              </div>
            </div>
          </div>
        </FooterStyles>
        <h3>Code</h3>
        <Gist id="e63392faf38316b6b280a3dc703f0917" />
      </div>
      <LinkList list={componentsLinks} cname="landing__menu" />
    </article>
  </LandingStyles>
);

export default Footer;
