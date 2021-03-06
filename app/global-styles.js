import { injectGlobal } from 'styled-components';
import KnockOut from 'assets/fonts/Knockout-HTF67-FullBantamwtMod.otf';
import AvenirBlack from 'assets/fonts/AvenirBlack.ttf';
import AvenirHeavy from 'assets/fonts/Avenir-Heavy-05.ttf';
import AvenirBook from 'assets/fonts/Avenir-Book.ttf';
import PaintHand from 'assets/fonts/Paint-hand_fixed.ttf';
import MassiraSpray from 'assets/fonts/Massira-Spray-Small.woff';
import KaffRegular from 'assets/fonts/Kaff-Regular.woff';
import KaffBold from 'assets/fonts/Kaff-Bold.woff';

/* eslint no-unused-expressions: 0 */


injectGlobal`
  @font-face {
    font-family: 'Greta';
    src: url(https://s3.amazonaws.com/fonts.tptq-arabic.com/WF-000156-000039-000051-f4ee0957afcbb2233d42dc7777d1e102.eot);
    src: url("https://s3.amazonaws.com/fonts.tptq-arabic.com/WF-000156-000039-000051-f4ee0957afcbb2233d42dc7777d1e102.eot?#iefix") format("embedded-opentype"),
     url("https://s3.amazonaws.com/fonts.tptq-arabic.com/WF-000156-000039-000051-f4ee0957afcbb2233d42dc7777d1e102.woff2") format("woff2"),
     url("https://s3.amazonaws.com/fonts.tptq-arabic.com/WF-000156-000039-000051-f4ee0957afcbb2233d42dc7777d1e102.woff") format("woff");
  }

  @font-face {
    font-family: 'Paint Hand';
    src: url(${PaintHand});
  }

  @font-face {
    font-family: 'Avenir';
    font-weight: 400;
    src: url(${AvenirBook});
  }

  @font-face {
    font-family: 'Avenir';
    font-weight: 800;
    src: url(${AvenirBlack});
  }

  @font-face {
    font-family: 'Avenir Black';
    src: url(${AvenirBlack});
  }

  @font-face {
    font-family: 'Avenir Heavy';
    src: url(${AvenirHeavy});
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
    font-family: 'Kaff';
    font-weight: bold;
    font-weight: 800;
    font-style: normal;
    src: url(${KaffBold});
  }

  @font-face {
    font-family: 'Kaff';
    font-weight: normal;
    font-style: normal;
    src: url(${KaffRegular}) format('woff');
  }

  @keyframes zoomTools {
    0%   { transform: scale(1);}
    50%  { transform: scale(1.5); }
    100% { transform: scale(1); }
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }
  #app {
    overflow-x: hidden;
  }
  a {
    color: #828486;
    em { font-style: italic; }
  }
  body,p, input,textarea {
    font-family: 'Avenir', 'Kaff', Helvetica, Arial, sans-serif;
  }
  h1,h2,h3,h4,h5 {
    font-family: 'KnockOut', 'Greta', Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    font-weight: normal;
  }

  p {
    a {
      color: #828486;
    }
  }
  button {
    font-family: 'Avenir', 'Kaff', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  input[type=text]::placeholder, textarea::placeholder {
    font-size: 12px;
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

  h1,h2,h3,h4,h5 { margin: 0; padding: 0; }
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
    overflow: hidden;

    .onboarding-language-changer {
      button { color: white; }
    }

    @media(max-width: 1320px) {
    }
    @media(max-width: 970px) {
      // height: 100vh;
      // overflow: hidden;

      & > #app {
        height: 100vh !important;
        overflow: hidden;
      }
    }
  }

  .ReactModal__Overlay--after-open {
    position: absolute;
    left: 0; top: 0;
    height: 100%;
    width: 100% !important;

    .circledContainer::after {
        width: 157px !important;
    }
  }
  [aria-label=MenuModal] {
    @media(max-width: 1320px) {
    }
    @media(max-width: 970px) {
      z-index: 1100 !important;
    }
  }

  [aria-label=Onboarding] {
    @media(max-width: 1320px) {
    }
    @media(max-width: 970px) {
      width: calc(100% - 75px) !important;
    }
  }
  [aria-label=ToolsModal] {
    display: none;
    @media(max-width: 1320px) {
    }
    @media(max-width: 970px) {
      display: block;
      width: 100% !important;
      height: calc(100% - 70px) !important;

      & > div { height: 100%; }
    }
  }

  .SnapshotModal {
    width: 1035px;
    @media(max-width: 1320px) {
      width: 970px;
    }
  }
  .MenuModal {
    top: 38px;
    @media(max-width: 1320px) {
    }
    @media(max-width: 970px) {
      top: 0px;
    }
  }
  .MenuModalOverlay {

    @media(max-width: 1320px) {
    }
    @media(max-width: 970px) {
      z-index: 1100;

      & > div {
        z-index: 1100;
      }
    }
  }

  .ToolModalOverlay {
    display: none;
    @media(max-width: 1320px) {
    }
    @media(max-width: 970px) {
      display: block;
      background-color: white !important;
      border-right: black 2px solid;
      border-left: black 2px solid;

    }
  }

  .ReactModalPortal {
  }

  @media (max-width: 1320px)
  body, html {
    height: auto!important;
    overflow: auto!important;
    max-height: 100% !important;
  }
`;
