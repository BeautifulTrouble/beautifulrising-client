import { Viewport } from 'components/ToolPage/Header';
import styled from 'styled-components';

export default styled(Viewport)`
  padding-${p=>p.theme.isArabic?'right':'left'}: 60px;
`;
