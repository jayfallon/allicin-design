import styled from 'styled-components';
import media from '../MediaQueries';

const ColorListStyles = styled.div`
  ul.color__list--grid {
    margin-bottom: 2.5rem;
    width: 100%;
    display: flex;
    ${media.brotherbear`
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: 1fr 3fr;
    `}
  }

  ul.color__list--grid li {
    align-self: center;
  }
  ul.color__list--grid li:first-child {
    margin-right: 1rem;
    width: 5rem;
    height: 5rem;
    ${media.brotherbear`
      margin-right: 0;
      width: 100%;
    `}
  }
  ul.color__list--grid li:last-child {
    margin-left: 1.25rem;
    display: flex;
    flex-wrap: wrap;
    ${media.brotherbear`
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: repeat(3, 1fr);
    `}
  }
  ul.color__list--grid li:last-child span {
    margin-right: 1.25rem;
  }
`;

export { ColorListStyles };
