/**
*
* LanguageThemeProvider
*  - Make Arabic and Latin Language a main stay on theming
*/

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Container = styled.div`
  height: inherit;
  width: 100%;
`;
class LatinThemeProvider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ThemeProvider theme={{ ar: false, isArabic: false, lang: 'en', ...this.props.theme }}>
        <Container>
          {React.Children.toArray(this.props.children)}
        </Container>
      </ThemeProvider>
    );
  }
}

LatinThemeProvider.propTypes = {

};

export default LatinThemeProvider;
