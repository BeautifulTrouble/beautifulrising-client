import styled from 'styled-components';
import {ToolContainer} from '../Tools';

export default styled(ToolContainer)`
  background-image: ${props => props.background};
  background-size: cover;
  background-position: center;
  width: 250px;
  height: 250px;
  margin: 10px;
  margin-${p=>p.lang==='ar'?'right':'left'}: 17px;
  margin-${p=>p.lang==='ar'?'left':'right'}: 2px;
  margin-bottom: 10px;
  margin-top: 10px;
`;
