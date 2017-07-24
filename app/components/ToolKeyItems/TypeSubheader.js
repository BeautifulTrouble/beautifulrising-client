import { getToolTypeColor } from 'components/CommonComponents';

import styled from 'styled-components';
export default styled.h4`
  font-family: 'Paint Hand', 'Massira Spray';
  letter-spacing: ${p=>p.theme.isArabic?'3px':'0'};
  font-size: ${p=>p.theme.isArabic?'28px':'20px'};
  line-height: ${p=>p.theme.isArabic?'40px':'22px'};
  text-align: ${p=> p.theme.isArabic? 'right' : 'left'} ;
  color: ${props=>getToolTypeColor(props.type)};
  margin: 0;
  padding: 0;
`;
