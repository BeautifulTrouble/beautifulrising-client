import styled from 'styled-components';
export default styled.div`
  position: absolute;
  bottom: 10px;
  color: white;
  padding-${props=>props.theme.lang==='ar'?'left':'right'}: 50px;
  font-size: 14px;
  display: ${props=>props.show ? 'block' : 'none'};

  a { color: white; }

  @media(max-width: 700px) {
    display: none;
  }
`;
