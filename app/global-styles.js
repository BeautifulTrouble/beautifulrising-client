import { injectGlobal } from 'styled-components';
import KnockOut from 'assets/fonts/Knockout-HTF67-FullBantamwtMod.otf';
import AvenirBlack from 'assets/fonts/Avenir-Black.ttf';
import AvenirBook from 'assets/fonts/Avenir-Book.ttf';
import PaintHand from 'assets/fonts/Paint-hand_fixed.ttf';
/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: 'Paint Hand';
    src: url(${PaintHand});
  }

  @font-face {
    font-family: 'Avenir Book';
    src: url(${AvenirBook});
  }

  @font-face {
    font-family: 'Avenir Black';
    src: url(${AvenirBlack});
  }

  @font-face {
    font-family: 'Knockout';
    src: url(${KnockOut});
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body,p {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  h1,h2,h3,h4,h5 {
    font-family: 'Knockout', Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    font-weight: normal;
  }

  h1 {
    font-size: 50px;
    letter-spacing: 1px;
  }
  h2 {
    font-size: 40px;
    letter-spacing: 1px;
  }
  h3 {
    font-size: 30px;
    letter-spacing: 1px;
  }

  body.fontLoaded {
    font-family: 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: white;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.5em;
  }

`;
