/**
*
* ContributeType
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import StoryIcon from 'assets/images/type/stories.svg';
import TacticIcon from 'assets/images/type/tactics.svg';
import MethodologyIcon from 'assets/images/type/methodologies.svg';
import TheoryIcon from 'assets/images/type/theories.svg';
import PrincipleIcon from 'assets/images/type/principle.svg';
import Isvg from 'react-inlinesvg';
import Markdown from 'react-remarkable';

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
  font-size: 14px;
  text-align: left;
  margin-top: 5px;
  line-height: 1.2;
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
  text-align: left;

  a {
    color: #828486;
    font-weight: bold;
    font-size: 14px;
  }
`;
const Content = styled.div`
  display: ${props=>props.show?'block':'none'};
`;
const Button = styled.button`
  outline: none;
  cursor: pointer;
`;

class ContributeType extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      chosen: null
    }
  }

  handleClick(index) {
    // console.log(e.target, e);
    if ( index === this.state.chosen ) {
      this.setState({ chosen: null })
    } else {
      this.setState({ chosen: index });
    }
  }

  render() {
    return (
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
                    {item.description}
                  </Spiel>
                  <CallToAction>
                    <Markdown source={item.form} />
                  </CallToAction>
                </Content>
              </Type>
            ))}
          </TypeList>
        </Viewport>
      </Container>
    );
  }
}


const DATA = [
  {
    type: 'story',
    icon: StoryIcon,
    label: 'Story',
    description: 'Accounts of memorable actions and campaigns, analysing what worked, or didn’t, and why',
    form: '[GO TO FORM](https://docs.google.com/forms/d/e/1FAIpQLSeC_EdxoO7owVnL8fjSERZlychwMhDOR-7rI1SDtpL4ijZgkg/viewform)'
  },
  {
    type: 'tactic',
    icon: TacticIcon,
    label: 'Tactics',
    description: 'Specific forms of creative action, such as a flash mob or blockade.',
    form: '[GO TO FORM](https://docs.google.com/forms/d/e/1FAIpQLSeC_EdxoO7owVnL8fjSERZlychwMhDOR-7rI1SDtpL4ijZgkg/viewform)'
  },
  {
    type: 'principle',
    icon: PrincipleIcon,
    label: 'Principles',
    description: 'Time-tested guidelines for how to design successful actions and campaigns.',
    form: '[GO TO FORM](https://docs.google.com/forms/d/e/1FAIpQLSeC_EdxoO7owVnL8fjSERZlychwMhDOR-7rI1SDtpL4ijZgkg/viewform)'
  },
  {
    type: 'theory',
    icon: TheoryIcon,
    label: 'Theories',
    description: 'Big-picture ideas that help us understand how the world works and how we might change it.',
    form: '[GO TO FORM](https://docs.google.com/forms/d/e/1FAIpQLSeC_EdxoO7owVnL8fjSERZlychwMhDOR-7rI1SDtpL4ijZgkg/viewform)'
  },
  {
    type: 'methodology',
    icon: MethodologyIcon,
    label: 'Methodologies',
    description: 'Strategic frameworks and hands-on exercises to help you assess your situation and plan your campaign.',
    form: '[GO TO FORM](https://docs.google.com/forms/d/e/1FAIpQLSeC_EdxoO7owVnL8fjSERZlychwMhDOR-7rI1SDtpL4ijZgkg/viewform)'
  },

];

ContributeType.propTypes = {

};

export default ContributeType;
