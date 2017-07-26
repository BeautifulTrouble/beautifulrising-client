import {ToolViewport} from '../Tools';
import styled from 'styled-components';
export default styled(ToolViewport)`
  background-color: none;
  padding: 0;
  padding-${props=>props.theme.isArabic?'left':'right'}: 30px;
  padding-${props=>props.theme.isArabic?'right':'left'}: 17px;

  position: relative;

  &::before{
    content: ' ';
    width: 53px;
    height: 1px;
    border-bottom: 2px solid;
    position: absolute;
    top: 0px;
    ${p=>p.theme.isArabic?'right: 9px;':'left: 17px;'};
  }

  h3 {
    padding-top: 5px;
  }
`;
