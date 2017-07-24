import styled from 'styled-components';
export default styled.li`
  display: inline-block;
  width: 49%;
  text-align: ${p=>p.lang==='ar'?'right':'left'};
  text-transform: uppercase;
  button { text-transform: uppercase; font-weight: bold; }
  color: #959595;
  svg * {
    fill: #959595;
  }

  .shareArea {
    bottom: -20px;
    ${p=>p.theme.lang==='ar'?'right':'left'}: 0px;
    background: transparent;

    span svg * {
      fill: #b2b2b2;
    }
  }
`;
