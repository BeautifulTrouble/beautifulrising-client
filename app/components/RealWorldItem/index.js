/**
*
* RealWorldItem
*
*/

import React, {PropTypes} from 'react';
import styled from 'styled-components';

// positions;
const TOP = [0,3];
const BOTTOM = [1,2];
const LEFT = [0,1];
const RIGHT = [2,3];

const IMAGE_PREFIX = "https://beautifulrising.org/assets/content/";
const getSvgOverlay = (type) => {
  return require('assets/images/patterns/snapshotoverlay/' + type + '.svg')
};

const ImageBackground = styled.div`
  background-image: url(${props=>getSvgOverlay(props.type)}),url(${props=>IMAGE_PREFIX+props.image});
  background-position-x: 50%;
  background-position-y: 25%;
  opacity: 0.5;
  width: 400px;
  height: 152px;
  transform: translate(12%, 15%);
`;
const RealWorldItemContainer = styled.div`
    min-height: 200px;
    position: relative;
`;

const Example = styled.div`
  padding: 5px 10px;
  background-color: white;
  position: absolute;
  z-index: 100;
  font-size: 12px;
  width: 390px;
  border: 2px solid black;
  top: ${props=>TOP.includes(props.pos) ? '-10px' : 'auto' };
  bottom: ${props=>BOTTOM.includes(props.pos) ? '-10px' : 'auto' };
  left: ${props=>LEFT.includes(props.pos) ? '-10px' : 'auto' };
  right: ${props=>RIGHT.includes(props.pos) ? '-10px' : 'auto' };
`;
const ExampleTitle = styled.h3`
  margin: 0;
  padding: 0;
  a {
    color: black;
    text-decoration: none;
    text-transform: uppercase;
  }
`;
const ExampleDescription = styled.p`
  font-style: italic;
  margin: 5px 0 0;
  padding: 0;
`;

function RealWorldItem(props) {

  return (
    <RealWorldItemContainer>
      <ImageBackground type={props.type} image={props.image} />
      <Example pos={props.pos}>
        <ExampleTitle>
          <a href={props.link} target='_blank'>
            {props.title}
          </a>
        </ExampleTitle>
        <ExampleDescription>
          {props.description}
        </ExampleDescription>
      </Example>
    </RealWorldItemContainer>
  );
}

RealWorldItem.propTypes = {
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default RealWorldItem;
