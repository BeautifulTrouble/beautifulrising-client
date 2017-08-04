import styled from 'styled-components';
export default styled.div`
display: flex;

&::after {
  content: ' ';
  clear: both;
  display: block;
}
`;

/*
// transition: padding-top 0.3s ease;
// ${props=> {
//   if(!props.shorten) {
//     return `padding-top: ${props.full ? '490px' : props.isStory ? '440px' : '360px'};`
//   } else {
//     return `padding-top: ${props.full ? '290px' : props.isStory ? '240px' : '160px'};`
//   }
// }
// }
*/
