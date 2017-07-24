import ContentBlock from 'components/ContentBlock';
import styled from 'styled-components';
export default styled(ContentBlock)`
  padding-${p=>p.theme.isArabic?'right':'left'}: 100px;
`;
