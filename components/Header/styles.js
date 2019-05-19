import styled from 'styled-components';
import media from '../MediaQueries';

const HeaderStyles = styled.header`
  background-color: ${props => props.theme.headerBg};
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  border-bottom: 1rem solid ${props => props.theme.headerBorder};
  position: fixed;

  ${media.brotherbear`
  
    padding-left: calc(50vw - 512px - 20px);
    padding-right: calc(50vw - 512px - 20px);
   `}

  nav.header__nav {
    height: 5.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1.logo__primary {
    color: ${props => props.theme.headerLink};
    flex: 1 0 33%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  a.logo__primary--link {
    background-image: url('/static/images/Allicin.png');
    background-repeat: no-repeat;
    background-size: 11rem 3.5rem;
    background-position: 0 0;
    margin-right: 1.25rem;
    width: 33%;
    width: 11rem;
    height: 3.5rem;
    border-bottom: 0.1rem solid transparent;
    color: ${props => props.theme.headerLink};
    font-size: 4rem;
    text-decoration: none;
  }

  a.logo__primary--link:hover {
    text-decoration: underline;
  }

  a.logo__primary--link:focus {
    color: #0b0c0c;

    text-decoration: none;
  }

  span.logo__primary--text {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.25;
    text-transform: uppercase;
    display: none;
  }

  span.logo__title--text {
    font-size: 2.5rem;
    line-height: 1.25;
  }

  ul.navigation__menu {
    flex: 1 0 66%;
  }
`;

export default HeaderStyles;
