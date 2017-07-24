import styled from 'styled-components';

export default styled.p`
  margin: 0;
  font-size: ${p=>p.ar?'13px':'14px'};
  line-height: ${p=>p.ar?'24px':'22px'};
  margin-top: 5px;

  &::after {
    content: ' ';
    clear: both;
    display: block;
  }
`;
