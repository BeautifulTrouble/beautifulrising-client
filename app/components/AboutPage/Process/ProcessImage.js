import styled from 'styled-components';
export default styled.img`
  height: 120px;
  margin-bottom: 30px;
  margin-${p=>p.lang==='ar'?'right':'left'}: 20px;
`;
