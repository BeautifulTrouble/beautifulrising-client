import styled from 'styled-components';

export default styled.section`
    display: ${props=>props.show ? 'block' : 'none'};

    position: relative;
    &::after {
      content: ' ';
      position: absolute;
      height: 40px;
      width: 1px;
      left: 50%;
      border-right: ${p=>p.showLine?'1px solid':'none'};
    }
`;
