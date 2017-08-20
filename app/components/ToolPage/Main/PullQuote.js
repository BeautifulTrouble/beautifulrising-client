import styled from 'styled-components';

export default styled.blockquote`
  float: ${p=>p.theme.isArabic?'right':'left'};
  padding: 0;
  margin: 20px 0;

  line-height: 30px;
  max-width: 230px;
  width: 230px;
  padding: 10px 0;
  margin-right: 40px;
  p, div, span {
    font-family: 'Paint Hand',  'Massira Spray', serif;
    display: inline;
  }

  text-transform: uppercase;
  position: relative;

  font-size: 20px;

  @media(max-width: 1170px) {
    width: 100%;
    max-width: 100%;
    padding: 0 30px;
    text-align: center; 
  }
`;
