import styled from 'styled-components';
export default styled.section`
 width: 100%;
 display: flex;
 &::after {
   content: ' ';
   clear: both;
   display: block;
 }

 @media(max-width: 1320px) {
 }
 @media(max-width: 970px) {
   display: block;
 }
`;
