import styled from 'styled-components';
export default styled.h3`
text-align: ${props=>props.theme.lang==='ar' ? 'right' : 'left'};
line-height: 30px;
margin: 0;
padding: 0;
`;
