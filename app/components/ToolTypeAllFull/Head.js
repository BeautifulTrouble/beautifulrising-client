import styled from 'styled-components';

export default styled.h3`
  margin: 0;
  text-transform: uppercase;
  font-size: ${p=>p.ar?'30px':'30px'};
  line-height: ${p=>p.ar?'40px':'1'};
  letter-spacing: ${p=>p.ar?'1px':'1px'};
`;
