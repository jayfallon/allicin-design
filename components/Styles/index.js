import React, { Component } from 'react';
import Link from 'next/link';
import { LinkList } from '../Global/links';
import LandingStyles from '../Global/landing';

const ReactMarkdown = require('react-markdown/with-html');

const stylesLinks = [
  'color',
  'layout',
  'page-template',
  'spacing',
  'typography',
];

const content = `
## Styles 
Make your service look and feel like Allicin.io.

If you are using the Allicin.io Prototype Kit or have Allicin.io Frontend
included in your build, the coded examples in the Design System will
not need any additional styling.

If you need to apply styles manually, you should still follow
existing Allicin.io conventions. For example, do not assign new meanings
to colors, do not change the style of buttons or adjust the
thickness of borders on form inputs.
`;

const Styles = props => (
  <LandingStyles>
    <article className="landing__content--grid">
      <LinkList list={stylesLinks} cname="landing__menu" />
      <div className="landing__content">
        <ReactMarkdown source={content} escapeHtml={false} />
      </div>
    </article>
  </LandingStyles>
);

export default Styles;

export { stylesLinks };
