import styled from 'styled-components';

export default styled.div`
  position: relative;
  text-align: ${p=>p.theme.isArabic?'left':'right'};
`;
