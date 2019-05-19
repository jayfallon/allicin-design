import Link from 'next/link';
import styled from 'styled-components';

import media from '../MediaQueries';

import { PageContainer } from '../Global';

const ReactMarkdown = require('react-markdown/with-html');

const HomeContent = props => {
  const community = `The Allicin Design System is for everyone, with a strong community sitting behind it. It brings together the latest research, design and development from across the industry to make sure it’s representative and relevant for its users.
          
You can contribute to the Design System by:

* proposing a new component or pattern
* developing a component or pattern

You can also see what people are currently working on in the <a href="/community/backlog" class="govuk-link" data-hcontribute="guidelinegh">community backlog</a>.
    
    `;
  const roadmap = `
See what the Design System team is planning to work on over the coming year in the Allicin Design System Roadmap.
`;

  const support = `
The Allicin Design System is maintained by Allicin.io. If you’ve got a question, idea or suggestion you can:

* email <a href="mailto:jayfallon@gmail.com">design@allicin.io</a>
* get in touch on Slack (open in app)
`;

  const contents = [
    {
      title: 'Community',
      content: community,
    },
    {
      title: 'Support',
      content: support,
    },
    {
      title: 'Roadmap',
      content: roadmap,
    },
  ];

  const list = (
    <>
      {contents.map(item => (
        <HomeContentBlock key={item.title} title={item.title}>
          <ReactMarkdown source={item.content} escapeHtml={false} />
        </HomeContentBlock>
      ))}
    </>
  );

  return <HomeContentStyles>{list}</HomeContentStyles>;
};

const HomeContentStyles = styled(PageContainer)`
  background-color: ${props => props.theme.whiteBg};
`;

const HomeContentBlock = props => (
  <HomeContentBlockStyles>
    <h2>{props.title}</h2>
    {props.children}
  </HomeContentBlockStyles>
);

const HomeContentBlockStyles = styled.article`
  padding: 5rem 0 2rem;
  border-top: 0.1rem solid #c8cacb;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(12, 1fr);
  h2 {
    margin-bottom: 3rem;
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.25;
    text-transform: capitalize;
    grid-column: 1/13;
    ${media.brotherbear`
        grid-column: 1/9;
   `}
  }
  p {
    margin-bottom: 2rem;
    grid-column: 1/13;
    ${media.brotherbear`
        grid-column: 1/9;
   `}
  }
  ul {
    margin-bottom: 2rem;
    padding-left: 2rem;
    grid-column: 1/13;
    ${media.brotherbear`
        grid-column: 1/9;
   `}
  }
  ul li {
    list-style: disc;
  }
`;

export default HomeContent;
