import styled from 'styled-components';

export default styled.div`
  position: absolute;
  ${p=>p.theme.isArabic?'right':'left'}: 0;
  top: -1px;
`;
