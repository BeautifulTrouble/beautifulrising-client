import CommonLeftHeader from 'components/CommonComponents/CommonLeftHeader';
import styled from 'styled-components';
export default styled(CommonLeftHeader)`
  border: none;
  text-align: ${props=>props.lang==='ar' ? 'right' : 'left'};
  margin-top: 40px;
`;
