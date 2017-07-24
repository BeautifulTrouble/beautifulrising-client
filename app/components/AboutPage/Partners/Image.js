import styled from 'styled-components';
export default styled.div`
  display: inline-block;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-image: url(${props=> `https://www.beautifulrising.org/assets/content/small-${props.source}`})
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
