import ContentContainer from './ContentContainer';
import styled from 'styled-components';

export default styled(ContentContainer)`
  padding-${p=>p.theme.isArabic?'right':'left'}: 16px;
`;
