import styled from 'styled-components';
export default styled.h3`
  font-size: ${p=>p.theme.lang==='ar'?'30px':'30px'};
  text-transform: uppercase;
  position: relative;
  margin: 0;
  border-bottom: 2px solid;
  padding-bottom: 0;

  text-align: ${p=>p.theme.isArabic?'right':'left'};
`;
