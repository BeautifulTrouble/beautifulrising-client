import styled from 'styled-components';
export default styled.li`list-style: none;
  width: ${props=>props.theme.itemWidth};
  margin-${p=>p.theme.isArabic?'left':'right'}: ${props=>props.theme.itemMargin};
  display: inline-block;
  vertical-align: top;
  margin-bottom: 50px;
  text-align: ${p=>p.theme.isArabic?'right':'left'};

  h3 {

    font-size: 19px;
    font-weight: 800; font-family: 'Avenir', 'Kaff', sans-serif;
    margin: 0;
    margin-top: 15px;
    text-align: ${p=>p.theme.isArabic?'right':'left'};
    text-transform: uppercase;
    letter-spacing: 0;

  }
  h5 {
    margin: 0;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 800; font-family: 'Avenir', 'Kaff', sans-serif;
    letter-spacing: 0;
  }

  p {
    padding-${p=>p.theme.isArabic?'left':'right'}: 30px;

    a {
      color: #828486;
    }
  }`;
