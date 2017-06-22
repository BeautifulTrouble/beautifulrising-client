import { injectGlobal } from 'styled-components';
import KnockOut from 'assets/fonts/Knockout-HTF67-FullBantamwtMod.otf';
import AvenirBlack from 'assets/fonts/Avenir-Black.ttf';
import AvenirBook from 'assets/fonts/Avenir-Book.ttf';
import PaintHand from 'assets/fonts/Paint-hand_fixed.ttf';
import MassiraSpray from 'assets/fonts/Massira-Spray.woff';
import KaffRegular from 'assets/fonts/Kaff-Regular.woff';
import KaffBold from 'assets/fonts/Kaff-Bold.woff';

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
    font-family: 'KnockOut';
    src: url(${KnockOut});
  }

  @font-face {
    font-family: 'Massira Spray';
    src: url(${MassiraSpray}) format('woff');
  }

  @font-face {
    font-family: 'Kaff Bold';
    font-weight: bold;
    font-style: normal;
    src: url(${KaffBold});
  }

  @font-face {
    font-family: 'Kaff';
    font-weight: normal;
    font-style: normal;
    src: url(${KaffRegular}) format('woff');
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body,p,input,textarea {
    font-family: 'Avenir', 'Kaff', Helvetica, Arial, sans-serif;
  }
  p {
    font-size: 14px;
    line-height: 22px;

    a {
      color: #828486;
    }
  }
  button {
    font-family: 'Avenir', 'Kaff', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  h1,h2,h3,h4,h5 {
    font-family: 'KnockOut', 'Kaff Bold', Helvetica, Arial, sans-serif;
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
    font-family: 'Avenir', 'Kaff', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: white;
    min-height: 100%;
    min-width: 100%;
  }

  .ReactModal__Body--open {
    overflow-y: hidden;
  }
`;
