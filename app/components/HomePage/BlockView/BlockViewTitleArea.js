import styled from 'styled-components';

export default styled.div`
  position: absolute;
  left: 20px;
  top: 40px;
  padding-right: 10px;
  z-index: 100;
  width: calc(100% - 10px);
  opacity: ${props=>props.show ? '1': (props.forceShow?'1':'0')};
  transition: opacity 0.2s;
`;
