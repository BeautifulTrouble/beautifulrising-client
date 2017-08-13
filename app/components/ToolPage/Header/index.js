import styled from 'styled-components';
import Caption from './Caption';
import Container from './Container';
import Content from './Content';
import ContentViewport from './ContentViewport';
import CTA from './CTA';
import ShareContainer from './ShareContainer';
import Title from './Title';
import ToolType from './ToolType';
import Viewport from './Viewport';

import InteractiveViewport from './InteractiveViewport';
import InteractiveContainer from './InteractiveContainer';

import MobileInteractiveContainer from './MobileInteractiveContainer';

export default styled.section`
  width: 100%;
  height: 430px;

  @media(max-width: 700px) {
    height: 245px;
  }
`;;

export {
  Caption, Container,
  Content, ContentViewport,
  CTA, ShareContainer,
  Title, ToolType,
  Viewport,

  MobileInteractiveContainer, 

  InteractiveViewport, InteractiveContainer
};
