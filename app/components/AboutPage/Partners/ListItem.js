import styled from 'styled-components';
export default styled.li`list-style: none;
  width: ${props=>props.theme.itemWidth};
  margin-right: ${props=>props.theme.itemMargin};
  display: inline-block;
  vertical-align: top;
  margin-bottom: 50px;
  text-align: ${p=>p.lang==='ar'?'right':'left'};

  h3 {
    font-size: 24px;
    margin-bottom: 5px;
    text-align: ${p=>p.lang==='ar'?'right':'left'};
  }
  a {
    color: #828486;
    font-size: 16px;
    display: inline-block;
    width: 100%;
  }
  p {
    text-align: ${p=>p.lang==='ar'?'right':'left'};
    font-size: 18px;
    padding-${p=>p.lang==='ar'?'right':'left'}: 10px;
  }

  @media(max-width: 1320px) {
    width: 100%;
    text-align: center;
    p {
      padding: 0;
    }
    h3 {
      text-align: center;
    }

    h5 {
      &::before {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  `;
