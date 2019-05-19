import Link from 'next/link';
import styled from 'styled-components';
import { PageContainer } from '../Global';

const SiteMenu = props => (
  <SiteMenuStyles>
    <PageContainer>
      <SiteMenuGrid>
        <SiteMenuBlock title="styles">
          Make your service look like Allicin.io with guides for applying
          layout, typography, color and images.
        </SiteMenuBlock>
        <SiteMenuBlock title="components">
          Save time with reusable, accessible components for forms, navigation,
          panels, tables and more.
        </SiteMenuBlock>
        <SiteMenuBlock title="patterns">
          Help users complete common tasks like entering names and addresses,
          filling in forms and creating accounts.
        </SiteMenuBlock>
      </SiteMenuGrid>
    </PageContainer>
  </SiteMenuStyles>
);

const SiteMenuStyles = styled.section`
  background-color: ${props => props.theme.whiteBg};
`;

const SiteMenuBlock = props => (
  <SiteMenuBlockStyles>
    <h2>{props.title}</h2>
    <p>{props.children}</p>
    <Link href="/hello">
      <a title="hello">Browse {props.title}</a>
    </Link>
  </SiteMenuBlockStyles>
);

const SiteMenuBlockStyles = styled.div`
  h2 {
    margin-bottom: 3rem;
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.25;
    text-transform: capitalize;
  }
  p {
    margin-bottom: 2rem;
    font-size: 1.8rem;
    line-height: 1.3;
  }
  a {
    font-weight: 700;
  }
`;

const SiteMenuGrid = styled.article`
  padding: 5rem 0;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(34rem, 1fr));
`;

export default SiteMenu;
