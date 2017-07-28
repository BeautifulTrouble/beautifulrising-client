import styled from 'styled-components';
export default styled.div`
  position: absolute;
  top: 0;
  ${p=>p.theme.isArabic ? 'right': 'left'}: -15px;
  text-align: center;
  color: #828486;
  button {
    cursor: pointer;
    outline: none;
    padding-right: 0;
    padding-left: 0;
  }
`;
