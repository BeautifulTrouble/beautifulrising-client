import styled from 'styled-components';
import ContentBlock from 'components/ContentBlock';
export default styled(ContentBlock)`
  border: 1px solid;
  padding: 8px;

  input[type=email] {
    width: calc(100% - 80px);
    outline: none;
    padding: 2px;
    text-align: ${p=>p.theme.isArabic ? 'right' : 'left'};
  }
  button {
    outline: none;
    width: 70px;
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
    color: #828486;
    float: ${p=>p.theme.isArabic ? 'left' : 'right'};
  }
`;
