import styled from 'styled-components';
export default styled.span`
  display: inline-block;
  background-image: url(${props=>require('assets/images/type/' + props.type + '-icon.svg')});
  background-size: cover;
  width: 30px;
  height: 30px;
  background-size: contain;
`;
