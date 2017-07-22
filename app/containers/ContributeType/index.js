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

import TranslatableStaticText from 'containers/TranslatableStaticText';

import LanguageThemeProvider from 'components/LanguageThemeProvider';
import ContentBlock from 'components/ContentBlock';
import SmallSectionHeader from 'components/SmallSectionHeader';
import typeMessages from 'components/ToolTypeArea/messages';

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

import StoryIcon from 'assets/images/type/stories.svg';
import TacticIcon from 'assets/images/type/tactics.svg';
import MethodologyIcon from 'assets/images/type/methodologies.svg';
import TheoryIcon from 'assets/images/type/theories.svg';
import PrincipleIcon from 'assets/images/type/principle.svg';

import messages from './messages';
import keys from './constants';

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
        <div>
          <div>
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
    label: (<TranslatableStaticText text={key.KEY_TYPES_STORIES} />),
    description: (<TranslatableStaticText text={key.KEY_DEF_STORY_SHORT} />)
  },
  {
    type: 'tactic',
    icon: TacticIcon,
    label: (<TranslatableStaticText text={key.KEY_TYPES_TACTICS} />),
    description: (<TranslatableStaticText text={key.KEY_DEF_TACTIC_SHORT} />)
  },
  {
    type: 'principle',
    icon: PrincipleIcon,
    label: (<TranslatableStaticText text={key.KEY_TYPES_PRINCIPLES} />),
    description: (<TranslatableStaticText text={key.KEY_DEF_PRINCIPLE_SHORT} />)
  },
  {
    type: 'theory',
    icon: TheoryIcon,
    label: (<TranslatableStaticText text={key.KEY_TYPES_THEORIES} />),
    description: (<TranslatableStaticText text={key.KEY_DEF_THEORY_SHORT} />)
  },
  {
    type: 'methodology',
    icon: MethodologyIcon,
    label: (<TranslatableStaticText text={key.KEY_TYPES_METHODOLOGIES} />),
    description: (<TranslatableStaticText text={key.KEY_DEF_METHODOLOGY_SHORT} />)
  },

];

ContributeType.propTypes = {

};

export default injectIntl(ContributeType);
