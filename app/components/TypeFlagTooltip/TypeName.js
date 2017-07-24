import styled from 'styled-components';
export default styled.div`
  font-family: 'Avenir', 'Kaff';
  font-size: 10px;
  text-transform: ${p=>p.lang==='ar'?'capitalize':'uppercase'};
  margin-top: -10px;
  text-decoration: ${p=>p.mainType?'underline':'none'};
`;
