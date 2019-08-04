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
  text-align: ${p=>p.isArabic?'right':'left'};

  @media(max-width: 1320px) {
    align-items: flex-start;
  }
  @media(max-width: 970px) {
    width: 100%;
    border: none;

    text-align: center;
    border-bottom: 2px solid black;
    
  }
`;
