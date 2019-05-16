import styled, { createGlobalStyle } from 'styled-components';

import media from '../MediaQueries';

const GlobalStyle = createGlobalStyle`

  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  :root {
      font-size: 10px;
  }
  html {
    height: 100%; 
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background-color: ${props => props.theme.bodyBackground};
    height: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 1.8rem;
    line-height: 1.8;
  }
  main {
    padding-top: 6rem;
  }

  #__next {
    height: 100%;
  }

  a.main__content--link {
    margin: 0 !important;
    padding: 10px 15px;
    width: 1px !important;
    height: 1px !important;
    color: #0b0c0c;
    font-size: 1.6rem;
    overflow: hidden !important;
    position: absolute !important;
    display: block;
    clip: rect(0 0 0 0) !important;
}

a.main__content--link:focus {
    margin: inherit !important;
    background-color: #ffbf47;
    width: auto !important;
    height: auto !important;
    white-space: inherit !important;
    outline: 3px solid #ffbf47;
    outline-offset: 0;
    position: static !important;
    overflow: visible !important;
    clip: auto !important;
    clip-path: none !important;
    -webkit-clip-path: none !important;
}
`;

const PageContainer = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  ${media.brotherbear`
  
    padding-left: calc(50vw - 512px - 20px);
    padding-right: calc(50vw - 512px - 20px);
   `}
`;

export default GlobalStyle;

export { PageContainer };
