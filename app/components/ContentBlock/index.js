/**
*
* ContentBlock
*
*/

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { injectIntl } from 'react-intl';

const ContentArea = styled.div`
  font-size: ${p=>p.theme.fontSize};
  line-height: ${p=>p.theme.lineHeight};
  font-family: ${p=>p.theme.fontFamily};
  text-align : ${p=>p.theme.align};
`;

const LatinContentTheme = {
  fontSize: '14px',
  lineHeight: '22px',
  fontFamily: 'Avenir, Arial, sans-serif',
  align: 'left'
};

const ArabicContentTheme = {
  fontSize: '13px',
  lineHeight: '24px',
  fontFamily: 'Kaff, Arial, sans-serif',
  align: 'right'
};

function ContentBlock(props) {
  const { locale } = props.intl;
  const Theme = locale === 'ar' ? ArabicContentTheme : LatinContentTheme;
  return (
    <ThemeProvider theme={Theme}>
      <ContentArea>
        { React.Children.toArray(props.children) }
      </ContentArea>
    </ThemeProvider>
  );
}
ContentBlock.defaultProps = {
  theme: LatinContentTheme
}

ContentBlock.propTypes = {

};

export default injectIntl(ContentBlock);
