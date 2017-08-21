import styled from 'styled-components';
import { Link } from 'react-router';

export default styled(Link)`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  margin-right: 5px;
  position: relative;
  text-decoration: none;
  color: ${p=>p.selected?'black':'#848383'};

  svg, svg * {
    width: 40px !important;
    fill: ${props => props.selected ? 'black' : '#828486'}
  }

  &::after {
    display: ${props => props.selected ? 'block' : 'none'};
    content: ' ';
    height: 40px;
    border: solid;
    width: 0px !important;
    position: absolute;
    right: 50%;
    bottom: -70px;
    border-width: 0 1px 0 0;
    transform: translate(-50%,0);
    border-color: black;
  }
`;
