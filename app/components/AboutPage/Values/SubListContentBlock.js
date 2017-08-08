import ContentBlock from 'components/ContentBlock';
import styled from 'styled-components';
export default styled(ContentBlock)`
  padding-${p=>p.theme.isArabic?'right':'left'}: 100px !important;
  margin: 10px;

  @media(max-width: 700px) {
    padding-${p=>p.theme.isArabic?'right':'left'}: 0 !important;
  }
`;
