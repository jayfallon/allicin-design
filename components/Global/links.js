import styled from 'styled-components';
import Link from 'next/link';

const AdsLink = styled.a`
  color: ${props => props.theme.adsLinkDef};
  &:hover {
    color: ${props => props.theme.adsLinkHov};
  }
  &:focus {
    color: ${props => props.theme.adsLinkFoc};
  }
  &:visited {
    color: ${props => props.theme.adsLinkVis};
  }
`;

const LinkList = props => (
  <ul className={props.cname}>
    {props.list.map(function(item, i) {
      const d = item.replace(/-/g, ' ');
      return (
        <li key={i}>
          <Link href={item}>
            <a title={item}>{d}</a>
          </Link>
        </li>
      );
    })}
  </ul>
);

export { LinkList };

export default AdsLink;
