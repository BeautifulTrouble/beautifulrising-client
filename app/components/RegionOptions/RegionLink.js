import styled from 'styled-components';
import { Link } from 'react-router';

export default styled(Link)`
  svg, svg * {
    fill: ${props => props.selected ? 'black' : '#828486'}
  }
`;
