import styled from 'styled-components';
import { ToolTitle } from 'components/ToolsComponents';

export default styled(ToolTitle)`
  font-size: ${p=>p.theme.isArabic?'80px':'80px'};
  width: calc(100% - 80px);
  letter-spacing: ${p=>p.theme.isArabic?'3px':'1px'};
  margin: 0 0 20px;
  padding: 0;
  line-height: ${p=>p.theme.isArabic?'95px':'70px'};

  @media(max-width: 1170px) {
    font-size: 30px;
    line-height: ${p=>p.theme.isArabic?'28px':'28px'};
    margin-bottom: 12px;
    width: 100%;
  }
`;
