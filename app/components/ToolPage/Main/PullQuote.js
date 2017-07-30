import styled from 'styled-components';

export default styled.blockquote`
  float: ${p=>p.theme.isArabic?'right':'left'};
  padding: 0;
  margin: 10px 0 10px 0;
  margin-${p=>p.ar?'left':'right'}: 20px;
  line-height: 30px;
  max-width: 33%;
  padding: 10px 0;
  p, div, span {
    font-family: 'Paint Hand',  'Massira Spray', serif;
    display: inline;
  }

  text-transform: uppercase;
  position: relative;

  font-size: 20px;
  margin-left: 20px;

  &::before {
    content: ' ';
    width: 42px;
    height: 0;
    border-bottom: 2px solid;
    position: absolute;
    top: 0;
    ${p=>p.theme.isArabic?'right':'left'}: 0;
  }
`;
