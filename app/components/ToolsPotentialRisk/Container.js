import styled from 'styled-components';
export default styled.div`
  text-align: ${props=>props.theme.lang === 'ar' ? 'right' : 'left'};
`;
