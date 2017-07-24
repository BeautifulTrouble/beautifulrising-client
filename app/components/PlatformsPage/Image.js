import styled from 'styled-components';
export default styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${props=> `https://www.beautifulrising.org/${props.source}`})
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
