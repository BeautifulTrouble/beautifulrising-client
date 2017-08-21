import styled from 'styled-components';
import Title from 'components/ToolPage/Header/Title';

export default styled(Title)`
  margin: 0;
  width: 100%;
  padding-${p=>p.theme.isArabic?'left':'right'}: 20px;
`;
