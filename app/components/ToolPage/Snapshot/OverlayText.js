import styled from 'styled-components';
import ContentBlock from 'components/ContentBlock';

export default styled.div`
  width: 100%;
  height: 136px;
  position: absolute;
  bottom: 0;
  left: 0;

  background-color: white;
  padding: 44px 60px 10px;
  font-weight: bold;
  font-size: 20px;
  z-index: 700;
  a { color: #828487; }

  * {
    margin: 0;
  }
  &::before {
    content: '*';
    position: absolute;
    ${p=>p.theme.isArabic?'right':'left'}: 45px;
    font-size: 26px;
    top: 40px;
  }
`
