import styled from 'styled-components';

import media from '../MediaQueries';

const AppNavStyles = styled.section`
  background-color: ${props => props.theme.appNavBg};
  margin: 0 auto;
  padding: 0 2rem;

  ${media.brotherbear`
    padding-left: calc(50vw - 512px - 20px);
    padding-right: calc(50vw - 512px - 20px);
   `}

  ul.app__nav--list {
    display: flex;
    justify-content: space-between;
    ${media.brotherbear`
      justify-content: flex-start;
   `}
  }

  ul.app__nav--list li {
    margin-right: 2rem;
    border-bottom: 4px solid transparent;
    display: flex;
    justify-content: center;
    align-items: stretch;
  }

  ul.app__nav--list li:hover {
    border-bottom: 4px solid ${props => props.theme.appNavHover};
  }

  ul.app__nav--list li.active {
    border-bottom: 4px solid ${props => props.theme.appNavActive};
  }

  ul.app__nav--list a {
    padding: 1.3rem 0 1.3rem;
    font-weight: 700;
    text-decoration: none;
    text-transform: capitalize;
    flex: 1 0 auto;
  }

  ul.app__nav--list a:focus {
    outline: 3px solid ${props => props.theme.adsLinkFoc};
    outline-offset: 1px;
    background-color: inherit;
  }
`;

export default AppNavStyles;
