/**
*
* MenuBlock
*
*/

import styled from 'styled-components';
import ContentBlock from 'components/ContentBlock';
export default styled(ContentBlock)`
  padding: 20px;
  border-${p=>p.isArabic?'left':'right'}: ${p=>p.last?'none':'2px solid black'};
  width: 20%;
  display: inline-block;
  vertical-align: top;
  align-items: stretch;
`;
