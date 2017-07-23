import SmallHeaderBlock from 'components/SmallHeaderBlock';
import styled from 'styled-components';
export default styled(SmallHeaderBlock)`
  margin: 0;
  &::before {
    content: ' ';
    width: 42px;
    height: 1px;
    border-bottom: 2px solid;
  }
`
