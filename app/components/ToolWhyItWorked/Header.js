import CommonLeftHeader from 'components/CommonComponents/CommonLeftHeader';
import styled from 'styled-components';
export default styled(CommonLeftHeader)`
 border: none;
 text-align: ${p=>p.theme.isArabic ? 'right' : 'left'};
 margin-top: 40px;

`;
