import styled from 'styled-components';
import media from '../MediaQueries';

const LandingStyles = styled.section`
  margin: 0 auto;
  padding: 0 2rem;

  ${media.brotherbear`
    padding-left: calc(50vw - 512px - 20px);
    padding-right: calc(50vw - 512px - 20px);
  `}
  article.landing__content--grid {
    padding: 3rem 0;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(12, 1fr);
  }

  ul.landing__menu {
    grid-column: 1/4;
  }

  ul.landing__menu li {
    margin-bottom: 2rem;
    font-size: 1.6rem;
  }

  ul.landing__menu a {
    padding: 8px 30px 8px 10px;
    border-left: 4px solid transparent;
    font-size: 1.6rem;
    text-decoration: none;
    text-transform: capitalize;
  }

  ul.landing__menu a:hover {
    border-left-color: #2b8cc4;
  }

  ul.landing__menu a:focus {
    background-color: transparent;
    color: #0b0c0c;
  }

  div.landing__content {
    grid-column: 4/13;
  }

  div.landing__content h2 {
    margin-bottom: 5rem;
    font-size: 4rem;
    font-weight: 700;
    line-height: 1;
  }

  div.landing__content h3 {
    margin-bottom: 2rem;
    font-size: 3rem;
    font-weight: 700;
    line-height: 1;
  }

  div.landing__content h4 {
    margin-bottom: 2rem;
    color: #6f777b;
    font-size: 2.4rem;
    line-height: 1.25;
  }

  div.landing__content h5 {
    margin: 3rem 0 1.75rem 0;
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 1.25;
  }

  div.landing__content p {
    margin-bottom: 2rem;
    font-size: 1.8rem;
    line-height: 1.5;
  }
`;

export default LandingStyles;
