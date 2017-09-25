/**
*
* ContributeType
*
*/

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Link } from 'react-router';
import Isvg from 'react-inlinesvg';
import Markdown from 'react-remarkable';

import TranslatableStaticText, { injectStaticText } from 'containers/TranslatableStaticText';

import LanguageThemeProvider from 'components/LanguageThemeProvider';
import ContentBlock from 'components/ContentBlock';
import SmallSectionHeader from 'components/SmallSectionHeader';

/*Components*/
import Button from 'components/ContributeType/Button';
import CallToAction from 'components/ContributeType/CallToAction';
import Content from 'components/ContributeType/Content';
import Examples from 'components/ContributeType/Examples';
import Spiel from 'components/ContributeType/Spiel';
import Subtitle from 'components/ContributeType/Subtitle';
import Type from 'components/ContributeType/Type';
import TypeList from 'components/ContributeType/TypeList';
import TypeName from 'components/ContributeType/TypeName';
import ExampleContainer from 'components/ContributeType/ExampleContainer';

import StoryIcon from 'assets/images/type/stories.svg';
import TacticIcon from 'assets/images/type/tactics.svg';
import MethodologyIcon from 'assets/images/type/methodologies.svg';
import TheoryIcon from 'assets/images/type/theories.svg';
import PrincipleIcon from 'assets/images/type/principle.svg';

import messages from './messages';
import keys from './constants';
import staticText from './staticText';

const MobileContent = styled(Content)`
  display: none;
  padding: 0 20px 20px;
  @media(max-width: 1320px) {
    width: 100%;
    display: ${p=>p.show?'block':'none'};
    * {text-align: center !important;}
  }
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
    const { buildMessage } = this.props.translatable;
    return (
      <LanguageThemeProvider>
        <div>
          <div>
            <TypeList>
              {DATA.map((item, index) => (
                <Type key={index} isChosen={this.state.chosen === index}>
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
                        <Link to={buildMessage(item.form)} target="_blank" style={{textTransform: 'uppercase'}}>
                          <TranslatableStaticText {...staticText.goToForm} />
                        </Link>
                      </ContentBlock>
                    </CallToAction>
                  </Content>
                </Type>
              ))}
            </TypeList>
            {DATA.map((item, index) => (
              <MobileContent key={index} show={this.state.chosen === index}>
                  <Spiel>
                    <ContentBlock>
                      {item.description}
                    </ContentBlock>
                  </Spiel>
                  <CallToAction>
                    <ContentBlock>
                      <Link to={buildMessage(item.form)} target="_blank" style={{textTransform: 'uppercase'}}>
                        <TranslatableStaticText {...staticText.goToForm} />
                      </Link>
                    </ContentBlock>
                  </CallToAction>
              </MobileContent>
            ))}
            <Examples>
              <Subtitle>
                <FormattedMessage {...messages.examples} values={{
                  type: DATA[this.state.chosen].label
                }}/>
              </Subtitle>
              <ExampleContainer>
                {this.props.examples[DATA[this.state.chosen].type]}
              </ExampleContainer>
            </Examples>
          </div>
        </div>
      </LanguageThemeProvider>
    );
  }
}


const DATA = [
  {
    type: 'story',
    icon: StoryIcon,
    label: (<TranslatableStaticText {...staticText.stories} />),
    description: (<TranslatableStaticText {...staticText.shortDefinitionStory} />),
    form: staticText.storyForm
  },
  {
    type: 'tactic',
    icon: TacticIcon,
    label: (<TranslatableStaticText {...staticText.tactics} />),
    description: (<TranslatableStaticText {...staticText.shortDefinitionTactic} />),
    form: staticText.tacticForm
  },
  {
    type: 'principle',
    icon: PrincipleIcon,
    label: (<TranslatableStaticText {...staticText.principles} />),
    description: (<TranslatableStaticText {...staticText.shortDefinitionPrinciple} />),
    form: staticText.principleForm
  },
  {
    type: 'theory',
    icon: TheoryIcon,
    label: (<TranslatableStaticText {...staticText.theories} />),
    description: (<TranslatableStaticText {...staticText.shortDefinitionTheory} />),
    form: staticText.theoryForm
  },
  {
    type: 'methodology',
    icon: MethodologyIcon,
    label: (<TranslatableStaticText {...staticText.methodologies} />),
    description: (<TranslatableStaticText {...staticText.shortDefinitionMethodology} />),
    form: staticText.methodologyForm
  },

];

ContributeType.propTypes = {

};

export default injectStaticText(ContributeType);
