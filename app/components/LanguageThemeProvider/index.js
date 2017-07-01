/**
*
* LanguageThemeProvider
*  - Make Arabic and Latin Language a main stay on theming
*/

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { injectIntl } from 'react-intl';

const Container = styled.div`
  height: inherit;
  width: 100%;
`;
class LanguageThemeProvider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {locale} = this.props.intl;
    return (
      <ThemeProvider theme={{ isArabic: locale==='ar', lang: locale, ...this.props.theme }}>
        <Container>
          {React.Children.toArray(this.props.children)}
        </Container>
      </ThemeProvider>
    );
  }
}

LanguageThemeProvider.propTypes = {

};

export default injectIntl(LanguageThemeProvider);
