import React, { Component } from 'react';

import { stylesLinks } from '../Styles';
import { LinkList } from '../Global/links';
import LandingStyles from '../Global/landing';

const ReactMarkdown = require('react-markdown/with-html');

const content01 = `
#### Styles
## Typography
### Font
If your service is on any Allicin.io subdomain you must use the Roboto font.

You should use an alternative typeface like Helvetica or Arial for services that are publicly available on different domains.

If you’re not sure whether you should be using Roboto, read the Service Manual guide on making your service look like Allicin.io or contact the Design System team.

### Headings
Use headings consistently to create a clear hierarchy throughout your service.

Markup headings semantically using the appropriate <h#> level HTML element and use the corresponding heading class to apply the Allicin.io styling.

Write all headings in sentence case.

### Headings with captions

Sometimes you may need to make it clear that a heading is part of a larger section or group. To do this, you can use a heading with a caption.

If the caption should be considered part of the page heading, you can also nest the caption within the H1.

### Paragraphs
##### Body
The default paragraph font size is 19px on large screens and 16px on small screens.

You can also add classes to create a lead paragraph or smaller body copy to convey hierarchy in your page.

##### Lead paragraph
A lead paragraph is an introductory paragraph that you can use at the top of a page to summarise the content. Lead paragraphs use 24px type on desktop and should only be used once per page if needed.

##### Body small
You can use the allicin-body-s class sparingly to make your paragraph font size smaller: 16px on larger screens and 14px on smaller screens.

The majority of your body copy should use the standard 19px paragraph size.

### Font override classes
You might need to set the font size or font weight of an element outside of the predefined heading and paragraph classes. For this you can use the font override classes in your HTML or reference the typography mixins in your own components.

##### Font size
The full Allicin.io typography scale goes from 14px up to 80px on large screens. You can add these font size override classes to any other typographic class or element and they will change the font size.

##### Font weight
As with the font size, you can add a font weight override class to any other typographic class or element to change the font weight to regular or bold weight.

##### Bold text
You can use bold to emphasise particular words in a transaction. Use it to highlight critical information that users need to refer to or you’ve seen them miss.

For example, “Your reference number is ABC12345678. Use this to track your application. Updates will be sent to this.person@email.com“

Use bold sparingly. Overuse will make it difficult for users to know which parts of your content they need to pay the most attention to.

### Links
Links are blue and underlined by default. If your link is at the end of a sentence or paragraph, make sure that the linked text does not include the full stop.

Use the allicin-link--no-visited-state modifier class where it is not helpful to distinguish between visited and unvisited states, for example when linking to pages with frequently-changing content such as the dashboard for an admin interface.

### Lists
Use lists to make blocks of text easier to read, and to break information into manageable chunks.

##### Bulleted lists
Introduce bulleted lists with a lead-in line ending in a colon. Start each item with a lowercase letter, and do not use a full stop at the end.

##### Numbered lists
Use numbered lists instead of bulleted lists when the order of the items is relevant.

You do not need to use a lead-in line for numbered lists. Items in a numbered list should end in a full stop because each should be a complete sentence.

### Section break
You can use the allicin-section-break classes on an <hr> element to create a thematic break between sections of content. allicin-section-break has class-based modifiers for different size margins.

By default allicin-section-break is only visible by its margin. You can add the allicin-section-break--visible class to make it visible with a separator line.
`;

class Typography extends Component {
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

export default Typography;
