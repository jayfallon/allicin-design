import React, { Component } from 'react';

import { stylesLinks } from '../Styles';
import { LinkList } from '../Global/links';
import LandingStyles from '../Global/landing';
import {
  Colors,
  TextColors,
  LinkColors,
  BorderColors,
  FocusColors,
  ErrorColors,
  BrandColors,
  PaletteColors,
} from '../Theme';

import { ColorListStyles } from './styles';

const ReactMarkdown = require('react-markdown/with-html');

const ColorList = props => (
  <>
    <h5>{props.title}</h5>
    {props.list.map(function(item, i) {
      return (
        <ul key={i} className="color__list--grid">
          <li style={{ background: item.hex }} />
          <li>{item.name}</li>
          <li>{item.hex}</li>
          <li>{item.purpose}</li>
        </ul>
      );
    })}
  </>
);

const content01 = `
#### Styles
## Color
Always use the Allicin color palette.

### Color contrast
You must make sure that the contrast ratio of text and interactive elements in your service meets level AA of the Web Content Accessibility Guidelines (WCAG 2.0).

### Main colors
If you are using Allicin Frontend or the Allicin Prototype Kit, use the Sass variables provided rather than copying the hexadecimal (hex) color values. For example, use $Allicin-brand-color rather than #005ea5. This means that your service will always use the most recent color palette whenever you update.

Only use the variables in the context they’re designed for. In all other cases, you should reference the color palette directly. For example, if you wanted to use red to represent some data in a graph you should use Allicin-color("red") rather than $Allicin-error-color.
`;

const content02 = `
### color palette
Use these colors for graphs and supporting material.

To reference colors from the palette directly you should use the Allicin-color function. For example, color: Allicin-color("blue").

Avoid using the palette colors if there is a variable that is designed for your context. For example, if you are styling the error state of a component you should use the color: 
<pre>\${props => props.theme.errorText}</pre>
<br>
If you need to use tints of this palette, use either 25% or 50%.
`;

class Color extends Component {
  render() {
    return (
      <LandingStyles>
        <article className="landing__content--grid">
          <LinkList cname="landing__menu" list={stylesLinks} />
          <div className="landing__content">
            <ReactMarkdown source={content01} escapeHtml={false} />
            <ColorListStyles>
              <ColorList title="Text" list={TextColors} />
              <ColorList title="Links" list={LinkColors} />
              <ColorList title="Border" list={BorderColors} />
              <ColorList title="Focus state" list={FocusColors} />
              <ColorList title="Error state" list={ErrorColors} />
              <ColorList title="Brand color" list={BrandColors} />
            </ColorListStyles>

            <ReactMarkdown source={content02} escapeHtml={false} />
            <ColorListStyles>
              <ColorList title="" list={PaletteColors} />
            </ColorListStyles>
          </div>
        </article>
      </LandingStyles>
    );
  }
}

export default Color;
