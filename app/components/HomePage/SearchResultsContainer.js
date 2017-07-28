import styled from 'styled-components';
export default styled.div`
  padding-${p=>p.theme.isArabic?'right':'left'}: 20px;
  margin-top: 24px;
  color: #828486;
`;
