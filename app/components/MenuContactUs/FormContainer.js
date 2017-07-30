import ContentBlock from 'components/ContentBlock';
import styled from 'styled-components';

export default styled(ContentBlock)`
  border: 1px solid;
  padding: 8px;
  &::after {
    content: '';
    display: block;
    clear: both;
  }

  input[type=email] {
    outline: none;
    padding: 2px;
    float: ${p=>p.theme.isArabic?'right':'left'};
    text-align: ${p=>p.theme.isArabic?'right':'left'};
  }
  button {
    outline: none;
    text-align: ${p=>p.theme.isArabic?'left':'right'};
    float: ${p=>p.theme.isArabic?'right':'left'};
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: bold;
    color: #828486;
  }
`;
