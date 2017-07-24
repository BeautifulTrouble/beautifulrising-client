import SmallHeaderBlock from 'components/SmallHeaderBlock';
import styled from 'styled-components';
export default styled(SmallHeaderBlock)`
  letter-spacing: 0px;
  margin-bottom: 5px;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    width: 42px;
    border-top: 2px solid #000;
    margin-top: -12px;
  }
`;
