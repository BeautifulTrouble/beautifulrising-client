import styled from 'styled-components';
import {ToolContainer} from '../Tools';

export default styled(ToolContainer)`
  background-image: ${props => props.background};
  background-size: cover;
  background-position: center;
  width: 270px;
  height: 270px;
  margin-${p=>p.lang==='ar'?'left':'right'}: ${p=>p.index%3===0?'0':'30px'};
  margin-bottom: 30px;


  @media(max-width: 1170px) {
    width: 350px;
    height: 350px;
    margin: 10px;
  }
`;
