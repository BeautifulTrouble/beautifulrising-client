import {ToolViewport} from '../Tools';
import styled from 'styled-components';
export default styled(ToolViewport)`
  background-color: none;
  padding: 0;
  padding-${props=>props.theme.isArabic?'left':'right'}: 0px;
  padding-${props=>props.theme.isArabic?'right':'left'}: 0px;

  position: relative;

  h3 {
    padding-top: 5px;
  }
`;
