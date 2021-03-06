import styled from 'styled-components';
import ContentBlock from 'components/ContentBlock';

export default styled(ContentBlock) `
  font-size: ${p=>p.theme.isArabic?'14px':'16px'};
  line-height: ${p=>p.theme.isArabic?'23px':'22px'};
  font-weight: bold;
  color: white;
  max-width: 480px;
  display: inline-block;
  margin-top: 36px;

  ${p=>p.theme.isArabic ?
      "" :
      `
      p {
        font-weight: normal;
        font-family: Avenir Heavy;
        letter-spacing: 0.5px;
      }
      `
  };

`
