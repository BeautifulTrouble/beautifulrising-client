import styled from 'styled-components';
export default styled.a`
    color: #838486;
    font-size: ${props=>props.lang === 'ar' ? '16px !important' : '18px !important'};
    text-transform: uppercase;
    font-weight: bold;
    ${props=>props.lang === 'ar' ? 'text-align: right;' : ''}

`;
