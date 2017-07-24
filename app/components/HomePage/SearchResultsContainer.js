import styled from 'styled-components';
export default styled.div`
  padding-${p=>p.theme.isArabic?'right':'left'}: 59px;
  color: #828486;
`;
