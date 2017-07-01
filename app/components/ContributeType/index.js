/**
*
* ContributeType
*
*/

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage, injectIntl } from 'react-intl';
import Isvg from 'react-inlinesvg';
import Markdown from 'react-remarkable';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import ContentBlock from 'components/ContentBlock';
import typeMessages from 'components/ToolTypeArea/messages';

import StoryIcon from 'assets/images/type/stories.svg';
import TacticIcon from 'assets/images/type/tactics.svg';
import MethodologyIcon from 'assets/images/type/methodologies.svg';
import TheoryIcon from 'assets/images/type/theories.svg';
import PrincipleIcon from 'assets/images/type/principle.svg';

import messages from './messages';

const Container = styled.div``;
const Viewport = styled.div``;
const Header = styled.h1``;

const TypeList = styled.ul`
vertical-align: top;
padding: 0 60px;
`;
const Type = styled.li`
  vertical-align: top;
  display: inline-block;
  list-style: none;
  width: 18%;
  margin-right: 2%;
  &:last-child {
    margin-right: 0;
  }

  svg {
    width: 100%;
  }
`;

const TypeName = styled.h3`
  margin-bottom: 0;
  text-align: left
`;

const Spiel = styled.div`
  margin-top: 5px;
  padding: 70px 0 0;
  position:relative;

  &:before {
    content: ' '
    display: inline-block;
    width: 2px;
    border-right: 1px solid;
    height: 50px;
    position: absolute;
    left: 50%;
    top: 10px;
  }
`;
const CallToAction = styled.div`
  a {
    font-weight: bold;
  }
`;
const Content = styled.div`
  display: ${props=>props.show?'block':'none'};
`;
const Button = styled.button`
  outline: none;
  cursor: pointer;
`;
const Examples = styled.div`
`;

const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 800; font-family: 'Avenir', 'Kaff', sans-serif;
  letter-spacing: 0;
  padding-bottom: 20px;
  margin-bottom: 60px;
  margin-left: 30px;
  margin-right: 30px;

  margin-bottom: 10px;
  margin-top: 30px;
`;

class ContributeType extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      chosen: 0
    }
  }

  handleClick(index) {
    if ( index === this.state.chosen ) {
    } else {
      this.setState({ chosen: index });
    }
  }

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <LanguageThemeProvider>
        <Container>
          <Viewport>
            <TypeList>
              {DATA.map((item, index) => (
                <Type key={index}>
                  <Button value={index} onClick={()=>this.handleClick(index)}>
                    <TypeName>{item.label}</TypeName>
                    <Isvg src={item.icon} />
                  </Button>
                  <Content show={this.state.chosen === index}>
                    <Spiel>
                      <ContentBlock>
                        {item.description}
                      </ContentBlock>
                    </Spiel>
                    <CallToAction>
                      <ContentBlock>
                        <Markdown source={formatMessage(messages.callToAction)} />
                      </ContentBlock>
                    </CallToAction>
                  </Content>
                </Type>
              ))}
            </TypeList>
            <Examples>
              <Subtitle>
                <FormattedMessage {...messages.examples} values={{
                  type: DATA[this.state.chosen].label
                }}/>
              </Subtitle>

              {this.props.examples[DATA[this.state.chosen].type]}
            </Examples>
          </Viewport>
        </Container>
      </LanguageThemeProvider>
    );
  }
}


const DATA = [
  {
    type: 'story',
    icon: StoryIcon,
    label: (<FormattedMessage {...typeMessages.storyHead} />),
    description: (<FormattedMessage {...typeMessages.storyDesc} />)
  },
  {
    type: 'tactic',
    icon: TacticIcon,
    label: (<FormattedMessage {...typeMessages.tacticHead} />),
    description: (<FormattedMessage {...typeMessages.tacticDesc} />)
  },
  {
    type: 'principle',
    icon: PrincipleIcon,
    label: (<FormattedMessage {...typeMessages.principleHead} />),
    description: (<FormattedMessage {...typeMessages.principleDesc} />)
  },
  {
    type: 'theory',
    icon: TheoryIcon,
    label: (<FormattedMessage {...typeMessages.theoryHead} />),
    description: (<FormattedMessage {...typeMessages.theoryDesc} />)
  },
  {
    type: 'methodology',
    icon: MethodologyIcon,
    label: (<FormattedMessage {...typeMessages.methodologyHead} />),
    description: (<FormattedMessage {...typeMessages.methodologyDesc} />)
  },

];

ContributeType.propTypes = {

};

export default injectIntl(ContributeType);
