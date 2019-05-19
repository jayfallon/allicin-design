import styled from 'styled-components';
import media from '../MediaQueries';

const FooterStyles = styled.footer`
  margin: 0 auto;
  padding: 0 2rem;

  ${media.brotherbear`
    padding-left: calc(50vw - 512px - 20px);
    padding-right: calc(50vw - 512px - 20px);
  `}
  padding-top: 6rem;
  font-size: 1.6rem;
  line-height: 1.5;
  color: #454a4c;
  a {
    font-size: 1.6rem;
    line-height: 1.5;
    color: #454a4c;
  }

  a:focus {
    background-color: #ffbf47;
    outline: 3px solid #ffbf47;
  }

  ul.bx__list--grid {
    padding-top: 2rem;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, auto);
    grid-auto-flow: column;
  }

  ul.si__list--grid {
    padding-top: 2rem;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(8, auto);
    grid-auto-flow: column;
  }

  ul.si__list--grid li {
  }

  ul.dp__list li {
    padding-top: 2rem;
    font-size: 1.6rem;
    line-height: 1.25;
  }

  article.article__sidp--grid {
    padding-bottom: 3rem;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(12, 1fr);
  }

  article.article__sidp--grid h2 {
    padding: 2rem 0;
    border-bottom: 1px solid #bfc1c3;
    color: #0b0c0c;
    font-size: 24px;
    font-weight: bold;
    line-height: 1.25;
  }

  div.si__wrapper {
    grid-column: 1/9;
  }

  div.dp__wrapper {
    grid-column: 9/13;
  }

  div.footer__meta {
    padding: 3rem 0;
    border-top: 1px solid #bfc1c3;
    font-size: 1.6rem;

    ${media.brotherbear`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
   `}
  }

  div.footer__meta--nav-wrapper {
    grid-column: 1/9;
    grid-row: 2/3;
  }

  ul.footer__nav--list {
    display: flex;
  }

  ul.footer__nav--list li {
    margin-right: 1.5rem;
  }

  ul.footer__nav--list li a {
    font-size: 16px;
    line-height: 1.5;
  }

  p.footer__built {
    margin-bottom: 1.5rem;
  }

  div.footer__copyright {
    background-image: url('/static/images/allicin-footer.png');
    background-repeat: no-repeat;
    background-position: center center;
    padding-top: 11.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
`;

export default FooterStyles;
