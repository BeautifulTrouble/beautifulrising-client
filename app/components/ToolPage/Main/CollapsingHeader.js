import styled from 'styled-components';

export default styled.h5`
  font-size: ${p=>p.theme.isArabic ? '16px' : '18px'};
  text-transform: uppercase;
  font-weight: bold;
  font-family: 'Avenir', 'Kaff', 'sans-serif';
  margin: 0;
  text-align: ${p=>p.theme.isArabic?'right':'left'};
  padding-top: 34px;
  padding-bottom: 34px;
  padding-${p=>p.theme.isArabic?'right':'left'}: 16px;
`;
