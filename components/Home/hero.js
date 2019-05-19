import styled from 'styled-components';

import media from '../MediaQueries';
import { PageContainer } from '../Global';

const HomeHero = () => (
  <HomeHeroStyles>
    <HomeHeroGrid>
      <HomeHeroHeading>
        Design your service using Allicin Design styles, components and patterns
      </HomeHeroHeading>
      <HomeHeroTextStyles>
        Use this design system to make your service consistent with Allicin
        Design. Learn from the research and experience of other service teams
        and avoid repeating work that’s already been done.
      </HomeHeroTextStyles>
    </HomeHeroGrid>
  </HomeHeroStyles>
);

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const HomeHeroStyles = styled(PageContainer)`
  background-color: ${props => props.theme.heroEndBg};
  color: ${props => props.theme.heroTextWh};
`;

const HomeHeroHeading = props => (
  <HomeHeroHeadingStyles>{props.children}</HomeHeroHeadingStyles>
);

const HomeHeroHeadingStyles = styled.h2`
  padding: 0 0 1.5rem;
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 1.25;
  grid-column: 1/8;
  grid-row: 1/2;
`;

const HomeHeroText = props => (
  <HomeHeroTextStyles>{props.children}</HomeHeroTextStyles>
);

const HomeHeroTextStyles = styled.p`
  padding-bottom: 3rem;
  font-size: 2.25rem;
  line-height: 1.3;
  grid-column: 1/9;
  grid-row: 2/3;
`;

const HomeHeroGrid = styled.article`
  padding: 2.5rem 0;
  color: #ffffff;
  ${media.brotherbear`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(12, 1fr);
   `}
`;

export default HomeHero;
