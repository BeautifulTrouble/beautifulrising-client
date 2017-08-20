/**
*
* AboutPageComponents
*
*/

import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import Markdown from 'react-remarkable';
import ContentBlock from 'components/ContentBlock';
import { injectIntl } from 'react-intl';
import AboutSection from 'components/AboutPage/AboutSection';
import VisibilitySensor from 'react-visibility-sensor';
import SmallHeaderBlock from 'components/SmallHeaderBlock';

import messages from './messages';

const List = styled.ul`
  text-align: left;
  padding-left: 0;
`;

const OurValuesList = styled.ul`
  @media(max-width: 1170px) {
    padding: 0;
  }
`;

import ListItem from 'components/AboutPage/Values/ListItem';
import Count from 'components/AboutPage/Values/Count';
import SubListItem from 'components/AboutPage/Values/SubListItem';
import ValueHeader from 'components/AboutPage/Values/ValueHeader';
import SubListContentBlock from 'components/AboutPage/Values/SubListContentBlock';

export class OurValues extends React.Component {

  renderHeader() {
    return (
      <VisibilitySensor onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
        <h2>{this.props.header}</h2>
      </VisibilitySensor>
    )
  }
  render() {
    if (!this.props.ourValues) return null;
    const lang = this.props.intl.locale
    return (
      <LanguageThemeProvider>
        <AboutSection id='values' name='values' lang={lang} position={this.props.toString().length}>
          { this.props.hideHeader ? null : this.renderHeader() }
            <List>
              { this.props.ourValues.map((item, ind) =>
                    {
                      switch(item.get('type')) {
                        case 'introduction': return null;
                        case 'values': return (
                          <OurValuesList key={ind}>
                            { item.get('value').map((subitem, subindex) => (
                                <SubListItem key={subindex} lang={lang}>
                                  <Count>{subindex + 1}</Count>
                                  <ValueHeader>{subitem.get('title')}</ValueHeader>
                                  <SubListContentBlock>
                                    <Markdown source={subitem.get('description')} />
                                  </SubListContentBlock>
                                </SubListItem>
                            )) }
                          </OurValuesList>
                        );
                        case 'disclaimer': return (
                          <OurValuesList key={ind}>
                            <SubListItem lang={lang} style={{paddingTop: 40}}>
                              <ValueHeader>{item.get('value')}</ValueHeader>
                            </SubListItem>
                          </OurValuesList>
                        );
                        case 'disclaimer-text': return (
                          <OurValuesList key={ind}>
                            <SubListItem lang={lang}>
                              <SubListContentBlock>
                                <p key={ind} style={{color: '#828486', fontStyle: 'italic'}}>
                                  <Markdown source={item.get('value')} />
                                </p>
                              </SubListContentBlock>
                            </SubListItem>
                          </OurValuesList>
                        );
                     }
                   }
                )
              }
            </List>

        </AboutSection>
      </LanguageThemeProvider>
    );
  }
}

export default injectIntl(OurValues);
