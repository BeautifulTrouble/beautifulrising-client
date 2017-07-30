import styled from 'styled-components';

export default styled.h5`
  font-size: ${p=>p.theme.isArabic ? '16px' : '18px'};
  text-transform: uppercase;
  font-weight: bold;
  font-family: 'Avenir', 'Avenir Book', 'sans-serif';
  margin: 0;
  text-align: left;
  padding-top: 34px;
  padding-bottom: 34px;
  padding-left: 16px;
`;
