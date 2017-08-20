import styled from 'styled-components';
import { Link } from 'react-router';

export default styled(Link)`
  width: 205px;
  display: inline-block;
  vertical-align: top;
  text-align: ${props=>props.lang==='ar' ? 'right' : 'left'};
  margin-right: ${props=>props.lang==='ar' ? 'auto' : '30px'};
  margin-left: ${props=>props.lang==='ar' ? '30px' : 'auto'}
  text-decoration: none;
  color: black;
  margin-bottom: 10px;

  &:last-child {
      margin-right: 0;
  }

  * {
    vertical-align: top;
  }

  @media(max-width: 1170px) {
    width: 100%;
    text-align: center;
  }
`;
