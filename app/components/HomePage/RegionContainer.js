import styled from 'styled-components';
export default styled.div`
  position: absolute;
  top: 10px;
  opacity: ${props=>props.show?'1':'0'};
  transition: opacity 0.3s ease;
  ${props=>props.lang==='ar' ? 'left: 2px;' : 'right: 2px;'}
  svg {  height: 32px;}
`;
