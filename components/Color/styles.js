import styled from 'styled-components';

const ColorListStyles = styled.div`
  ul.color__list--grid {
    margin-bottom: 2.5rem;
    width: 100%;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 3fr 2fr 2fr 4fr;
  }

  ul.color__list--grid li {
    align-self: center;
  }
  ul.color__list--grid li:first-child {
    height: 5rem;
  }
`;

export { ColorListStyles };
