import Link from 'next/link';

import FooterStyles from './styles';
import { PageContainer } from '../Global';

const Footer = props => (
  <FooterStyles>
    <div className="footer__section">
      <div className="page__container">
        <div className="footer__meta">
          <nav role="nav" className="footer__meta--nav">
            <ul className="footer__nav--list" id="footer__nav--list" />
            <p className="footer__built">
              Built by the{' '}
              <a href="https://allicin.io">Allicin Digital Service</a>
            </p>
            <p className="footer__ogl">
              All content is available under the{' '}
              <a href="https://en.wikipedia.org/wiki/MIT_License">
                MIT License
              </a>
              , except where otherwise stated
            </p>
          </nav>
          <div className="footer__copyright" role="copyright">
            <span> &copy;2019 Allicin copyright</span>
          </div>
        </div>
      </div>
    </div>
  </FooterStyles>
);

export default Footer;
