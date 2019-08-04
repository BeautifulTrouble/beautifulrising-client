import { ToolType } from 'components/ToolsComponents';
import styled from 'styled-components';

export default styled(ToolType)`
  font-size: ${p=>p.theme.isArabic?'50px':'40px'};
  margin-bottom: 20px;
  padding: 0;
  line-height: 36px;

  a {
    color: inherit;
    text-decoration: none;
  }

  @media(max-width: 1320px) {
  }
  @media(max-width: 970px) {
    font-size: 21px;
    line-height: 21px;
    margin-bottom: 6px;
  }
`;
