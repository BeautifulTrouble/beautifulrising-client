import styled from 'styled-components';
export default styled.div`
text-align: ${props=>props.lang==='ar'?'right':'left'};
&::before {
  // content: ' ';
  // position: absolute;
  // top: 67px;
  // left: ${props=>props.lang==='ar'?'3px':'115px'};
  // background-color: white;
  // z-index: 0;
  // width: 182px;
  // height: 20px;
}
`;
