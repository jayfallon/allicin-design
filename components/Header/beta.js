import Link from 'next/link';
import styled from 'styled-components';
import media from '../MediaQueries';
import { PageContainer } from '../Global';

const Beta = () => (
  <BetaStyles>
    <article className="feedback__content">
      <span className="beta__tag">beta</span>
      <p>
        This is a new service – your{' '}
        <Link href="/feedback">
          <a title="feedback">feedback</a>
        </Link>{' '}
        will help us to improve it.
      </p>
    </article>
  </BetaStyles>
);

const BetaStyles = styled.section`
  background-color: ${props => props.theme.whiteBg};
  margin: 0 auto;
  padding: 0 2rem;
  padding-top: 6.8rem;

  ${media.brotherbear`
  
    padding-left: calc(50vw - 512px - 20px);
    padding-right: calc(50vw - 512px - 20px);
   `}
  article.feedback__content {
    height: 5.8rem;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
  }

  span.beta__tag {
    background-color: ${props => props.theme.betaBg};
    margin-right: 1.5rem;
    padding: 4px 8px 1px;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
    outline-offset: -2px;
    outline: 2px solid transparent;
  }
`;

export default Beta;
