import styled from 'styled-components';
import IntroText from 'components/AboutPage/IntroText';

export default styled(IntroText)`
  margin-${p=>p.theme.isArabic?'right':'left'}: 82%;
  width: 33%;
  padding: 0;

  @media(max-width: 1170px) {
    width: 100%;
    margin: 0;
    transform: translateX(0);
  }
`
