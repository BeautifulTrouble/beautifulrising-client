import ContentBlock from 'components/ContentBlock';
import styled from 'styled-components';

export default styled(ContentBlock)`
  border: 2px solid black;
  padding: 8px;
  &::after {
    content: '';
    display: block;
    clear: both;
  }

  form {
    display: flex;

    div {
      flex-grow: 1;
      display: inline-block;
      input[type=email] {
        outline: none;
        padding: 2px;
        text-align: ${p=>p.theme.isArabic?'right':'left'};
        width: 100%;
      }
    }
    button {
      outline: none;
      text-align: ${p=>p.theme.isArabic?'left':'right'};
      text-transform: uppercase;
      text-decoration: underline;
      font-weight: bold;
      color: #828486;
    }
  }

`;
