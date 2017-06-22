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
const LEFT = [1,2];
const RIGHT = [0,3];

const IMAGE_PREFIX = "https://beautifulrising.org/assets/content/";
const getSvgOverlay = (type) => {
  return require('assets/images/patterns/snapshotoverlay/' + type + '.svg')
};

const ImageBackground = styled.div`
  background-image: url(${props=>IMAGE_PREFIX+props.image});
  background-position: center center;
  opacity: 1;
  width: 400px;
  height: 252px;
  transform: translate(12%, 15%);
  background-size: cover;
`;
const RealWorldItemContainer = styled.div`
    min-height: 300px;
    position: relative;
    margin-bottom: 30px;
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
  line-height: 1;
  margin: 0;
  padding: 0;
  font-size: 19px;
  font-family: 'Avenir Black', sans-serif;
  letter-spacing: 0;
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
