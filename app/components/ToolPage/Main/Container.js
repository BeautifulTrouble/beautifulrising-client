import styled from 'styled-components';

export default styled.div`
  flex-grow: 1;
  padding: ${p=>p.theme.isArabic?'0 86px 0 136px':'0 136px 0 86px'};
  padding-top: 48px;
`;
