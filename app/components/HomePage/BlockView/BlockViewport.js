import styled from 'styled-components';
import {ToolViewport} from '../Tools';

const GRAYED = 'rgba(89,89,89,1)';
const BLACKED = 'rgba(0,0,0,0.65)';
export default styled(ToolViewport)`
  background-color: ${p=>p.grayout&&!p.forceShow ? GRAYED : BLACKED };
  width: 100%;
  height: 100%;
  position: relative;
  transition: background-color 0.3s ease;
`;
