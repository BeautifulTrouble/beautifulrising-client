import styled from 'styled-components';

export default styled.div`
  flex-grow: 1;
  padding: ${p=>p.theme.isArabic?'0 86px 0 170px':'0 170px 0 86px'};
`;
