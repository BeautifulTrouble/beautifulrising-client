import styled from 'styled-components';
import IntroText from 'components/AboutPage/IntroText';

export default styled(IntroText)`
  margin-${p=>p.theme.isArabic?'right':'left'}: 82%;
  width: 33%;
  padding: 0;
`
