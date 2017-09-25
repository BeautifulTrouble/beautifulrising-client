/**
*
* RealWorldItem
*
*/

import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import ContentBlock from 'components/ContentBlock';
import LatinThemeProvider from 'components/LatinThemeProvider';
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
  position: relative;
  z-index: 0;
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
    text-align: left;
    width: 100%;
    padding: 22px;
    direction: ltr;
    padding-bottom: 0;
    padding-top: 36px;
    margin-top: ${props=> props.pos%2==1 ? '0' : '-22px' };
    * {
      direction: ltr;
    }

    &::after {
      content: ' ';
      display: block;
    }
`;

const Example = styled.div`
  padding: 5px 10px;
  background-color: white;
  position: relative;
  z-index: 100;
  font-size: 12px;
  width: 100%;
  max-width: 342px;
  border: 2px solid black;

  ${props=> {
    if(props.pos % 2 == 1) {
      return `
      margin-top: -22px;
      left: calc(100% - 322px);
      @media(max-width: 1320px) {
        left: -22px;
        // left: auto;
      }
    `

    } else {
      return `
        margin-left: -20px;
        bottom: -20px;
      `;
    }

  }}
`;
const ExampleTitle = styled.h5`

  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 22px;
  font-weight: 800; font-family: 'Avenir', sans-serif;
  letter-spacing: 0;
  a {
    color: black;
    text-decoration: none;
    text-transform: uppercase;
  }
`;
const ExampleDescription = styled(ContentBlock)`
  font-style: italic;
  margin: 5px 0 0;
  padding: 0;
  font-size: 12px;
  line-height: 18px;

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

    this.setState({ exampleHeight: node.clientHeight });
  }

  render() {
    return (
      <LatinThemeProvider>
        <RealWorldItemContainer  pos={this.props.pos}>
          <ImageBackgroundTop type={this.props.type} image={this.props.image} pos={this.props.pos}/>
            <Example ref={'example'} pos={this.props.pos}>
              <ContentBlock>
                <ExampleTitle>
                  <a href={this.props.link} target='_blank'>
                    {this.props.title}
                  </a>
                </ExampleTitle>
              </ContentBlock>
                <ExampleDescription>
                  {this.props.description}
                </ExampleDescription>
            </Example>
          <ImageBackgroundBottom type={this.props.type} image={this.props.image}
                pos={this.props.pos} />
        </RealWorldItemContainer>
      </LatinThemeProvider>
    );
  }

}

RealWorldItem.propTypes = {
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default RealWorldItem;
