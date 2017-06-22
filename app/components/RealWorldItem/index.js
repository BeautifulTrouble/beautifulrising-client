/**
*
* RealWorldItem
*
*/

import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

// positions;
const TOP = [0,2];
const BOTTOM = [1,3];
const LEFT = [0,2];
const RIGHT = [1,3];

const IMAGE_PREFIX = "https://beautifulrising.org/assets/content/";
const getSvgOverlay = (type) => {
  return require('assets/images/patterns/snapshotoverlay/' + type + '.svg')
};

const ImageBackground = styled.div`
  background-image: url(${props=>IMAGE_PREFIX+props.image});
  background-position: center center;
  opacity: 1;
  width: 100%;
  height: 300px;
  background-size: cover;
`;

const ImageBackgroundTop =styled(ImageBackground)`
  display: ${props=> props.pos%2==1 ? 'block' : 'none' };
`;
const ImageBackgroundBottom =styled(ImageBackground)`
  display: ${props=> props.pos%2==1 ? 'none' : 'block' };
  margin-top: ${props=>props.marginTop - 30}px;
`;

const RealWorldItemContainer = styled.div`
    // min-height: 300px;
    // position: relative;
    // margin-bottom: 30px;

    width: 100%;
    position: relative;
    padding: 22px;

    &::after {
      content: ' ';
      display: block;
    }
`;

const Example = styled.div`
  padding: 5px 10px;
  background-color: white;

  z-index: 100;
  font-size: 12px;
  width: 390px;
  border: 2px solid black;

  ${props=> {
    if(props.pos % 2 == 1) {
      return `
      margin-top: -22px;
      margin-left: 28px;
    `

    } else {
      return `
        position: absolute;
        bottom: 302px;
        left: 0;
        margin-top: ${props=>props.marginTop};
      `;
    }

  }}
  // position: absolute;
  // top: ${props=>TOP.includes(props.pos) ? '-10px' : 'auto' };
  // bottom: ${props=>BOTTOM.includes(props.pos) ? '-10px' : 'auto' };
  // left: ${props=>LEFT.includes(props.pos) ? '-10px' : 'auto' };
  // right: ${props=>RIGHT.includes(props.pos) ? '-10px' : 'auto' };
`;
const ExampleTitle = styled.h3`
  line-height: 1;
  margin: 0;
  padding: 0;
  font-size: 14px;
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

class RealWorldItem extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      exampleHeight: 0
    }
  }
  componentDidMount() {

    var node = ReactDOM.findDOMNode(this.refs.example);
    console.log("REFS", node.clientHeight);
    this.setState({ exampleHeight: node.clientHeight });
  }
  render() {
    return (
      <RealWorldItemContainer>
        <ImageBackgroundTop type={this.props.type} image={this.props.image} pos={this.props.pos}/>
          <Example ref={'example'} pos={this.props.pos}>
            <ExampleTitle>
              <a href={this.props.link} target='_blank'>
                {this.props.title}
              </a>
            </ExampleTitle>
            <ExampleDescription>
              {this.props.description}
            </ExampleDescription>
          </Example>
        <ImageBackgroundBottom type={this.props.type} image={this.props.image}
              pos={this.props.pos} marginTop={this.state.exampleHeight}/>
      </RealWorldItemContainer>
    );
  }

}

RealWorldItem.propTypes = {
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default RealWorldItem;
