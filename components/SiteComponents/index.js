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
## Components 
Components are reusable parts of the user interface that have been made to support a variety of applications.

Individual components can be used in multiple different patterns and contexts. For example, the text input component can be used to ask for an email address, a National Insurance number or someone’s name.

If you are using the Allicin.io Prototype Kit or have Allicin.io Frontend included in your build, the coded examples provided will render exactly as they do inside the Design System.
`;

const Components = props => (
  <LandingStyles>
    <article className="landing__content--grid">
      <div className="landing__content">
        <ReactMarkdown source={content} escapeHtml={false} />
      </div>
      <LinkList list={componentsLinks} cname="landing__menu" />
    </article>
  </LandingStyles>
);

export default Components;

export { componentsLinks };
