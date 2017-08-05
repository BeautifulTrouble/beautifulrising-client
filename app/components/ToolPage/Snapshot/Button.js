import styled from 'styled-components';

export default styled.button`
  cursor: pointer;
  outline: none;
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;

  color: black;
  text-decoration: underline;

  text-transform: uppercase;

  font-weight: bold;

  text-align: ${p=>p.isArabic?'right':'left'};
`;
