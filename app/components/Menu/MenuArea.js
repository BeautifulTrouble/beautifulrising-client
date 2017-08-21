import styled from 'styled-components';
export default styled.div`
width: 1170px;
text-align: ${props=>props.lang==='ar'?'right':'left'};
direction: ${p=>p.lang==='ar'?'rtl':'ltr'};
display: inline-block;
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

&::after {
  content: ' ';
  display: block;
  clear: both;
}

// Mobile
@media(max-width: 1170px) {
  max-width: 100%;
  width: 100%;
}
`;
