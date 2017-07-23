import AboutSection from 'components/AboutPage/AboutSection';
import styled from 'styled-components';
export default styled(AboutSection)`
  text-align: ${p=>p.theme.isArabic?'right':'left'};
  h2 {
    &::after {
      ${p=>p.theme.isArabic?'right':'left'}: 83%;
    }
  }
`;
