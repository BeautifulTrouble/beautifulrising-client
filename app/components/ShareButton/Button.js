import styled from 'styled-components';
export default styled.button`
  outline: none;
  padding: 0; margin: 0;
  cursor: pointer;
  padding: 2px;
  text-transform: uppercase;
  span svg {
    width: ${p=>p.svgSquare || '30px'};
    height: ${p=>p.svgSquare || '30px'};

    * {
      fill: white ;
    }
  }
`;
