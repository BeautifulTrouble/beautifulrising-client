import styled from 'styled-components';
export default styled.div`
  position: absolute;
  bottom: 10px;
  color: white;
  padding-${props=>props.theme.lang==='ar'?'left':'right'}: 50px;
  font-size: 14px;
  display: ${props=>props.show ? 'block' : 'none'};

  a { color: white; }

  @media(max-width: 1320px) {
  }
  @media(max-width: 970px) {
    font-size: 10px;
  }
`;
