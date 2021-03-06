import styled from 'styled-components';
import ContentBlock from 'components/ContentBlock';

export default styled(ContentBlock)`
  width: 50%;
  margin-${p=>p.lang==='ar'?'right':'left'}: 50%;
  transform: translateX(${p=>p.lang==='ar'?'50%':'-50%'});
  padding: 0 40px;
  text-align: center;

  @media(max-width: 1320px) {
  }
  @media(max-width: 970px) {
    width: 100%;
    text-align: center;
    transform: none;
    margin-left: auto;
  }
`;
