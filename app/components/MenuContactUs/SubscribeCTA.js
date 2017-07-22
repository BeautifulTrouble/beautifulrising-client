import styled from 'styled-components';

export default styled.p`
  font-size: ${p=>p.theme.isArabic?'13px':'14px'};
  line-height: ${p=>p.theme.isArabic?'24px':'22px'};
`;
