import Header from './Header';
import styled from 'styled-components';
export default styled(Header)`
  font-size: ${p=>p.theme.isArabic?'30px':'40px'};
  padding-${p=>p.theme.isArabic?'right':'left'}: 52px;
`;
