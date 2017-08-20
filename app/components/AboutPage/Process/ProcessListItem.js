import styled from 'styled-components';
export default styled.li`list-style: none;
  width: 24%;
  margin-${p=>p.lang==='ar'?'left':'right'}: ${props=>'0.5%'};
  display: inline-block;
  vertical-align: top;
  margin-bottom: 50px;
  text-align: ${p=>p.lang==='ar'?'right':'left'};

  &:last-child {
    .circledContainer {
      &::after {
        display: none;
      }
    }
  }
  h1 {
    font-size: 30px;
    margin-bottom: 5px;
    text-align: ${p=>p.lang==='ar'?'right':'left'};
  }

  p {
    padding-${p=>p.lang==='ar'?'right':'left'}: 10px;
  }

  h2 {
    font-size: 21px;
    text-transform: uppercase;
  }

  h4 {
    margin: 0;
    text-transform: uppercase;
    text-align: ${p=>p.lang==='ar'?'right':'left'};
    padding-${p=>p.lang==='ar'?'right':'left'}: 20px;
    &::before {
      content: ' ';
      display: block;
      clear: both;
      width: 42px;
      border-bottom: 2px solid;
    }
  }

  ol {
    li {
      font-size: 12px;
      text-align: ${p=>p.lang==='ar'?'right':'left'};
      line-height: 20px;
    }
  }

  @media(max-width: 1170px) {
    width: 100%;
    float: none;

    text-align: center;
    .circledContainer {
      display: inline-block;
      &::after {
        display: none;
      }
    }
  }
`;
