import styled from 'styled-components';

import ContentBlock from 'components/ContentBlock';
import { getToolTypeColor } from 'components/CommonComponents';


export default styled(ContentBlock)`
  color: #FFFFFF;
  position: absolute;
  top: 40px;
  left: 0;
  padding: 0 10px;
  font-weight: 400;
  text-align: center;
  opacity: ${props=>props.show?(props.forceShow?'0':'1'):'0'};
  transition: opacity 0.2s;
`;
