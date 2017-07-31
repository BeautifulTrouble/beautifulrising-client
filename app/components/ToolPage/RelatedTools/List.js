import styled from 'styled-components';
const List = styled.ul`
  padding: 0;
  margin: 0;
  margin-${p=>p.theme.isArabic?'right':'left'}:  18px;
`;
